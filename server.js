const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const articles = [
  {
    id: 1,
    title: "AI Breakthrough: New Model Achieves Human-Level Reasoning",
    slug: "article-ai-breakthrough",
    category: "AI News",
    date: "2026-02-21",
    readTime: "8 min",
    author: "AI News Team",
    excerpt: "Researchers develop revolutionary AI model that demonstrates unprecedented reasoning capabilities.",
    content: "Full article content here...",
    image: "https://picsum.photos/800/400?random=100",
    featured: true
  },
  {
    id: 2,
    title: "GPT-5 Announcement Stuns Tech World",
    slug: "article-gpt5-announcement",
    category: "AI News",
    date: "2026-02-20",
    readTime: "6 min",
    author: "Tech Editor",
    excerpt: "OpenAI announces GPT-5 with groundbreaking capabilities.",
    content: "Full article content here...",
    image: "https://picsum.photos/800/400?random=101"
  },
  {
    id: 3,
    title: "AI Transforms Healthcare Diagnostics",
    slug: "article-ai-healthcare",
    category: "AI News",
    date: "2026-02-19",
    readTime: "7 min",
    author: "Health Tech Writer",
    excerpt: "Artificial intelligence revolutionizes healthcare with early disease detection.",
    content: "Full article content here...",
    image: "https://picsum.photos/800/400?random=102"
  },
  {
    id: 4,
    title: "AI and the Future of Jobs",
    slug: "article-ai-job-market",
    category: "AI News",
    date: "2026-02-18",
    readTime: "6 min",
    author: "Business Editor",
    excerpt: "How artificial intelligence is reshaping employment and creating new careers.",
    content: "Full article content here...",
    image: "https://picsum.photos/800/400?random=103"
  },
  {
    id: 5,
    title: "The Ethics of AI Development",
    slug: "article-ai-ethics",
    category: "AI News",
    date: "2026-02-17",
    readTime: "7 min",
    author: "Ethics Editor",
    excerpt: "Key challenges and considerations for responsible artificial intelligence.",
    content: "Full article content here...",
    image: "https://picsum.photos/800/400?random=104"
  },
  {
    id: 6,
    title: "AI Robotics: The Next Frontier",
    slug: "article-ai-robotics",
    category: "AI News",
    date: "2026-02-16",
    readTime: "5 min",
    author: "Tech Writer",
    excerpt: "New humanoid robots with advanced AI capabilities transform industries.",
    content: "Full article content here...",
    image: "https://picsum.photos/800/400?random=105"
  },
  {
    id: 7,
    title: "Revolutionary AI Technology Transforms Modern Industries",
    slug: "article",
    category: "Tech",
    date: "2026-01-15",
    readTime: "5 min",
    author: "Editorial Team",
    excerpt: "Artificial intelligence continues to reshape industries across the globe.",
    content: "Full article content here...",
    image: "https://picsum.photos/400/250?random=1"
  },
  {
    id: 8,
    title: "New Smartphone Features That Will Change How You Communicate",
    slug: "article",
    category: "Tech",
    date: "2026-01-11",
    readTime: "5 min",
    author: "Tech Writer",
    excerpt: "The latest smartphone innovations are revolutionizing communication.",
    content: "Full article content here...",
    image: "https://picsum.photos/400/250?random=5"
  },
  {
    id: 9,
    title: "Blockbuster Movie Breaks Box Office Records",
    slug: "article",
    category: "Entertainment",
    date: "2026-01-15",
    readTime: "4 min",
    author: "Entertainment Writer",
    excerpt: "The latest blockbuster dominates global box office.",
    content: "Full article content here...",
    image: "https://picsum.photos/400/250?random=30"
  },
  {
    id: 10,
    title: "Markets Rally as Economic Indicators Improve",
    slug: "article",
    category: "Business",
    date: "2026-01-15",
    readTime: "6 min",
    author: "Finance Editor",
    excerpt: "Global markets show strong recovery as economic data improves.",
    content: "Full article content here...",
    image: "https://picsum.photos/400/250?random=40"
  },
  {
    id: 11,
    title: "Top Wellness Trends to Watch in 2026",
    slug: "article",
    category: "Lifestyle",
    date: "2026-01-15",
    readTime: "5 min",
    author: "Lifestyle Editor",
    excerpt: "Discover the top wellness trends shaping healthy living.",
    content: "Full article content here...",
    image: "https://picsum.photos/400/250?random=50"
  }
];

const categories = [
  { name: "Tech", count: 45, slug: "tech.html" },
  { name: "Entertainment", count: 32, slug: "entertainment.html" },
  { name: "Business", count: 28, slug: "business.html" },
  { name: "Lifestyle", count: 51, slug: "lifestyle.html" },
  { name: "AI News", count: 6, slug: "tech.html" }
];

app.get('/api/articles', (req, res) => {
  const { category, limit, offset } = req.query;
  let filtered = [...articles];
  
  if (category) {
    filtered = filtered.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }
  
  const start = offset ? parseInt(offset) : 0;
  const end = limit ? start + parseInt(limit) : filtered.length;
  
  res.json({
    total: filtered.length,
    articles: filtered.slice(start, end)
  });
});

app.get('/api/articles/featured', (req, res) => {
  const featured = articles.filter(a => a.featured);
  res.json(featured);
});

app.get('/api/articles/:slug', (req, res) => {
  const article = articles.find(a => a.slug === req.params.slug);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/stats', (req, res) => {
  res.json({
    totalArticles: articles.length,
    categories: categories.length,
    lastUpdated: new Date().toISOString()
  });
});

app.get('/sitemap.xml', (req, res) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://buzznewz.com/</loc><lastmod>2026-02-21</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
    <url><loc>https://buzznewz.com/tech.html</loc><lastmod>2026-02-21</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>
    <url><loc>https://buzznewz.com/article-ai-breakthrough.html</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
</urlset>`;
  res.type('application/xml').send(sitemap);
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(`User-agent: *\nAllow: /\nSitemap: https://buzznewz.com/sitemap.xml`);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`BuzzNewz API Server running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`  - GET /api/articles`);
  console.log(`  - GET /api/articles/featured`);
  console.log(`  - GET /api/articles/:slug`);
  console.log(`  - GET /api/categories`);
  console.log(`  - GET /api/stats`);
  console.log(`  - GET /api/health`);
});
