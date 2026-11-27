import { AI_PROVIDERS, FACILITIES, tr, languageLabel } from '@/lib/mockData'
import { TEXT } from '@/lib/content'
import type { Lang } from '@/lib/i18n'
export function PricingPage({ lang }: { lang: Lang }) {
  const t = TEXT[lang].pricing
  const c = TEXT[lang].common
  const typeLabels = TEXT[lang].facilities.typeLabels
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.h1}</h1>
      <p className="text-gray-600 mb-8">{t.intro}</p>
      {/* AI Lawyer Pricing Table */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.providersTitle}</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-900">{t.thService}</th>
                <th className="text-left p-4 font-semibold text-gray-900">{t.thCountry}</th>
                <th className="text-right p-4 font-semibold text-gray-900">{t.thMonthly}</th>
                <th className="text-right p-4 font-semibold text-gray-900">{t.thConsult}</th>
                <th className="text-center p-4 font-semibold text-gray-900">{t.thRating}</th>
                <th className="text-center p-4 font-semibold text-gray-900">{t.thResponse}</th>
                <th className="text-left p-4 font-semibold text-gray-900">{t.thLanguages}</th>
              </tr>
            </thead>
            <tbody>
              {[...AI_PROVIDERS].sort((a, b) => a.monthlyFee - b.monthlyFee).map((p, idx) => (
                <tr key={p.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-4">
                    <div className="font-bold text-gray-900">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.priceRange}</div>
                  </td>
                  <td className="p-4 text-gray-600">{tr(lang, p.country)}</td>
                  <td className="p-4 text-right font-bold text-gray-900">PHP {(p.monthlyFee ?? 0).toLocaleString()}</td>
                  <td className="p-4 text-right font-bold text-gray-900">PHP {(p.consultFee ?? 0).toLocaleString()}</td>
                  <td className="p-4 text-center">
                    <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-bold">{p.rating}</span>
                  </td>
                  <td className="p-4 text-center text-gray-600">{tr(lang, p.responseTime)}</td>
                  <td className="p-4 text-gray-600">{p.languages.map(l => languageLabel(lang, l)).join(c.listSep)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Facility Pricing Table */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.facilitiesTitle}</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-900">{t.thFacility}</th>
                <th className="text-left p-4 font-semibold text-gray-900">{t.thLocation}</th>
                <th className="text-left p-4 font-semibold text-gray-900">{t.thType}</th>
                <th className="text-center p-4 font-semibold text-gray-900">{t.thPriceRange}</th>
                <th className="text-center p-4 font-semibold text-gray-900">{t.thRating}</th>
                <th className="text-center p-4 font-semibold text-gray-900">{t.thHours}</th>
                <th className="text-left p-4 font-semibold text-gray-900">{t.thServices}</th>
              </tr>
            </thead>
            <tbody>
              {FACILITIES.map((f, idx) => (
                <tr key={f.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-4 font-bold text-gray-900">{f.name}</td>
                  <td className="p-4 text-gray-600">{tr(lang, f.city)}</td>
                  <td className="p-4 text-gray-600 capitalize">{lang === 'ja' ? (typeLabels[f.type] || f.type) : f.type}</td>
                  <td className="p-4 text-center font-bold text-gray-900">{f.priceRange}</td>
                  <td className="p-4 text-center">
                    <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-bold">{f.rating}</span>
                  </td>
                  <td className="p-4 text-center text-gray-600">{tr(lang, f.openHours)}</td>
                  <td className="p-4 text-gray-600 text-xs">{f.equipment.map(e => tr(lang, e)).join(c.listSep)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-amber-700 text-sm">
          {t.disclaimer}
        </p>
      </div>
    </div>
  )
}
