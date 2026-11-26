import type { MetadataRoute } from 'next'
import { AI_PROVIDERS, FACILITIES } from '@/lib/mockData'

// robots.txt が指す /sitemap.xml（以前は無く 404 だった）
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ai-law.phaiworks.com'
  const pages = ['', '/match', '/providers', '/facilities', '/pricing', '/about', '/terms', '/privacy']
  return [
    ...pages.map((p) => ({ url: base + p, priority: p === '' ? 1 : 0.7 })),
    ...AI_PROVIDERS.map((p) => ({ url: `${base}/providers/${p.id}`, priority: 0.5 })),
    ...FACILITIES.map((f) => ({ url: `${base}/facilities/${f.id}`, priority: 0.5 })),
  ]
}
