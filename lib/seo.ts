import type { Metadata } from 'next'
import { TEXT } from './content'
import { SITE_URL, localePath, type Lang } from './i18n'
import { AI_PROVIDERS, FACILITIES, tr } from './mockData'

// サイト全体の設定（各言語のルートのレイアウトで使う）
export function siteMetadata(lang: Lang): Metadata {
  const s = TEXT[lang].site
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: s.title, template: '%s | ' + s.name },
    description: s.description,
    keywords: s.keywords,
    authors: [{ name: TEXT.en.site.name }],
    robots: { index: true, follow: true },
    icons: { icon: '/favicon.svg' },
  }
}

// ページごとの題名・説明・正規の URL・言語の対応（hreflang）・OG。path は日本語の形（'/about' など）
export function pageMetadata(lang: Lang, path: string, opts: { title?: string; description?: string } = {}): Metadata {
  const s = TEXT[lang].site
  const url = localePath(lang, path)
  const description = opts.description ?? s.description
  const ogTitle = opts.title ? opts.title + ' | ' + s.name : s.title
  return {
    title: opts.title ?? { absolute: s.title },
    description,
    alternates: {
      canonical: url,
      languages: { ja: localePath('ja', path), en: localePath('en', path), 'x-default': localePath('ja', path) },
    },
    openGraph: {
      type: 'website',
      locale: s.ogLocale,
      url,
      siteName: s.name,
      title: ogTitle,
      description: opts.title ? description : s.ogDescription,
    },
  }
}

export type PageKey = 'home' | 'about' | 'facilities' | 'providers' | 'match' | 'pricing' | 'privacy' | 'terms'

// 一覧などの固定のページ。題名はページの見出し（h1）、説明はページの最初の文
export function staticPageMetadata(lang: Lang, page: PageKey): Metadata {
  const t = TEXT[lang]
  switch (page) {
    case 'home': return pageMetadata(lang, '/')
    case 'about': return pageMetadata(lang, '/about', { title: t.about.h1, description: t.about.what[0] })
    case 'facilities': return pageMetadata(lang, '/facilities', { title: t.facilities.h1, description: t.facilities.intro })
    case 'providers': return pageMetadata(lang, '/providers', { title: t.providers.h1, description: t.providers.intro })
    case 'match': return pageMetadata(lang, '/match', { title: t.match.h1, description: t.match.intro })
    case 'pricing': return pageMetadata(lang, '/pricing', { title: t.pricing.h1, description: t.pricing.intro })
    case 'privacy': return pageMetadata(lang, '/privacy', { title: t.privacy.h1, description: t.privacy.sections[0].body })
    case 'terms': return pageMetadata(lang, '/terms', { title: t.terms.h1, description: t.terms.sections[0].body })
  }
}

export function facilityMetadata(lang: Lang, id: string): Metadata {
  const f = FACILITIES.find(x => x.id === id)
  if (!f) return {}
  return pageMetadata(lang, '/facilities/' + id, { title: f.name, description: tr(lang, f.description) })
}

export function providerMetadata(lang: Lang, id: string): Metadata {
  const p = AI_PROVIDERS.find(x => x.id === id)
  if (!p) return {}
  return pageMetadata(lang, '/providers/' + id, { title: p.name, description: tr(lang, p.description) })
}
