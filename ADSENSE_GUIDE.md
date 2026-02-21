# Google AdSense Application Guide for BuzzNewz

## Step-by-Step Application Process

### 1. Prepare Your Site
Before applying, ensure your site has:
- [x] Original content (all articles written by Evans Mathibe)
- [x] Privacy Policy page
- [x] Contact page
- [x] About page
- [x] Google AdSense code placeholders (ready in all HTML files)
- [x] No copyrighted content
- [x] Mobile-friendly design
- [x] Clear navigation

### 2. Apply for Google AdSense

1. **Go to**: https://www.google.com/adsense/start/
2. **Sign in** with your Google account (Gmail)
3. **Enter your website**: buzznewz.com
4. **Complete the application** with:
   - Site name: BuzzNewz
   - Content language: English
   - Target audience: Global
5. **Add AdSense code** to your site (see below)

### 3. Replace Placeholder with Your Publisher ID

After getting approved, you'll receive a Publisher ID like: `ca-pub-1234567890123456`

**Replace in ALL HTML files:**

```html
<!-- Replace this line: -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXX" crossorigin="anonymous"></script>

<!-- With your actual Publisher ID: -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-PUBLISHER-ID" crossorigin="anonymous"></script>
```

**Files to update:**
- index.html
- tech.html
- entertainment.html
- business.html
- lifestyle.html
- about.html
- contact.html
- article.html
- All article-*.html files

### 4. Quick Replace Command

```bash
# In your buzznewz folder, run:
sed -i 's/ca-pub-XXXXXXXXXXXXXX/ca-pub-YOUR-PUBLISHER-ID/g' *.html
```

### 5. Ad Units Included

Your site has placeholders for:
- **Header Banner** (728x90) - Top of every page
- **Sidebar Ad** (300x250) - Right sidebar
- **In-Content Ad** (300x250) - Within articles

### 6. AdSense Policy Compliance

To maintain approval:
- Keep 3 ads max per page
- No clickbait content
- No prohibited content
- Keep original content
- Don't click your own ads

### 7. Link to Google Analytics (Optional but Recommended)

1. Go to https://analytics.google.com
2. Create a property for buzznewz.com
3. Add the tracking code to all pages

---

## After Approval

Once approved, your ads will start showing and you'll receive payments via:
- **PayPal** (recommended) or
- Bank transfer

Your PayPal is already configured at: `https://paypal.me/evansmathibe82`

---

## Current Site Status

| Item | Status |
|------|--------|
| Pages | 7 main pages + 17 articles |
| Author | Evans Mathibe |
| AdSense Code | Ready (placeholder) |
| Sitemap | Indexed |
| SEO | Optimized |
| Mobile | Responsive |

## Apply Now

**Application URL**: https://www.google.com/adsense/start/

Good luck with your application!
