import { TEXT } from '@/lib/content'
import type { Lang } from '@/lib/i18n'
export function AboutPage({ lang }: { lang: Lang }) {
  const t = TEXT[lang].about
  const sep = lang === 'ja' ? '' : ' '
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t.h1}</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t.whatTitle}</h2>
          <p className="text-gray-600">
            {t.what.join(sep)}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t.noticeTitle}</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-700">
              {t.notice.join(sep)}
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t.purposeTitle}</h2>
          <p className="text-gray-600">
            {t.purpose.join(sep)}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t.developerTitle}</h2>
          <p className="text-gray-600">
            {t.developerBefore}<a href="https://www.phaiworks.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">PH AI Works</a>{t.developerAfter}
          </p>
        </section>
      </div>
    </div>
  )
}
