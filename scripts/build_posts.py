#!/usr/bin/env python3
"""
build_posts.py - Backward-compatible post builder.
- Scans /posts/ for *.txt and pairs with *.jpg.
- Injects into index.html via <div id="posts-container"> (new) 
  or falls back to legacy <section id="updates"> (old).
"""

import os
import re
import glob
from datetime import datetime
from pathlib import Path

# --- CONFIG ---
POSTS_DIR = Path("posts")
INDEX_FILE = Path("index.html")
DATE_PATTERN = re.compile(r"^(\d{4}-\d{2}-\d{2})-.+\.txt$")

def parse_post_file(filepath):
    """Read a .txt file and return its content."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read().strip()

def get_post_data():
    """Scan /posts/ folder and return sorted list of post dicts."""
    posts = []
    
    if not POSTS_DIR.exists():
        return posts
    
    txt_files = glob.glob(str(POSTS_DIR / "*.txt"))
    
    for txt_path in txt_files:
        filename = os.path.basename(txt_path)
        match = DATE_PATTERN.match(filename)
        if not match:
            continue  # Skip files that don't match YYYY-MM-DD-*.txt
        
        date_str = match.group(1)
        try:
            post_date = datetime.strptime(date_str, "%Y-%m-%d")
        except ValueError:
            continue
        
        # Read content
        content = parse_post_file(txt_path)
        
        # Look for paired image (same prefix)
        base_prefix = filename.replace(".txt", "")
        jpg_path = POSTS_DIR / f"{base_prefix}.jpg"
        png_path = POSTS_DIR / f"{base_prefix}.png"
        webp_path = POSTS_DIR / f"{base_prefix}.webp"
        
        image_url = None
        if jpg_path.exists():
            image_url = f"/posts/{jpg_path.name}"
        elif png_path.exists():
            image_url = f"/posts/{png_path.name}"
        elif webp_path.exists():
            image_url = f"/posts/{webp_path.name}"
        
        posts.append({
            "date": post_date,
            "date_str": date_str,
            "content": content,
            "image_url": image_url,
            "filename": filename,
        })
    
    # Sort newest first
    posts.sort(key=lambda x: x["date"], reverse=True)
    return posts

def build_post_html(posts):
    """Generate HTML for the posts section."""
    if not posts:
        return "<p>No updates yet. Check back soon.</p>"
    
    html_parts = []
    for post in posts:
        date_display = post["date"].strftime("%B %d, %Y")
        
        # Start card
        card = f"""
        <div class="update-card" style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid #e0e0e0; border-radius: 8px; background: #fafafa;">
            <div style="display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
        """
        
        # Add image if exists
        if post["image_url"]:
            card += f"""
                <div style="flex: 0 0 200px;">
                    <img src="{post["image_url"]}" alt="Update thumbnail" style="width: 100%; height: auto; border-radius: 4px; display: block;" loading="lazy">
                </div>
                <div style="flex: 1; min-width: 200px;">
            """
        else:
            card += """<div style="flex: 1;">"""
        
        # Date and content
        card += f"""
                    <small style="color: #888; font-size: 0.85rem;">{date_display}</small>
                    <div style="margin-top: 0.5rem; line-height: 1.6;">
                        {post["content"].replace('\n', '<br>')}
                    </div>
                </div>
            </div>
        </div>
        """
        html_parts.append(card)
    
    return "\n".join(html_parts)

def inject_into_index(html_content, new_posts_html):
    """
    Inject posts HTML into index.html.
    First tries new placeholder <div id="posts-container">.
    Falls back to legacy <!-- UPDATES --> section.
    """
    # Try new placeholder first
    new_placeholder = '<div id="posts-container">'
    if new_placeholder in html_content:
        pattern = re.compile(
            r'<div id="posts-container">.*?</div>',
            re.DOTALL
        )
        replacement = f'<div id="posts-container">\n{new_posts_html}\n</div>'
        return pattern.sub(replacement, html_content)
    
    # Legacy fallback: find <!-- UPDATES --> block
    legacy_start = "<!-- UPDATES -->"
    legacy_end = "<!-- END UPDATES -->"
    
    if legacy_start in html_content and legacy_end in html_content:
        pattern = re.compile(
            rf'{re.escape(legacy_start)}.*?{re.escape(legacy_end)}',
            re.DOTALL
        )
        replacement = f'{legacy_start}\n{new_posts_html}\n{legacy_end}'
        return pattern.sub(replacement, html_content)
    
    # If neither found, append at the bottom before </body>
    print("⚠️ No posts placeholder found. Appending at bottom of body.")
    return html_content.replace('</body>', f'<div class="updates-section">{new_posts_html}</div>\n</body>')

def main():
    print("🔍 Scanning /posts/ folder...")
    posts = get_post_data()
    print(f"✅ Found {len(posts)} posts.")
    
    if not posts:
        print("⚠️ No valid posts found. Exiting without changing index.html.")
        return
    
    posts_html = build_post_html(posts)
    
    if not INDEX_FILE.exists():
        print("❌ index.html not found! Skipping injection.")
        return
    
    with open(INDEX_FILE, 'r', encoding='utf-8') as f:
        index_content = f.read()
    
    new_index_content = inject_into_index(index_content, posts_html)
    
    # Only write if changed
    if new_index_content != index_content:
        with open(INDEX_FILE, 'w', encoding='utf-8') as f:
            f.write(new_index_content)
        print("✅ index.html updated successfully.")
    else:
        print("ℹ️ index.html was already up to date.")

if __name__ == "__main__":
    main()
