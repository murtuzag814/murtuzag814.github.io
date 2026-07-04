#!/usr/bin/env python3
"""
Auto-Post Builder for GMurtuza Portfolio
Reads .txt + .jpg pairs from /posts/ folder and injects them into index.html
Also generates updates.html archive page and feed.xml RSS feed.
"""

import os
import re
import subprocess
from datetime import datetime
from pathlib import Path

POSTS_DIR = Path("posts")
INDEX_FILE = Path("index.html")
UPDATES_FILE = Path("updates.html")
FEED_FILE = Path("feed.xml")
SITEMAP_FILE = Path("sitemap.xml")
SITE_URL = "https://murtuzag814.github.io"

def get_post_date(filepath):
    """Get the date a post was first committed to git (publish date).
    GitHub Actions checks out a fresh copy on every run, which resets
    every file's mtime to 'now' — so mtime alone can't be trusted for
    sorting once the repo has more than one post. Git history is stable."""
    try:
        result = subprocess.run(
            ['git', 'log', '--follow', '--format=%at', '--', str(filepath)],
            capture_output=True, text=True, check=True
        )
        timestamps = [t for t in result.stdout.strip().split('\n') if t]
        if timestamps:
            earliest = timestamps[-1]  # git log is newest-first; last line = first commit
            return datetime.fromtimestamp(int(earliest))
    except Exception:
        pass
    return datetime.fromtimestamp(os.path.getmtime(filepath))

def get_post_files():
    """Scan posts directory and return paired txt+jpg posts sorted by date."""
    if not POSTS_DIR.exists():
        POSTS_DIR.mkdir(parents=True)
        with open(POSTS_DIR / ".gitkeep", "w") as f:
            f.write("")
        return []
    
    posts = {}
    for f in POSTS_DIR.iterdir():
        if f.suffix.lower() in ['.txt', '.jpg', '.jpeg', '.png', '.webp']:
            name = f.stem
            if name not in posts:
                posts[name] = {'txt': None, 'img': None}
            if f.suffix.lower() == '.txt':
                posts[name]['txt'] = f
            else:
                posts[name]['img'] = f
    
    valid_posts = []
    for name, files in posts.items():
        if files['txt']:
            valid_posts.append({
                'name': name,
                'txt': files['txt'],
                'img': files['img'],
                'date': get_post_date(files['txt'])
            })
    
    valid_posts.sort(key=lambda x: x['date'], reverse=True)
    return valid_posts

def parse_post(post):
    """Parse a post's .txt file. First line = title, rest = body."""
    with open(post['txt'], 'r', encoding='utf-8') as f:
        content = f.read().strip()
    
    lines = content.split('\n', 1)
    title = lines[0].strip() if lines else post['name'].replace('-', ' ').title()
    body = lines[1].strip() if len(lines) > 1 else ""
    body = convert_markdown(body)
    return title, body

def convert_markdown(text):
    """Convert basic markdown to HTML."""
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2" target="_blank" rel="noopener">\1</a>', text)
    text = text.replace('\n\n', '</p><p>')
    text = text.replace('\n', '<br>')
    return text

def generate_post_html(post, title, body):
    """Generate HTML for homepage with Read More button - Matches Index 1"""
    date_str = post['date'].strftime('%B %d, %Y')
    date_iso = post['date'].strftime('%Y-%m-%d')
   
    img_html = ""
    if post['img']:
        img_path = f"posts/{post['img'].name}"
        img_html = f'''<div class="post-img-wrap">
                          <img src="{img_path}" alt="{title}" loading="lazy">
                      </div>'''
   
    html = f'''<article class="post-card" itemscope itemtype="https://schema.org/BlogPosting">
                    <meta itemprop="datePublished" content="{date_iso}">
                    <meta itemprop="headline" content="{title}">
                    <meta itemprop="url" content="{SITE_URL}/updates.html#{post['name']}">
                    <div class="post-card-inner">
                        {img_html}
                        <div class="post-content">
                            <h3 class="post-title" itemprop="headline">{title}</h3>
                            <time class="post-date" datetime="{date_iso}">📅 {date_str}</time>
                            <div class="post-body" itemprop="articleBody">
                                <p>{body}</p>
                            </div>
                            <div class="post-actions">
                                <button class="post-read-more" onclick="togglePost(this)">Read more ↓</button>
                                <button class="post-read-less" onclick="togglePost(this)">Show less ↑</button>
                            </div>
                        </div>
                    </div>
                </article>'''
    return html

