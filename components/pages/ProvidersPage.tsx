import Link from 'next/link'
import { AI_PROVIDERS, tr, specialtyLabel, languageLabel } from '@/lib/mockData'
import { TEXT } from '@/lib/content'
import { localePath, type Lang } from '@/lib/i18n'
export function ProvidersPage({ lang }: { lang: Lang }) {
  const t = TEXT[lang].providers
  const c = TEXT[lang].common
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.h1}</h1>
      <p className="text-gray-600 mb-8">{t.intro}</p>
      <div className="space-y-6">
        {AI_PROVIDERS.map(p => (
          <Link key={p.id} href={localePath(lang, "/providers/" + p.id)} className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className={"bg-gradient-to-r " + p.gradient + " p-6"}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{p.name}</h2>
                  <p className="text-white/80">{tr(lang, p.country)}</p>
                </div>
                <div className="text-right text-white">
                  <div className="text-3xl font-bold">{p.rating}</div>
                  <div className="text-sm text-white/70">{c.reviews(p.reviewCount.toLocaleString())}</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{tr(lang, p.description)}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-500">{t.monthlyFee}</div>
                  <div className="font-bold text-gray-900">PHP {(p.monthlyFee ?? 0).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">{t.perConsult}</div>
                  <div className="font-bold text-gray-900">PHP {(p.consultFee ?? 0).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">{t.responseTime}</div>
                  <div className="font-bold text-gray-900">{tr(lang, p.responseTime)}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">{t.languages}</div>
                  <div className="font-bold text-gray-900">{p.languages.map(l => languageLabel(lang, l)).join(TEXT[lang].common.listSep)}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.specialties.map(s => (
                  <span key={s} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{specialtyLabel(lang, s)}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
