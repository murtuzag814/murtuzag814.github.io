#!/usr/bin/env python3
"""
Auto-Post Builder for Ghulam Murtuza (G Murtuza) Portfolio
Reads .txt + image pairs from /posts_src/ and generates:
  - a real standalone HTML page per post at /posts/<slug>.html
    (own title, meta description, canonical, OG tags, BlogPosting + author schema)
  - homepage post cards linking to those real pages
  - updates.html archive linking to those real pages
  - sitemap.xml listing every real post URL (no fragment/anchor URLs)
  - feed.xml RSS pointing at real post URLs

Why this rewrite: the previous version injected posts as #anchors on
updates.html. Search engines ignore everything after '#' in a sitemap
<loc>, so every "post" resolved to the same updates.html URL and was
never indexed as distinct content. This version gives every post its
own crawlable, indexable URL.
"""

import os
import re
import subprocess
from datetime import datetime
from pathlib import Path

SRC_DIR = Path("posts_src")      # drop .txt + image pairs here
POSTS_DIR = Path("posts")        # generated standalone post pages land here
INDEX_FILE = Path("index.html")
UPDATES_FILE = Path("updates.html")
FEED_FILE = Path("feed.xml")
SITEMAP_FILE = Path("sitemap.xml")
SITE_URL = "https://murtuzag814.github.io"
AUTHOR_NAME = "Ghulam Murtuza"
AUTHOR_URL = f"{SITE_URL}/#person"

def slugify(name):
    s = name.lower().strip()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

def get_post_date(filepath):
    """Date a post was first committed to git (stable publish date)."""
    try:
        result = subprocess.run(
            ['git', 'log', '--follow', '--format=%at', '--', str(filepath)],
            capture_output=True, text=True, check=True
        )
        timestamps = [t for t in result.stdout.strip().split('\n') if t]
        if timestamps:
            return datetime.fromtimestamp(int(timestamps[-1]))
    except Exception:
        pass
    return datetime.fromtimestamp(os.path.getmtime(filepath))

def get_post_files():
    if not SRC_DIR.exists():
        SRC_DIR.mkdir(parents=True)
        (SRC_DIR / ".gitkeep").write_text("")
        return []

    posts = {}
    for f in SRC_DIR.iterdir():
        if f.suffix.lower() in ['.txt', '.jpg', '.jpeg', '.png', '.webp']:
            name = f.stem
            posts.setdefault(name, {'txt': None, 'img': None})
            if f.suffix.lower() == '.txt':
                posts[name]['txt'] = f
            else:
                posts[name]['img'] = f

    valid_posts = []
    for name, files in posts.items():
        if files['txt']:
            valid_posts.append({
                'name': name,
                'slug': slugify(name),
                'txt': files['txt'],
                'img': files['img'],
                'date': get_post_date(files['txt'])
            })
    valid_posts.sort(key=lambda x: x['date'], reverse=True)
    return valid_posts

def parse_post(post):
    content = post['txt'].read_text(encoding='utf-8').strip()
    lines = content.split('\n', 1)
    title = lines[0].strip() if lines else post['name'].replace('-', ' ').title()
    raw_body = lines[1].strip() if len(lines) > 1 else ""
    body_html = convert_markdown(raw_body)
    plain_text = re.sub(r'\*\*(.+?)\*\*', r'\1', raw_body)
    plain_text = re.sub(r'\*(.+?)\*', r'\1', plain_text)
    plain_text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', plain_text)
    plain_excerpt = re.sub(r'\s+', ' ', plain_text).strip()[:155].rsplit(' ', 1)[0]
    return title, body_html, plain_excerpt

def convert_markdown(text):
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2" target="_blank" rel="noopener">\1</a>', text)
    paras = [p.strip() for p in text.split('\n\n') if p.strip()]
    return '\n'.join(f'<p>{p.replace(chr(10), "<br>")}</p>' for p in paras)

