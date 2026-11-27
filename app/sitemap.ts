import type { MetadataRoute } from 'next'
import { AI_PROVIDERS, FACILITIES } from '@/lib/mockData'
import { SITE_URL, localePath } from '@/lib/i18n'

// robots.txt が指す /sitemap.xml。日本語（ルート）と英語（/en）の URL を対にして、言語の対応も付ける
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/match', '/providers', '/facilities', '/pricing', '/about', '/terms', '/privacy']
  const entries: { path: string; priority: number }[] = [
    ...pages.map((p) => ({ path: p, priority: p === '/' ? 1 : 0.7 })),
    ...AI_PROVIDERS.map((p) => ({ path: '/providers/' + p.id, priority: 0.5 })),
    ...FACILITIES.map((f) => ({ path: '/facilities/' + f.id, priority: 0.5 })),
  ]
  const url = (lang: 'ja' | 'en', path: string) => SITE_URL + (localePath(lang, path) === '/' ? '' : localePath(lang, path))
  return entries.flatMap(({ path, priority }) => {
    const languages = { ja: url('ja', path), en: url('en', path), 'x-default': url('ja', path) }
    return [
      { url: url('ja', path), priority, alternates: { languages } },
      { url: url('en', path), priority, alternates: { languages } },
    ]
  })
}
