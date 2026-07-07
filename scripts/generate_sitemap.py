#!/usr/bin/env python3
"""
generate_sitemap.py - Auto-generates clean sitemap.xml.
Excludes black vault, duplicate artifacts, and fragment URLs.
"""

import os
import glob
from pathlib import Path
from datetime import datetime

SITEMAP_FILE = Path("sitemap.xml")
BASE_URL = "https://murtuzag814.github.io"
EXCLUDED_DIRS = ["black-labs", "scripts", ".git", ".github"]
EXCLUDED_PATTERNS = ["- Copy", "-backup", "~$", "#"]

def get_page_files():
    """Find all valid HTML files."""
    all_files = glob.glob("**/*.html", recursive=True)
    valid = []
    for f in all_files:
        # Skip excluded directories
        if any(ex_dir in f for ex_dir in EXCLUDED_DIRS):
            continue
        # Skip excluded patterns
        if any(pattern in f for pattern in EXCLUDED_PATTERNS):
            continue
        # Skip fragment-only files
        if f.endswith("#"):
            continue
        valid.append(f)
    return sorted(valid)

def generate_sitemap():
    """Generate sitemap.xml."""
    files = get_page_files()
    
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for filepath in files:
        # Convert to URL
        if filepath == "index.html":
            url = BASE_URL + "/"
        else:
            url = BASE_URL + "/" + filepath.replace("\\", "/")
        
        # Get last modified date
        try:
            mtime = os.path.getmtime(filepath)
            lastmod = datetime.fromtimestamp(mtime).strftime("%Y-%m-%d")
        except:
            lastmod = datetime.now().strftime("%Y-%m-%d")
        
        # Set priority
        priority = "1.0" if filepath == "index.html" else "0.8"
        if "white-vault" in filepath:
            priority = "0.9"
        if "case-studies" in filepath:
            priority = "0.85"
        
        xml += f'  <url>\n    <loc>{url}</loc>\n    <lastmod>{lastmod}</lastmod>\n    <priority>{priority}</priority>\n  </url>\n'
    
    xml += '</urlset>'
    
    with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
        f.write(xml)
    
    print(f"✅ Sitemap generated with {len(files)} URLs at {SITEMAP_FILE}")

if __name__ == "__main__":
    generate_sitemap()