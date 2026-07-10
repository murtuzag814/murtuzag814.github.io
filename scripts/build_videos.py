#!/usr/bin/env python3
"""
build_videos.py - Parses /videos/*.txt and generates video embed cards.
Injects into index.html via <div id="videos-container">.
No-op if placeholder is missing (safe for existing site).
"""

import os
import re
import glob
from datetime import datetime
from pathlib import Path

# --- CONFIG ---
VIDEOS_DIR = Path("videos")
INDEX_FILE = Path("index.html")
DATE_PATTERN = re.compile(r"^(\d{4}-\d{2}-\d{2})-.+\.txt$")

def parse_video_file(filepath):
    """Read a .txt file and extract title, embed URL, and description."""
    data = {"title": "", "embed": "", "description": "", "date": None, "date_str": ""}
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read().strip()
    
    # Parse key: value lines
    for line in content.split('\n'):
        line = line.strip()
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip().lower()
            value = value.strip()
            if key == 'title':
                data['title'] = value
            elif key == 'embed':
                data['embed'] = value
            elif key == 'description':
                data['description'] = value
    
    # Extract date from filename
    filename = os.path.basename(filepath)
    match = DATE_PATTERN.match(filename)
    if match:
        date_str = match.group(1)
        try:
            data['date'] = datetime.strptime(date_str, "%Y-%m-%d")
            data['date_str'] = date_str
        except ValueError:
            pass
    
    return data

def get_video_data():
    """Scan /videos/ folder and return sorted list of video dicts."""
    videos = []
    
    if not VIDEOS_DIR.exists():
        return videos
    
    txt_files = glob.glob(str(VIDEOS_DIR / "*.txt"))
    
    for txt_path in txt_files:
        video = parse_video_file(txt_path)
        if video['embed'] and video['title']:  # Minimum required fields
            videos.append(video)
        else:
            print(f"⚠️ Skipping {txt_path}: missing 'title' or 'embed'")
    
    # Sort newest first
    videos.sort(key=lambda x: x['date'] if x['date'] else datetime.min, reverse=True)
    return videos

def build_video_html(videos):
    """Generate HTML for the videos section."""
    if not videos:
        return "<p>No videos yet. Subscribe for updates.</p>"
    
    html_parts = []
    for video in videos:
        date_display = video['date'].strftime("%B %d, %Y") if video['date'] else "Recent"
        
        # Extract YouTube thumbnail if it's a YouTube embed
        embed_url = video['embed']
        thumbnail = ""
        if "youtube.com/embed/" in embed_url:
            video_id = embed_url.split("/embed/")[-1].split("?")[0]
            thumbnail = f"https://img.youtube.com/vi/{video_id}/maxresdefault.jpg"
        elif "youtu.be/" in embed_url:
            video_id = embed_url.split("youtu.be/")[-1].split("?")[0]
            thumbnail = f"https://img.youtube.com/vi/{video_id}/maxresdefault.jpg"
        else:
            # Generic fallback for Vimeo or other embeds
            thumbnail = "/images/video-placeholder.jpg"  # You can create a default image later
        
        card = f"""
        <div class="video-card" style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid #e0e0e0; border-radius: 8px; background: #fafafa;">
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 4px;">
                    <iframe src="{embed_url}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen loading="lazy"></iframe>
                </div>
                <div>
                    <h4 style="margin: 0 0 0.25rem 0; font-size: 1.1rem;">{video['title']}</h4>
                    <small style="color: #888; font-size: 0.85rem;">{date_display}</small>
                    {f'<p style="margin-top: 0.5rem; color: #555; line-height: 1.5;">{video["description"]}</p>' if video['description'] else ''}
                </div>
            </div>
        </div>
        """
        html_parts.append(card)
    
    return "\n".join(html_parts)

def inject_into_index(html_content, new_videos_html):
    """
    Inject videos HTML into index.html.
    Looks for <div id="videos-container">.
    If not found, warns and does nothing (safe).
    """
    placeholder = '<div id="videos-container">'
    
    if placeholder in html_content:
        pattern = re.compile(
            r'<div id="videos-container">.*?</div>',
            re.DOTALL
        )
        replacement = f'<div id="videos-container">\n{new_videos_html}\n</div>'
        return pattern.sub(replacement, html_content)
    else:
        print("⚠️ <div id='videos-container'> not found in index.html. Skipping video injection (safe).")
        return html_content

def main():
    print("🔍 Scanning /videos/ folder...")
    videos = get_video_data()
    print(f"✅ Found {len(videos)} videos.")
    
    if not videos:
        print("ℹ️ No valid videos found. Exiting without changing index.html.")
        return
    
    videos_html = build_video_html(videos)
    
    if not INDEX_FILE.exists():
        print("❌ index.html not found! Skipping injection.")
        return
    
    with open(INDEX_FILE, 'r', encoding='utf-8') as f:
        index_content = f.read()
    
    new_index_content = inject_into_index(index_content, videos_html)
    
    # Only write if changed
    if new_index_content != index_content:
        with open(INDEX_FILE, 'w', encoding='utf-8') as f:
            f.write(new_index_content)
        print("✅ videos injected into index.html successfully.")
    else:
        print("ℹ️ index.html unchanged (placeholder missing or already up to date).")

if __name__ == "__main__":
    main()