import Link from 'next/link'
import { FACILITIES, tr } from '@/lib/mockData'
import { TEXT } from '@/lib/content'
import { localePath, type Lang } from '@/lib/i18n'
const TYPE_COLORS: Record<string, string> = {
  consultation: 'bg-blue-100 text-blue-700',
  documentation: 'bg-purple-100 text-purple-700',
  litigation: 'bg-red-100 text-red-700',
  comprehensive: 'bg-indigo-100 text-indigo-700',
}
export function FacilitiesPage({ lang }: { lang: Lang }) {
  const t = TEXT[lang].facilities
  const c = TEXT[lang].common
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.h1}</h1>
      <p className="text-gray-600 mb-8">{t.intro}</p>
      <div className="grid md:grid-cols-2 gap-6">
        {FACILITIES.map(f => (
          <Link key={f.id} href={localePath(lang, "/facilities/" + f.id)} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{f.name}</h2>
                  <p className="text-sm text-gray-500">{tr(lang, f.city)}{c.listSep}{tr(lang, f.region)}</p>
                </div>
                <span className={(TYPE_COLORS[f.type] || 'bg-gray-100 text-gray-700') + ' text-xs px-3 py-1 rounded-full font-medium'}>
                  {t.typeLabels[f.type] || f.type}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{tr(lang, f.description)}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                <span>{c.rating(f.rating)}</span>
                <span>{c.reviews((f.reviewCount ?? 0).toLocaleString())}</span>
                <span>{f.priceRange}</span>
                <span>{tr(lang, f.openHours)}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {f.equipment.map(e => (
                  <span key={e} className="bg-gray-50 text-gray-600 text-xs px-2 py-0.5 rounded-full border border-gray-200">{tr(lang, e)}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
