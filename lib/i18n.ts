// 言語の切り替えと URL の決まり。日本語はルート（/、/about）、英語は /en の下（/en、/en/about）。
export type Lang = 'ja' | 'en'

export const SITE_URL = 'https://ai-law.phaiworks.com'

// その言語での URL のパス。path は日本語の形（'/'、'/about'、'/providers/xxx'）で渡す
export function localePath(lang: Lang, path: string): string {
  if (lang === 'ja') return path
  return path === '/' ? '/en' : '/en' + path
}

// 今の URL のパスから /en を外して、日本語の形のパスにする
export function basePath(pathname: string): string {
  if (pathname === '/en') return '/'
  if (pathname.startsWith('/en/')) return pathname.slice(3)
  return pathname || '/'
}