POST_PAGE_TEMPLATE = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Ghulam Murtuza (G Murtuza)</title>
<meta name="description" content="{excerpt}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{url}">
<meta property="og:type" content="article">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{excerpt}">
<meta property="og:url" content="{url}">
{og_image}<meta property="article:published_time" content="{date_iso}">
<meta property="article:author" content="{author_url}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<style>
  :root{{--ink:#0A0A0F;--ink-2:#3A3A4A;--ink-3:#7A7A8A;--surface:#F7F6F2;--surface-2:#EEECEA;--accent:#1A3FD4;--accent-2:#0ECC8E;--white:#FFFFFF;--border:rgba(10,10,15,0.1)}}
  *,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
  body{{font-family:'DM Sans',sans-serif;background:var(--surface);color:var(--ink);line-height:1.7}}
  nav{{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1rem 2.5rem;background:rgba(247,246,242,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}}
  .nav-logo{{font-family:'Sora',sans-serif;font-weight:800;font-size:1.1rem;color:var(--ink);text-decoration:none}}
  .nav-logo span{{color:var(--accent)}}
  .nav-cta{{background:var(--ink);color:var(--white);padding:0.5rem 1.25rem;border-radius:100px;font-size:0.82rem;font-weight:500;text-decoration:none}}
  main{{max-width:720px;margin:0 auto;padding:8rem 1.5rem 4rem}}
  .back-link{{display:inline-flex;align-items:center;gap:0.5rem;color:var(--accent);text-decoration:none;font-weight:500;font-size:0.9rem;margin-bottom:2rem}}
  h1{{font-family:'Sora',sans-serif;font-size:clamp(1.8rem,4vw,2.6rem);font-weight:800;line-height:1.15;letter-spacing:-0.02em;margin-bottom:0.75rem}}
  time{{display:block;font-size:0.85rem;color:var(--ink-3);margin-bottom:2rem}}
  .post-hero-img{{width:100%;border-radius:16px;margin-bottom:2rem;display:block}}
  article p{{margin-bottom:1.25rem;font-size:1.02rem;color:var(--ink-2)}}
  article strong{{color:var(--ink)}}
  article a{{color:var(--accent)}}
  footer{{padding:2rem 2.5rem;border-top:1px solid var(--border);text-align:center;font-size:0.82rem;color:var(--ink-3)}}
  footer a{{color:var(--ink-2);text-decoration:none}}
</style>
</head>
<body>
<nav>
  <a href="../index.html" class="nav-logo">G<span>M</span>urtuza</a>
  <a href="https://wa.me/923103479022" target="_blank" rel="noopener" class="nav-cta">Get in touch &#8594;</a>
</nav>
<main>
  <a href="../updates.html" class="back-link">&#8592; All updates</a>
  <article itemscope itemtype="https://schema.org/BlogPosting">
    <h1 itemprop="headline">{title}</h1>
    <time itemprop="datePublished" datetime="{date_iso}">&#128197; {date_str}</time>
{hero_img}    <div itemprop="articleBody">
{body}
    </div>
    <meta itemprop="author" content="{author_name}">
    <meta itemprop="url" content="{url}">
  </article>
</main>
<footer>
  <div>&copy; 2026 Ghulam Murtuza &middot; Karachi, Pakistan &middot; <a href="../index.html">Home</a> &middot; <a href="../feed.xml">RSS</a></div>
</footer>
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{title_json}",
  "description": "{excerpt_json}",
  "url": "{url}",
  "datePublished": "{date_iso}",
  "dateModified": "{date_iso}",
  "mainEntityOfPage": {{"@type": "WebPage", "@id": "{url}"}},
  "author": {{"@type": "Person", "name": "{author_name}", "url": "{author_url}"}},
  "publisher": {{"@type": "Person", "name": "{author_name}", "url": "{author_url}"}}{image_schema}
}}
</script>
</body>
</html>'''

def json_escape(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')

def generate_post_page(post, title, body_html, excerpt):
    date_str = post['date'].strftime('%B %d, %Y')
    date_iso = post['date'].strftime('%Y-%m-%d')
    url = f"{SITE_URL}/posts/{post['slug']}.html"

    hero_img, og_image, image_schema = "", "", ""
    if post['img']:
        img_url = f"{SITE_URL}/posts/{post['img'].name}"
        hero_img = f'    <img class="post-hero-img" src="{post["img"].name}" alt="{title}" loading="lazy">\n'
        og_image = f'<meta property="og:image" content="{img_url}">\n'
        image_schema = f',\n  "image": "{img_url}"'

    return POST_PAGE_TEMPLATE.format(
        title=title, title_json=json_escape(title),
        excerpt=excerpt, excerpt_json=json_escape(excerpt),
        url=url, date_iso=date_iso, date_str=date_str,
        hero_img=hero_img, og_image=og_image, image_schema=image_schema,
        body=body_html, author_name=AUTHOR_NAME, author_url=AUTHOR_URL
    )

def generate_card_html(post, title, excerpt):
    url = f"posts/{post['slug']}.html"
    date_str = post['date'].strftime('%B %d, %Y')
    date_iso = post['date'].strftime('%Y-%m-%d')
    img_html = ""
    if post['img']:
        img_html = f'''                    <div class="post-img-wrap">
                        <img src="posts/{post['img'].name}" alt="{title}" loading="lazy">
                    </div>'''
    return f'''                <article class="post-card">
                    <a href="{url}" style="display:contents;color:inherit;text-decoration:none">
{img_html}
                    <div class="post-content">
                        <h3 class="post-title">{title}</h3>
                        <time class="post-date" datetime="{date_iso}">&#128197; {date_str}</time>
                        <div class="post-body"><p>{excerpt}&hellip; <span style="color:var(--accent)">Read more &#8594;</span></p></div>
                    </div>
                    </a>
                </article>'''

def inject_posts_into_index(cards_html, post_count):
    html = INDEX_FILE.read_text(encoding='utf-8')
    view_all_link = ""
    if post_count > 5:
        view_all_link = f'''                <div class="posts-view-all">
                    <a href="updates.html" class="btn-secondary">View All {post_count} Updates &#8594;</a>
                </div>'''
    posts_section = f'''<!-- UPDATES SECTION -->
<section id="updates">
  <div class="section-inner">
    <p class="section-label">What We're Doing Right Now</p>
    <h2 class="section-title">Latest updates &amp; insights</h2>
    <p class="section-sub">Fresh content on SEO, AEO, GEO, e-commerce strategy, and Pakistan's D2C ecosystem - updated regularly for search engines and AI crawlers.</p>
    <div class="posts-grid">
{cards_html}
    </div>
{view_all_link}
  </div>
</section>
<!-- /UPDATES SECTION -->'''
    pattern = re.compile(r'<!-- UPDATES SECTION -->.*?<!-- /UPDATES SECTION -->', re.DOTALL)
    if pattern.search(html):
        html = pattern.sub(posts_section, html, count=1)
    elif '<!-- PROFILES -->' in html:
        html = html.replace('<!-- PROFILES -->', posts_section + '\n<!-- PROFILES -->')
    elif '<section id="profiles"' in html:
        html = html.replace('<section id="profiles"', posts_section + '\n<section id="profiles"')
    nav_old = '<li><a href="#profiles">Profiles</a></li>'
    nav_new = '<li><a href="#updates">Updates</a></li>\n    <li><a href="#profiles">Profiles</a></li>'
    if nav_old in html and '<li><a href="#updates">' not in html:
        html = html.replace(nav_old, nav_new)
    INDEX_FILE.write_text(html, encoding='utf-8')

def generate_updates_page(posts, titles_excerpts):
    cards = []
    for post, (title, _, excerpt) in zip(posts, titles_excerpts):
        cards.append(generate_card_html(post, title, excerpt))
    all_cards = '\n'.join(cards)
    page = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>All Updates | Ghulam Murtuza (G Murtuza) — E-Commerce SEO, AEO & GEO Insights</title>
<meta name="description" content="Complete archive of updates and insights by Ghulam Murtuza, E-Commerce Growth Strategist specializing in SEO, AEO, and GEO, based in Karachi, Pakistan.">
<meta name="robots" content="index, follow">
<meta property="og:title" content="All Updates | Ghulam Murtuza (G Murtuza)">
<meta property="og:description" content="Browse all articles and updates on e-commerce SEO, AEO, GEO, and Pakistan's D2C ecosystem.">
<meta property="og:type" content="website">
<meta property="og:url" content="{SITE_URL}/updates.html">
<link rel="canonical" href="{SITE_URL}/updates.html">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<style>
  :root{{--ink:#0A0A0F;--ink-2:#3A3A4A;--ink-3:#7A7A8A;--surface:#F7F6F2;--surface-2:#EEECEA;--accent:#1A3FD4;--accent-2:#0ECC8E;--white:#FFFFFF;--border:rgba(10,10,15,0.1)}}
  *,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
  html{{scroll-behavior:smooth}}
  body{{font-family:'DM Sans',sans-serif;background:var(--surface);color:var(--ink);line-height:1.6;overflow-x:hidden}}
  nav{{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1rem 2.5rem;background:rgba(247,246,242,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}}
  .nav-logo{{font-family:'Sora',sans-serif;font-weight:800;font-size:1.1rem;color:var(--ink);text-decoration:none;letter-spacing:-0.02em}}
  .nav-logo span{{color:var(--accent)}}
  .nav-links{{display:flex;gap:2rem;list-style:none}}
  .nav-links a{{font-size:0.85rem;color:var(--ink-2);text-decoration:none;font-weight:500}}
  .nav-links a:hover{{color:var(--accent)}}
  .nav-cta{{background:var(--ink);color:var(--white);padding:0.5rem 1.25rem;border-radius:100px;font-size:0.82rem;font-weight:500;text-decoration:none}}
  .nav-cta:hover{{background:var(--accent)}}
  section{{padding:5rem 2.5rem}}
  .section-inner{{max-width:1100px;margin:0 auto}}
  .section-label{{font-size:0.75rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--accent);margin-bottom:0.75rem}}
  .section-title{{font-family:'Sora',sans-serif;font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;line-height:1.1;letter-spacing:-0.02em;color:var(--ink);margin-bottom:1rem}}
  .section-sub{{font-size:1rem;color:var(--ink-2);max-width:560px;line-height:1.7;margin-bottom:3rem}}
  .page-header{{padding-top:7rem;background:var(--ink)}}
  .page-header .section-label{{color:var(--accent-2)}}
  .page-header .section-title{{color:var(--white)}}
  .page-header .section-sub{{color:rgba(255,255,255,0.55)}}
  .posts-grid{{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:2rem}}
  .post-card{{background:var(--white);border:1px solid var(--border);border-radius:20px;overflow:hidden;transition:all 0.3s;display:grid;grid-template-columns:300px 1fr}}
  .post-card:hover{{border-color:var(--accent);transform:translateY(-3px);box-shadow:0 12px 40px rgba(10,10,15,0.08)}}
  .post-card:not(:has(.post-img-wrap)){{grid-template-columns:1fr}}
  .post-img-wrap{{height:100%;min-height:220px;overflow:hidden;background:var(--surface-2)}}
  .post-img-wrap img{{width:100%;height:100%;object-fit:cover;display:block}}
  .post-content{{padding:2rem;display:flex;flex-direction:column;gap:0.75rem}}
  .post-title{{font-family:'Sora',sans-serif;font-size:1.35rem;font-weight:700;color:var(--ink);line-height:1.2;letter-spacing:-0.01em}}
  .post-date{{font-size:0.82rem;color:var(--ink-3)}}
  .post-body{{font-size:0.92rem;color:var(--ink-2);line-height:1.8}}
  .back-link{{display:inline-flex;align-items:center;gap:0.5rem;color:var(--accent);text-decoration:none;font-weight:500;font-size:0.9rem;margin-bottom:2rem}}
  footer{{padding:2rem 2.5rem;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:0.82rem;color:var(--ink-3)}}
  footer a{{color:var(--ink-2);text-decoration:none}}
  @media(max-width:768px){{nav{{padding:1rem 1.25rem}}.nav-links{{display:none}}section{{padding:3rem 1.25rem}}.page-header{{padding-top:6rem}}.post-card{{grid-template-columns:1fr}}.post-content{{padding:1.5rem}}footer{{flex-direction:column;gap:0.5rem;text-align:center}}}}
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
{all_cards}
    </div>
    <a href="index.html" class="back-link">&#8592; Back to Portfolio</a>
  </div>
</section>
<footer>
  <div>&copy; 2026 Ghulam Murtuza &middot; Karachi, Pakistan</div>
  <div><a href="index.html">Home</a> &middot; <a href="feed.xml">RSS</a> &middot; <a href="https://www.linkedin.com/in/ghulam-murtuza-043b8b243/">LinkedIn</a></div>
</footer>
</body>
</html>'''
    UPDATES_FILE.write_text(page, encoding='utf-8')

def generate_feed_xml(posts, titles_excerpts):
    items = []
    for post, (title, _, excerpt) in zip(posts, titles_excerpts):
        url = f"{SITE_URL}/posts/{post['slug']}.html"
        date_rfc = post['date'].strftime('%a, %d %b %Y %H:%M:%S +0000')
        items.append(f'''    <item>
      <title>{title}</title>
      <link>{url}</link>
      <guid isPermaLink="true">{url}</guid>
      <pubDate>{date_rfc}</pubDate>
      <description><![CDATA[{excerpt}]]></description>
    </item>''')
    now = datetime.now().strftime('%a, %d %b %Y %H:%M:%S +0000')
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ghulam Murtuza (G Murtuza) - What I'm Doing Right Now</title>
    <link>{SITE_URL}</link>
    <description>Latest updates from Ghulam Murtuza - E-Commerce Growth Strategist, SEO, AEO &amp; GEO, Karachi, Pakistan</description>
    <language>en</language>
    <lastBuildDate>{now}</lastBuildDate>
    <atom:link href="{SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
{chr(10).join(items)}
  </channel>
</rss>'''

def generate_sitemap(posts):
    today = datetime.now().strftime('%Y-%m-%d')
    urls = [
        f"  <url><loc>{SITE_URL}/</loc><lastmod>{today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>",
        f"  <url><loc>{SITE_URL}/updates.html</loc><lastmod>{today}</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>",
    ]
    for post in posts:
        lastmod = post['date'].strftime('%Y-%m-%d')
        urls.append(
            f"  <url><loc>{SITE_URL}/posts/{post['slug']}.html</loc><lastmod>{lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>"
        )
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>'''

def main():
    print("=" * 60)
    print("  G Murtuza Portfolio - Auto Post Builder")
    print("=" * 60)

    posts = get_post_files()
    print(f"\nFound {len(posts)} posts in /{SRC_DIR}/")
    POSTS_DIR.mkdir(exist_ok=True)

    if not posts:
        print("No posts found — nothing to build.")
        return

    titles_excerpts = []
    for post in posts:
        title, body_html, excerpt = parse_post(post)
        titles_excerpts.append((title, body_html, excerpt))
        print(f"  Building: {title} -> posts/{post['slug']}.html")

        page_html = generate_post_page(post, title, body_html, excerpt)
        (POSTS_DIR / f"{post['slug']}.html").write_text(page_html, encoding='utf-8')

        if post['img']:
            dest = POSTS_DIR / post['img'].name
            dest.write_bytes(post['img'].read_bytes())

    cards_html = '\n'.join(
        generate_card_html(post, te[0], te[2]) for post, te in list(zip(posts, titles_excerpts))[:5]
    )
    inject_posts_into_index(cards_html, len(posts))
    generate_updates_page(posts, titles_excerpts)

    FEED_FILE.write_text(generate_feed_xml(posts, titles_excerpts), encoding='utf-8')
    print("Generated feed.xml")

    SITEMAP_FILE.write_text(generate_sitemap(posts), encoding='utf-8')
    print("Generated sitemap.xml (real per-post URLs, no fragments)")

    print(f"\nDONE! {len(posts)} posts built as standalone pages.")
    print("=" * 60)

if __name__ == "__main__":
    main()
