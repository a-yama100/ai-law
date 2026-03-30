'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
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
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-sm">LG</span>
            </div>
            <span className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors text-sm sm:text-lg">
              AI Legal Guide
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/match" className={linkClass('/match')}>Issue Match</Link>
            <Link href="/providers" className={linkClass('/providers')}>AI Lawyers</Link>
            <Link href="/facilities" className={linkClass('/facilities')}>Facilities</Link>
            <Link href="/pricing" className={linkClass('/pricing')}>Pricing</Link>
            <Link href="/about" className={linkClass('/about')}>About</Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
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
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <Link href="/" className={mobileLinkClass('/')} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/match" className={mobileLinkClass('/match')} onClick={() => setIsOpen(false)}>Issue Match</Link>
          <Link href="/providers" className={mobileLinkClass('/providers')} onClick={() => setIsOpen(false)}>AI Lawyers</Link>
          <Link href="/facilities" className={mobileLinkClass('/facilities')} onClick={() => setIsOpen(false)}>Facilities</Link>
          <Link href="/pricing" className={mobileLinkClass('/pricing')} onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/about" className={mobileLinkClass('/about')} onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  )
}
