import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const SITE_URL = 'https://officespaceinadgm.aegiscoworking.ae'

// Make the built stylesheet non-render-blocking (media=print swapped to
// 'all' on load), same technique used on aegiscoworking.ae.
const template = fs
  .readFileSync(path.join(distDir, 'index.html'), 'utf-8')
  .replace(
    /<link rel="stylesheet" crossorigin href="([^"]+)">/,
    `<link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media='all'">` +
      `<noscript><link rel="stylesheet" crossorigin href="$1"></noscript>`
  )

const { render } = await import(path.join(distDir, 'server/entry-server.js'))
const { html, helmet } = render()

const headTags = [
  helmet.title.toString(),
  helmet.meta.toString(),
  helmet.link.toString(),
  helmet.script.toString(),
].join('\n')

const page = template
  .replace('</head>', `${headTags}\n</head>`)
  .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

fs.writeFileSync(path.join(distDir, 'index.html'), page)
console.log(`Prerendered / -> ${path.join(distDir, 'index.html')}`)

// ---- sitemap.xml (single page, regenerated on every build) ----
const today = new Date().toISOString().split('T')[0]
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml)
console.log('Sitemap written -> dist/sitemap.xml')
