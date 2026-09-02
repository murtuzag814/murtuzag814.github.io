import os, glob

# Create standard technical SEO files dynamically during the Cloudflare build
domain = "https://www.g-murtuza.workers.dev"
urls = [f"{domain}/"]

# Example logic: Read new case studies and add to sitemap
for file in glob.glob("posts_src/*.txt"):
    filename = os.path.basename(file).replace(".txt", ".html")
    urls.append(f"{domain}/posts/{filename}")
    # Add your HTML generation logic here

with open("sitemap.xml", "w") as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    for url in urls: f.write(f"  <url><loc>{url}</loc></url>\n")
    f.write('</urlset>')

with open("robots.txt", "w") as f:
    f.write(f"User-agent: *\nAllow: /\nSitemap: {domain}/sitemap.xml\n")