def generate_post_html_archive(post, title, body):
    """Generate HTML for a post in the archive page."""
    date_str = post['date'].strftime('%B %d, %Y')
    date_iso = post['date'].strftime('%Y-%m-%d')
    
    img_html = ""
    if post['img']:
        img_path = f"posts/{post['img'].name}"
        img_html = f'''                        <div class="post-img-wrap">
                            <img src="{img_path}" alt="{title}" loading="lazy">
                        </div>'''
    
    html = f'''                <article class="post-card" id="{post['name']}" itemscope itemtype="https://schema.org/BlogPosting">
                    <meta itemprop="datePublished" content="{date_iso}">
                    <meta itemprop="headline" content="{title}">
                    <meta itemprop="url" content="{SITE_URL}/updates.html#{post['name']}">
{img_html}
                    <div class="post-content">
                        <h3 class="post-title" itemprop="headline">{title}</h3>
                        <time class="post-date" datetime="{date_iso}">&#128197; {date_str}</time>
                        <div class="post-body" itemprop="articleBody">
                            <p>{body}</p>
                        </div>
                    </div>
                </article>'''
    return html

def generate_feed_xml(posts):
    """Generate RSS feed XML."""
    items = []
    for post in posts:
        title, body = parse_post(post)
        date_rfc = post['date'].strftime('%a, %d %b %Y %H:%M:%S +0000')
        post_url = f"{SITE_URL}/updates.html#{post['name']}"
        items.append(f'''    <item>
      <title>{title}</title>
      <link>{post_url}</link>
      <guid isPermaLink="true">{post_url}</guid>
      <pubDate>{date_rfc}</pubDate>
      <description><![CDATA[{body[:500]}]]></description>
    </item>''')
    
    now = datetime.now().strftime('%a, %d %b %Y %H:%M:%S +0000')
    feed = f'''<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GMurtuza SEO - What We're Doing Right Now</title>
    <link>{SITE_URL}</link>
    <description>Latest updates from Ghulam Murtuza - E-Commerce SEO, AEO &amp; GEO Specialist in Karachi, Pakistan</description>
    <language>en</language>
    <lastBuildDate>{now}</lastBuildDate>
    <atom:link href="{SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
{chr(10).join(items)}
  </channel>
</rss>'''
    return feed

def generate_sitemap(posts):
    """Generate sitemap with post URLs."""
    urls = [
        f"  <url><loc>{SITE_URL}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>",
        f"  <url><loc>{SITE_URL}/updates.html</loc><changefreq>daily</changefreq><priority>0.9</priority></url>"
    ]
    for post in posts:
        urls.append(f"  <url><loc>{SITE_URL}/updates.html#{post['name']}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>")
    
    sitemap = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>'''
    return sitemap

def inject_posts_into_index(homepage_posts_html, post_count):
    """Inject the posts section into index.html."""
    with open(INDEX_FILE, 'r', encoding='utf-8') as f:
        html = f.read()
    
    view_all_link = ""
    if post_count > 5:
        view_all_link = f'''                <div class="posts-view-all">
                    <a href="updates.html" class="btn-secondary">View All {post_count} Updates &#8594;</a>
                </div>'''
    
posts_section = f'''<!-- UPDATES SECTION -->
<section id="updates">
  <div class="section-inner">
    <span class="section-label">What We're Doing Right Now</span>
    <h2 class="section-title">Latest updates &amp; insights</h2>
    <p class="section-sub">Fresh content on SEO, AEO, GEO, e-commerce strategy, and Pakistan's D2C ecosystem — updated regularly.</p>
    <div class="posts-grid">
{homepage_posts_html}
    </div>
{view_all_link}
  </div>
