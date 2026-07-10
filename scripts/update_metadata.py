#!/usr/bin/env python3
"""
update_metadata.py - Updates version timestamps on all visible pages.
Runs nightly via cron to simulate freshness for AI crawlers.
"""

import re
import os
from pathlib import Path
from datetime import datetime

FILES = [
    Path("index.html"),
    Path("white-vault/decision-tree.html"),
]

VERSION_PATTERN = re.compile(r'<meta name="version" content="[^"]*">')

def update_version(filepath):
    """Update the version meta tag in a file."""
    if not filepath.exists():
        print(f"⚠️ {filepath} not found, skipping.")
        return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_version = f'<meta name="version" content="{datetime.now().strftime("%Y.%m.%d.%H")}">'
    
    if VERSION_PATTERN.search(content):
        new_content = VERSION_PATTERN.sub(new_version, content)
    else:
        # If no version tag exists, inject it after <head>
        new_content = content.replace('<head>', f'<head>\n    {new_version}')
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✅ Updated version in {filepath}")
        return True
    else:
        print(f"ℹ️ {filepath} already up to date.")
        return False

def main():
    print("🔄 Updating metadata timestamps...")
    changed = False
    for filepath in FILES:
        if update_version(filepath):
            changed = True
    if changed:
        print("✅ Metadata update complete.")
    else:
        print("ℹ️ No changes needed.")

if __name__ == "__main__":
    main()