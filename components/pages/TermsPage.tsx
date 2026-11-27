import { Fragment } from 'react'
import { TEXT } from '@/lib/content'
import type { Lang } from '@/lib/i18n'
export function TermsPage({ lang }: { lang: Lang }) {
  const t = TEXT[lang].terms
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t.h1}</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 prose max-w-none">
        <p className="text-gray-600">{t.updated}</p>
        {t.sections.map(s => (
          <Fragment key={s.title}>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">{s.title}</h2>
            <p className="text-gray-600">{s.body}</p>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