</section>

<!-- /UPDATES SECTION -->'''
    
    # Find insertion point. If a previously-generated UPDATES SECTION block
    # already exists, replace it in place (idempotent across re-runs).
    # Otherwise insert fresh content before the PROFILES marker.
    existing_block_pattern = re.compile(
        r'<!-- UPDATES SECTION -->.*?<!-- /UPDATES SECTION -->',
        re.DOTALL
    )
    if existing_block_pattern.search(html):
        html = existing_block_pattern.sub(posts_section, html, count=1)
    else:
        marker = '<!-- PROFILES -->'
        if marker in html:
            html = html.replace(marker, posts_section + '\n' + marker)
        else:
            alt_marker = '<section id="profiles"'
            if alt_marker in html:
                html = html.replace(alt_marker, posts_section + '\n' + alt_marker)
            else:
                print("WARNING: Could not find insertion point")
                return
    
    # Update nav
    nav_old = '<li><a href="#profiles">Profiles</a></li>'
    nav_new = '<li><a href="#updates">Updates</a></li>\n    <li><a href="#profiles">Profiles</a></li>'
    if nav_old in html and '<li><a href="#updates">' not in html:
        html = html.replace(nav_old, nav_new)
    
    with open(INDEX_FILE, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"Injected {post_count} posts into index.html")

def generate_updates_page(posts, all_posts_html):
    """Generate the updates.html archive page."""
    updates_page = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>All Updates - GMurtuza SEO | E-Commerce SEO, AEO & GEO Insights</title>
<meta name="description" content="Complete archive of updates, insights, and articles by Ghulam Murtuza - E-Commerce SEO, AEO, GEO and CRO specialist in Karachi, Pakistan.">
<meta name="robots" content="index, follow">
<meta property="og:title" content="All Updates - GMurtuza SEO Insights">
<meta property="og:description" content="Browse all articles and updates on e-commerce SEO, AEO, GEO, and Pakistan's D2C ecosystem.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://murtuzag814.github.io/updates.html">
<link rel="canonical" href="https://murtuzag814.github.io/updates.html">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<style>
  :root{--ink:#0A0A0F;--ink-2:#3A3A4A;--ink-3:#7A7A8A;--surface:#F7F6F2;--surface-2:#EEECEA;--accent:#1A3FD4;--accent-2:#0ECC8E;--accent-3:#FF5C1A;--white:#FFFFFF;--border:rgba(10,10,15,0.1)}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:'DM Sans',sans-serif;background:var(--surface);color:var(--ink);line-height:1.6;overflow-x:hidden}
  nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1rem 2.5rem;background:rgba(247,246,242,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
  .nav-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;color:var(--ink);text-decoration:none;letter-spacing:-0.02em}
  .nav-logo span{color:var(--accent)}
  .nav-links{display:flex;gap:2rem;list-style:none}
  .nav-links a{font-size:0.85rem;color:var(--ink-2);text-decoration:none;font-weight:500;transition:color 0.2s}
  .nav-links a:hover{color:var(--accent)}
  .nav-cta{background:var(--ink);color:var(--white);padding:0.5rem 1.25rem;border-radius:100px;font-size:0.82rem;font-weight:500;text-decoration:none;transition:background 0.2s,transform 0.2s}
  .nav-cta:hover{background:var(--accent);transform:translateY(-1px)}
  section{padding:5rem 2.5rem}
  .section-inner{max-width:1100px;margin:0 auto}
  .section-label{font-size:0.75rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--accent);margin-bottom:0.75rem}
  .section-title{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;line-height:1.1;letter-spacing:-0.025em;color:var(--ink);margin-bottom:1rem}
  .section-sub{font-size:1rem;color:var(--ink-2);max-width:560px;line-height:1.7;margin-bottom:3rem}
  .page-header{padding-top:7rem;background:var(--ink)}
  .page-header .section-label{color:var(--accent-2)}
  .page-header .section-title{color:var(--white)}
  .page-header .section-sub{color:rgba(255,255,255,0.55)}
  .posts-grid{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:2rem}
  .post-card{background:var(--white);border:1px solid var(--border);border-radius:20px;overflow:hidden;transition:all 0.3s;display:grid;grid-template-columns:300px 1fr}
  .post-card:hover{border-color:var(--accent);transform:translateY(-3px);box-shadow:0 12px 40px rgba(10,10,15,0.08)}
  .post-card:not(:has(.post-img-wrap)){grid-template-columns:1fr}
  .post-img-wrap{height:100%;min-height:220px;overflow:hidden;background:var(--surface-2)}
  .post-img-wrap img{width:100%;height:100%;object-fit:cover;display:block}
  .post-content{padding:2rem;display:flex;flex-direction:column;gap:0.75rem}
  .post-title{font-family:'Syne',sans-serif;font-size:1.35rem;font-weight:700;color:var(--ink);line-height:1.2;letter-spacing:-0.015em}
  .post-date{font-size:0.82rem;color:var(--ink-3);font-weight:400}
  .post-body{font-size:0.92rem;color:var(--ink-2);line-height:1.8}
  .post-body a{color:var(--accent);text-decoration:underline;text-underline-offset:3px}
  .post-body a:hover{color:var(--ink)}
  .post-body strong{color:var(--ink);font-weight:600}
  .back-link{display:inline-flex;align-items:center;gap:0.5rem;color:var(--accent);text-decoration:none;font-weight:500;font-size:0.9rem;margin-bottom:2rem}
  .back-link:hover{color:var(--ink)}
  footer{padding:2rem 2.5rem;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:0.82rem;color:var(--ink-3)}
  footer a{color:var(--ink-2);text-decoration:none}
  footer a:hover{color:var(--accent)}
  @media(max-width:768px){nav{padding:1rem 1.25rem}.nav-links{display:none}section{padding:3rem 1.25rem}.page-header{padding-top:6rem}.post-card{grid-template-columns:1fr}.post-img-wrap{max-height:240px}.post-content{padding:1.5rem}footer{flex-direction:column;gap:0.5rem;text-align:center}}
</style>
</head>
<body>
<nav>
  <a href="index.html" class="nav-logo">G<span>M</span>urtuza</a>
  <ul class="nav-links">
    <li><a href="index.html#services">Services</a></li>
    <li><a href="index.html#about">About</a></li>
    <li><a href="index.html#projects">Projects</a></li>
    <li><a href="index.html#updates">Updates</a></li>
    <li><a href="index.html#profiles">Profiles</a></li>
    <li><a href="index.html#contact">Contact</a></li>
  </ul>
  <a href="https://wa.me/923103479022" target="_blank" rel="noopener" class="nav-cta">Get in touch &#8594;</a>
</nav>
<section class="page-header">
  <div class="section-inner">
    <p class="section-label">Complete Archive</p>
    <h1 class="section-title">All Updates &amp; Insights</h1>
    <p class="section-sub">Every article, update, and insight published - organized newest first. Subscribe via <a href="feed.xml" style="color:var(--accent-2);">RSS feed</a>.</p>
  </div>
</section>
<section>
  <div class="section-inner">
    <a href="index.html" class="back-link">&#8592; Back to Portfolio</a>
    <div class="posts-grid">
''' + all_posts_html + '''
    </div>
    <a href="index.html" class="back-link">&#8592; Back to Portfolio</a>
  </div>
</section>
<footer>
  <div>&copy; 2026 Ghulam Murtuza &middot; GMurtuza SEO &middot; Karachi, Pakistan</div>
  <div><a href="index.html">Home</a> &middot; <a href="feed.xml">RSS</a> &middot; <a href="https://www.linkedin.com/in/ghulam-murtuza-043b8b243/">LinkedIn</a></div>
</footer>
</body>
</html>'''
    
    with open(UPDATES_FILE, 'w', encoding='utf-8') as f:
        f.write(updates_page)
    print(f"Generated updates.html with {len(posts)} posts")

