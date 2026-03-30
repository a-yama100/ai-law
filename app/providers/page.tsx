import Link from 'next/link'
import { AI_PROVIDERS, SPECIALTY_LABELS, LANGUAGE_LABELS } from '@/lib/mockData'
export default function ProvidersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Lawyer Services</h1>
      <p className="text-gray-600 mb-8">Compare AI-powered legal services from around the world. All data is fictional.</p>
      <div className="space-y-6">
        {AI_PROVIDERS.map(p => (
          <Link key={p.id} href={"/providers/" + p.id} className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className={"bg-gradient-to-r " + p.gradient + " p-6"}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{p.name}</h2>
                  <p className="text-white/80">{p.country}</p>
                </div>
                <div className="text-right text-white">
                  <div className="text-3xl font-bold">{p.rating}</div>
                  <div className="text-sm text-white/70">{p.reviewCount.toLocaleString()} reviews</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{p.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-500">Monthly Fee</div>
                  <div className="font-bold text-gray-900">PHP {(p.monthlyFee ?? 0).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Per Consultation</div>
                  <div className="font-bold text-gray-900">PHP {(p.consultFee ?? 0).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Response Time</div>
                  <div className="font-bold text-gray-900">{p.responseTime}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Languages</div>
                  <div className="font-bold text-gray-900">{p.languages.map(l => LANGUAGE_LABELS[l] || l).join(', ')}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.specialties.map(s => (
                  <span key={s} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{SPECIALTY_LABELS[s] || s}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
