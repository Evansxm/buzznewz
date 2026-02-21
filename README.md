# BuzzNewz - Your Daily Buzz of Global News

A modern news aggregation website built with HTML, CSS, JavaScript, and Node.js backend.

## Features

- **Multi-page responsive design** - Works on all devices
- **Category pages** - Tech, Entertainment, Business, Lifestyle
- **AI News section** - Latest articles on artificial intelligence
- **Google AdSense ready** - Pre-configured ad placeholders for monetization
- **PayPal integration** - Donation support integrated
- **REST API** - Node.js/Express backend with article endpoints
- **SEO optimized** - Meta tags, sitemap, robots.txt

## Quick Start

### Static Site (Frontend Only)

Simply open `index.html` in your browser, or deploy to any static hosting:

```bash
# Using Python
python -m http.server 8000

# Or deploy to Vercel, Netlify, GitHub Pages
```

### With Backend (Node.js)

```bash
# Install dependencies
npm install

# Start server
npm start

# Server runs at http://localhost:3000
```

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/articles` | Get all articles |
| `/api/articles/featured` | Get featured articles |
| `/api/articles/:slug` | Get single article |
| `/api/categories` | Get categories |
| `/api/stats` | Get site statistics |
| `/api/health` | Health check |

## Google AdSense Setup

1. Sign up at [Google AdSense](https://www.google.com/adsense)
2. After approval, get your Publisher ID (starts with `ca-pub-`)
3. Replace `XXXXXXXXXXXXXX` in all HTML files with your Publisher ID

Example:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-PUBLISHER-ID" crossorigin="anonymous"></script>
```

## PayPal Configuration

PayPal donations are already configured. To customize:

1. Update PayPal links in all HTML files
2. Replace `evansmathibe82` with your PayPal username

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select "main" branch and save

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
1. Drag and drop the `buzznewz` folder to Netlify dashboard

## Site Structure

```
buzznewz/
├── index.html          # Homepage
├── tech.html           # Technology news
├── entertainment.html  # Entertainment news
├── business.html       # Business news
├── lifestyle.html      # Lifestyle news
├── about.html          # About page
├── contact.html        # Contact page
├── article.html        # Article template
├── article-*.html      # AI news articles
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Frontend JavaScript
├── server.js           # Node.js backend
├── package.json        # Dependencies
├── sitemap.xml         # SEO sitemap
└── robots.txt          # Search engine config
```

## SEO

The site includes:
- Semantic HTML5
- OpenGraph meta tags
- Twitter Card meta tags
- XML sitemap
- Robots.txt
- Canonical URLs

## License

MIT License - Feel free to use and modify for your own projects.

---

Built with BuzzNewz
