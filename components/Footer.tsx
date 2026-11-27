import Link from 'next/link'
import { TEXT } from '@/lib/content'
import { localePath, type Lang } from '@/lib/i18n'
export function Footer({ lang }: { lang: Lang }) {
  const t = TEXT[lang].footer
  const href = (path: string) => localePath(lang, path)
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <Link href={href('/')} className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
            {TEXT[lang].site.name}
          </Link>
          <p className="text-gray-400 text-center max-w-md">
            {t.tagline}
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href={href('/terms')} className="hover:text-white transition-colors">{t.terms}</Link>
            <Link href={href('/privacy')} className="hover:text-white transition-colors">{t.privacy}</Link>
            <Link href={href('/about')} className="hover:text-white transition-colors">{t.about}</Link>
            <a href="https://www.phaiworks.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PH AI Works</a>
          </div>
          <div className="border-t border-gray-700 w-full pt-6 mt-2">
            <div className="text-center text-sm">
              <p className="text-amber-400 mb-2">{t.notice}</p>
              <p className="text-gray-500">&copy; {currentYear} {t.rights}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
