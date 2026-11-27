import Link from 'next/link'
import { AI_PROVIDERS, FACILITIES } from '@/lib/mockData'
import { TEXT } from '@/lib/content'
import { localePath, type Lang } from '@/lib/i18n'
const FEATURES = [
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    href: "/match",
    gradient: "from-indigo-500 to-indigo-700",
  },
  {
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    href: "/providers",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    href: "/facilities",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    href: "/pricing",
    gradient: "from-amber-500 to-amber-700",
  },
]
export function HomePage({ lang }: { lang: Lang }) {
  const t = TEXT[lang].home
  const href = (path: string) => localePath(lang, path)
  return (
    <div>
      {/* Hero */}
      <section className="relative text-white py-12">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-bg.png)" }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm mb-6">
            {t.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.h1}
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element -- 同じ origin の静的ファイル。next/image の最適化は使わない */}
          <img src="/media/hero.webp" alt={t.heroAlt} width={1600} height={679} className="mb-8 aspect-[1600/679] w-full rounded-xl object-cover shadow-lg" />
          <p className="text-xl text-indigo-100 mb-8">
            {t.heroLead[0]}
            <br />
            {t.heroLead[1]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={href("/match")} className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg">
              {t.ctaMatch}
            </Link>
            <Link href={href("/providers")} className="border-2 border-white/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              {t.ctaProviders}
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold">{AI_PROVIDERS.length}</div>
              <div className="text-indigo-200 text-sm">{t.statServices}</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{FACILITIES.length}</div>
              <div className="text-indigo-200 text-sm">{t.statFacilities}</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-indigo-200 text-sm">{t.statAvailable}</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.featuresTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <Link key={f.href} href={href(f.href)} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className={"bg-gradient-to-r " + f.gradient + " p-4 flex items-center gap-3"}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
                <h3 className="text-xl font-bold text-white">{t.features[i].title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{t.features[i].desc}</p>
                <span className="inline-block mt-4 text-indigo-600 font-medium group-hover:translate-x-1 transition-transform">
                  {t.learnMore} &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.howTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.steps.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Disclaimer */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-amber-800 mb-2">{t.noticeTitle}</h3>
          <p className="text-amber-700">
            {t.notice.join(lang === 'ja' ? '' : ' ')}
          </p>
        </div>
      </section>
    </div>
  )
}
