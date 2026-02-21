#!/usr/bin/env python3
"""
BuzzNewz Site Manager
Automates site updates and Google integration
"""

import os
import re
import sys

SITE_URL = "https://evansxm.github.io/buzznewz"
SITEMAP_URL = f"{SITE_URL}/sitemap.xml"


def update_adsense_id(publisher_id):
    """Update AdSense Publisher ID in all HTML files"""
    html_files = [f for f in os.listdir(".") if f.endswith(".html")]

    for file in html_files:
        with open(file, "r") as f:
            content = f.read()

        if "ca-pub-XXXXXXXXXXXXXX" in content:
            new_content = content.replace("ca-pub-XXXXXXXXXXXXXX", publisher_id)
            with open(file, "w") as f:
                f.write(new_content)
            print(f"✅ Updated {file}")

    print(f"\n🎉 AdSense ID updated to: {publisher_id}")


def add_google_verification(verification_code):
    """Add Google Search Console verification meta tag"""
    html_files = [f for f in os.listdir(".") if f.endswith(".html")]

    for file in html_files:
        with open(file, "r") as f:
            content = f.read()

        if "google-site-verification" not in content and file == "index.html":
            # Add after description meta
            new_content = content.replace(
                '<meta name="keywords"',
                '<meta name="google-site-verification" content="'
                + verification_code
                + '" />\n    <meta name="keywords"',
            )
            with open(file, "w") as f:
                f.write(new_content)
            print(f"✅ Added verification to {file}")

    print(f"\n🎉 Google verification added!")


def generate_adsense_guide():
    """Generate AdSense application guide"""
    guide = f"""
# 🚀 Google AdSense Application Guide for BuzzNewz

## Your Site Info
- **URL**: {SITE_URL}
- **Sitemap**: {SITEMAP_URL}

## Steps to Apply

1. Go to https://www.google.com/adsense/start/
2. Sign in with your Gmail
3. Enter your site URL: {SITE_URL}
4. Complete the application

## After Approval

When you get your Publisher ID (like ca-pub-123456789...), run:

```bash
python3 update_adsense.py YOUR_PUBLISHER_ID
```

## Current Status
- ✅ Site live at: {SITE_URL}
- ✅ Sitemap ready: {SITEMAP_URL}
- ✅ Privacy policy: ✅
- ✅ Terms of service: ✅
- ✅ AdSense placeholders: ✅

Good luck! 🚀
"""
    with open("ADSENSE_APP_GUIDE.md", "w") as f:
        f.write(guide)
    print("✅ Generated AdSense guide!")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        if sys.argv[1] == "adsense":
            if len(sys.argv) > 2:
                update_adsense_id(sys.argv[2])
            else:
                print("Usage: python3 update_adsense.py YOUR_PUBLISHER_ID")
        elif sys.argv[1] == "verify":
            if len(sys.argv) > 2:
                add_google_verification(sys.argv[2])
            else:
                print("Usage: python3 update_adsense.py verify YOUR_VERIFICATION_CODE")
        elif sys.argv[1] == "guide":
            generate_adsense_guide()
    else:
        print("""
BuzzNewz Site Manager
=====================
Usage:
  python3 update_adsense.py adsense <PUBLISHER_ID>   - Update AdSense ID
  python3 update_adsense.py verify <CODE>           - Add Google verification
  python3 update_adsense.py guide                   - Generate guide
        """)
