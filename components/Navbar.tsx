'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { TEXT } from '@/lib/content'
import { basePath, localePath, type Lang } from '@/lib/i18n'
export function Navbar({ lang }: { lang: Lang }) {
  const t = TEXT[lang].nav
  const pathname = basePath(usePathname() || '/')
  const [isOpen, setIsOpen] = useState(false)
  const href = (path: string) => localePath(lang, path)
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }
  const linkClass = (path: string) => {
    const base = 'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200'
    if (isActive(path)) {
      return base + ' bg-indigo-500 text-white shadow-md'
    }
    return base + ' text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  }
  const mobileLinkClass = (path: string) => {
    const base = 'block px-4 py-3 text-sm font-medium transition-all duration-200'
    if (isActive(path)) {
      return base + ' bg-indigo-500 text-white'
    }
    return base + ' text-gray-600 hover:bg-gray-100'
  }
  const links = [
    { path: '/', label: t.home },
    { path: '/match', label: t.match },
    { path: '/providers', label: t.providers },
    { path: '/facilities', label: t.facilities },
    { path: '/pricing', label: t.pricing },
    { path: '/about', label: t.about },
  ]
  // 言語の切り替え: 今のページの、もう一方の言語の同じパスへ移る（ルートのレイアウトが変わるので a で読み込み直す）
  const switcher = (
    <div className="flex items-center rounded-lg border border-gray-200 text-xs font-medium overflow-hidden" aria-label={t.language}>
      {lang === 'ja' ? (
        <span className="px-2.5 py-1.5 bg-gray-100 text-gray-900">日本語</span>
      ) : (
        <a href={localePath('ja', pathname)} hrefLang="ja" lang="ja" className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900">日本語</a>
      )}
      {lang === 'en' ? (
        <span className="px-2.5 py-1.5 bg-gray-100 text-gray-900">English</span>
      ) : (
        <a href={localePath('en', pathname)} hrefLang="en" lang="en" className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900">English</a>
      )}
    </div>
  )
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href={href('/')} className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-sm">{t.logo}</span>
            </div>
            <span className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors text-sm sm:text-lg">
              {TEXT[lang].site.name}
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            {links.map(l => (
              <Link key={l.path} href={href(l.path)} className={linkClass(l.path)}>{l.label}</Link>
            ))}
            {switcher}
          </div>
          <div className="md:hidden flex items-center gap-2">
            {switcher}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t.menu}
              aria-expanded={isOpen}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          {links.map(l => (
            <Link key={l.path} href={href(l.path)} className={mobileLinkClass(l.path)} onClick={() => setIsOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}
