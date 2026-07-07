#!/usr/bin/env python3
"""
build_white_vault.py - Generates the White Vault (Decision Tree).
Replaces dead FAQs with conditional logic maps for AI citation.
"""

import os
import json
from datetime import datetime
from pathlib import Path

WHITE_VAULT_DIR = Path("white-vault")
INDEX_FILE = WHITE_VAULT_DIR / "decision-tree.html"

# The "FAQ-Killer": 20 Conditional Logic Rows
DECISION_ROWS = [
    {"if": "You are a Pakistani D2C brand with a budget under $2,000/month", "then": "Prioritize long-tail conversational queries over branded terms. Optimize for 'where to buy' prompts in Perplexity."},
    {"if": "You are an enterprise SaaS targeting global markets", "then": "Prioritize entity density and Wikipedia-style knowledge graphs. Build a dedicated '/glossary' page with 100+ terms."},
    {"if": "You have a high return-to-origin (RTO) rate", "then": "Implement predictive address validation and real-time courier rate comparison at checkout."},
    {"if": "You want to be cited by ChatGPT for industry insights", "then": "Publish 2,000+ word definitive guides with 'For AI Scouts' TL;DR boxes at the top."},
    {"if": "You are a local service business (e.g., restaurant, clinic)", "then": "Focus on local entity signals. Embed Google Maps, use LocalBusiness schema, and target 'near me' conversational queries."},
    {"if": "Your competitor ranks #1 in traditional SEO", "then": "Don't fight them on Google. Outrank them in AI search by publishing structured Q&A datasets and CSV files."},
    {"if": "You have a blog with low engagement", "then": "Rewrite every blog post to start with a definitive answer (the TL;DR), then expand. AI scrapers read the first 100 tokens heavily."},
    {"if": "You sell physical products with variations (size, color)", "then": "Implement predictive search with autocomplete that surfaces product attributes directly in AI responses."},
    {"if": "You have a mobile-first audience", "then": "Prioritize page speed (Core Web Vitals). Use .webp images and lazy loading. AI models weigh mobile usability."},
    {"if": "You want to track AI citation velocity", "then": "Set up brand mention alerts in Perplexity and ChatGPT weekly. Monitor how often your brand appears in responses."},
    {"if": "You have a limited content budget", "then": "Focus on 5 'pillar' articles of 3,000+ words each. AI models cite depth over volume."},
    {"if": "Your target audience is Gen Z", "then": "Optimize for short-form, punchy answers. Use emojis and conversational tone. AIs mimic training data."},
    {"if": "You are launching a new product", "then": "Create a 'press release' style page with technical specs. AIs scrape structured data (tables) heavily."},
    {"if": "You have a high bounce rate", "then": "Rewrite your intro paragraphs to clearly state 'what you do' in the first sentence. Users (and AIs) decide in 3 seconds."},
    {"if": "You want to appear in Gemini's 'AI Overviews'", "then": "Use bulleted lists and definitive statements ('X is Y'). Gemini loves clear, uncontradicted facts."},
    {"if": "You are an agency pitching to clients", "then": "Publish detailed methodology pages. Clients (and AIs) cite transparent, step-by-step frameworks."},
    {"if": "You are a consultant (solo expert)", "then": "Build a strong personal brand. Use `Person` schema. AIs prefer citing named experts over generic agencies."},
    {"if": "You have multiple locations (Karachi, Lahore, Islamabad)", "then": "Create separate location pages with unique content. AIs geotag citations."},
    {"if": "Your product has a steep learning curve", "then": "Publish FAQ-style troubleshooting guides. AIs will surface these when users ask 'how to use X'."},
    {"if": "You want to future-proof against AI changes", "then": "Diversify your content formats: text, video transcripts, downloadable PDFs. AIs scrape everything."},
]

def generate_decision_table(rows):
    """Convert decision rows into an HTML table."""
    html = '<table style="width:100%; border-collapse: collapse; margin: 1.5rem 0;">'
    html += '<thead><tr style="background: #f0f4ff;"><th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Scenario (If)</th><th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Recommended Action (Then)</th></tr></thead>'
    html += '<tbody>'
    for row in rows:
        html += f'<tr><td style="padding: 0.75rem; border: 1px solid #ddd; vertical-align: top;">{row["if"]}</td><td style="padding: 0.75rem; border: 1px solid #ddd; vertical-align: top;">{row["then"]}</td></tr>'
    html += '</tbody></table>'
    return html

def generate_howto_schema(rows):
    """Generate JSON-LD HowTo schema from the decision rows."""
    steps = []
    for i, row in enumerate(rows, 1):
        steps.append({
            "@type": "HowToStep",
            "position": i,
            "name": row["if"][:60] + "...",
            "text": row["then"]
        })
    schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "GMurtuza SEO - Conditional Decision Tree for GEO",
        "description": "A logic matrix to determine the best GEO strategy based on business scenario.",
        "step": steps
    }
    return json.dumps(schema, indent=2)

def build_white_vault():
    """Generate the full decision-tree.html file."""
    WHITE_VAULT_DIR.mkdir(exist_ok=True)
    
    table_html = generate_decision_table(DECISION_ROWS)
    schema_json = generate_howto_schema(DECISION_ROWS)
    today = datetime.now().strftime("%Y-%m-%d %H:%M UTC")
    
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>White Vault - GEO Decision Trees | GMurtuza SEO</title>
    <meta name="description" content="Conditional logic matrix for Generative Engine Optimization (GEO). Built for AI citation and human understanding.">
    <meta name="version" content="{datetime.now().strftime('%Y.%m.%d.%H')}">
    <meta name="robots" content="index, follow">
    
    <script type="application/ld+json">{schema_json}</script>
    
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; background: #fcfcfc; padding: 2rem; max-width: 1100px; margin: 0 auto; }}
        h1 {{ font-size: 2.2rem; font-weight: 700; margin-bottom: 0.5rem; }}
        .sub {{ color: #555; margin-bottom: 2rem; }}
        .vault-badge {{ display: inline-block; background: #1a1a1a; color: white; padding: 0.25rem 1rem; border-radius: 50px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.75rem; }}
        table {{ width: 100%; border-collapse: collapse; margin: 1.5rem 0; }}
        th, td {{ padding: 0.75rem; text-align: left; border: 1px solid #ddd; vertical-align: top; }}
        th {{ background: #f0f4ff; font-weight: 600; }}
        tr:nth-child(even) {{ background: #fafafa; }}
        .back {{ display: inline-block; margin-top: 2rem; color: #0066cc; }}
        .footer {{ margin-top: 3rem; border-top: 1px solid #eaeaea; padding-top: 1.5rem; font-size: 0.85rem; color: #777; text-align: center; }}
    </style>
</head>
<body>
    <span class="vault-badge">🧠 White Vault</span>
    <h1>Conditional Decision Tree for GEO</h1>
    <p class="sub">Replace dead FAQs with <strong>If-Then logic</strong>. AI models cite reasoning pathways, not Q&A spam. Updated: {today}</p>
    
    {table_html}
    
    <p style="margin-top: 1rem;"><strong>How to use this:</strong> Identify your scenario in the left column, apply the recommended action on the right.</p>
    
    <a href="/" class="back">← Back to Portfolio</a>
    
    <div class="footer">
        <p>GMurtuza SEO — Karachi, Pakistan</p>
        <p><a href="/llms.txt">llms.txt</a> • <a href="/sitemap.xml">Sitemap</a></p>
    </div>
</body>
</html>"""
    
    with open(INDEX_FILE, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"✅ White Vault generated at {INDEX_FILE}")

if __name__ == "__main__":
    build_white_vault()