def main():
    print("=" * 60)
    print("  GMurtuza Portfolio - Auto Post Builder")
    print("=" * 60)
    
    posts = get_post_files()
    print(f"\nFound {len(posts)} posts in /posts/ directory")
    
    if not posts:
        print("No posts found. Creating empty section...")
        empty_section = '''<!-- UPDATES SECTION -->
<section id="updates">
  <div class="section-inner">
    <p class="section-label">What We're Doing Right Now</p>
    <h2 class="section-title">Latest updates &amp; insights</h2>
    <p class="section-sub">Fresh content on SEO, AEO, GEO, e-commerce strategy, and Pakistan's D2C ecosystem - check back soon for new posts.</p>
    <div class="posts-grid">
      <div class="post-card" style="display:block;padding:2rem;text-align:center;">
        <p style="color:var(--ink-3);font-size:0.95rem;">No posts yet. New content coming soon.</p>
      </div>
    </div>
  </div>
</section>
<!-- /UPDATES SECTION -->'''
        
        with open(INDEX_FILE, 'r', encoding='utf-8') as f:
            html = f.read()
        
        existing_block_pattern = re.compile(
            r'<!-- UPDATES SECTION -->.*?<!-- /UPDATES SECTION -->',
            re.DOTALL
        )
        if existing_block_pattern.search(html):
            html = existing_block_pattern.sub(empty_section, html, count=1)
        else:
            marker = '<!-- PROFILES -->'
            if marker in html:
                html = html.replace(marker, empty_section + '\n' + marker)
        
        nav_old = '<li><a href="#profiles">Profiles</a></li>'
        nav_new = '<li><a href="#updates">Updates</a></li>\n    <li><a href="#profiles">Profiles</a></li>'
        if nav_old in html and '<li><a href="#updates">' not in html:
            html = html.replace(nav_old, nav_new)
        
        with open(INDEX_FILE, 'w', encoding='utf-8') as f:
            f.write(html)
        print("Empty updates section injected into index.html")
        return
    
    all_posts_html_parts = []
    homepage_posts_html_parts = []
    
    for i, post in enumerate(posts):
        title, body = parse_post(post)
        print(f"  Processing: {title}")
        archive_html = generate_post_html_archive(post, title, body)
        all_posts_html_parts.append(archive_html)
        if i < 5:
            homepage_html = generate_post_html(post, title, body)
            homepage_posts_html_parts.append(homepage_html)
    
    all_posts_html = '\n'.join(all_posts_html_parts)
    homepage_posts_html = '\n'.join(homepage_posts_html_parts)
    
    inject_posts_into_index(homepage_posts_html, len(posts))
    generate_updates_page(posts, all_posts_html)
    
    feed_xml = generate_feed_xml(posts)
    with open(FEED_FILE, 'w', encoding='utf-8') as f:
        f.write(feed_xml)
    print("Generated feed.xml RSS feed")
    
    sitemap_xml = generate_sitemap(posts)
    with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
        f.write(sitemap_xml)
    print("Generated sitemap.xml")
    
    print(f"\nDONE! {len(posts)} posts processed.")
    print(f"   Homepage shows {min(5, len(posts))} most recent posts")
    print(f"   Archive page has all {len(posts)} posts")
    print("=" * 60)

if __name__ == "__main__":
    main()
