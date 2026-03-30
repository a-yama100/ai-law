import { AI_PROVIDERS, SPECIALTY_LABELS, LANGUAGE_LABELS } from '@/lib/mockData'
import Link from 'next/link'
import { notFound } from 'next/navigation'
export function generateStaticParams() {
  return AI_PROVIDERS.map(p => ({ id: p.id }))
}
export default async function ProviderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const provider = AI_PROVIDERS.find(p => p.id === id)
  if (!provider) notFound()
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/providers" className="text-indigo-600 hover:text-indigo-800 text-sm mb-4 inline-block">&larr; Back to AI Lawyers</Link>
      <div className={"bg-gradient-to-r " + provider.gradient + " rounded-xl p-8 text-white mb-8"}>
        <h1 className="text-3xl font-bold mb-2">{provider.name}</h1>
        <p className="text-white/80 text-lg">{provider.country}</p>
        <div className="flex items-center gap-6 mt-4">
          <div>
            <div className="text-4xl font-bold">{provider.rating}</div>
            <div className="text-white/70 text-sm">{(provider.reviewCount ?? 0).toLocaleString()} reviews</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{provider.responseTime}</div>
            <div className="text-white/70 text-sm">Response Time</div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
          <p className="text-gray-600">{provider.description}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Monthly Fee</span>
              <span className="font-bold text-gray-900">PHP {(provider.monthlyFee ?? 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Per Consultation</span>
              <span className="font-bold text-gray-900">PHP {(provider.consultFee ?? 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Price Range</span>
              <span className="font-bold text-gray-900">{provider.priceRange}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Practice Areas</h2>
          <div className="flex flex-wrap gap-2">
            {provider.specialties.map(s => (
              <span key={s} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">{SPECIALTY_LABELS[s] || s}</span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {provider.languages.map(l => (
              <span key={l} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">{LANGUAGE_LABELS[l] || l}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {provider.features.map(f => (
            <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
              <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
        <p className="text-amber-700 text-sm">This is a fictional AI lawyer service for simulation purposes.</p>
      </div>
    </div>
  )
}
