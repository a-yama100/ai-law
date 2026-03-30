import { FACILITIES } from '@/lib/mockData'
import Link from 'next/link'
import { notFound } from 'next/navigation'
export function generateStaticParams() {
  return FACILITIES.map(f => ({ id: f.id }))
}
export default async function FacilityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const facility = FACILITIES.find(f => f.id === id)
  if (!facility) notFound()
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/facilities" className="text-indigo-600 hover:text-indigo-800 text-sm mb-4 inline-block">&larr; Back to Facilities</Link>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">{facility.name}</h1>
          <p className="text-white/80 text-lg">{facility.city}, {facility.region}</p>
          <div className="flex items-center gap-6 mt-4">
            <div>
              <div className="text-4xl font-bold">{facility.rating}</div>
              <div className="text-white/70 text-sm">{(facility.reviewCount ?? 0).toLocaleString()} reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{facility.openHours}</div>
              <div className="text-white/70 text-sm">Open Hours</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{facility.priceRange}</div>
              <div className="text-white/70 text-sm">Price Range</div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">{facility.description}</p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Available Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {facility.equipment.map(e => (
              <div key={e} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
        <p className="text-amber-700 text-sm">This is a fictional facility for simulation purposes.</p>
      </div>
    </div>
  )
}
