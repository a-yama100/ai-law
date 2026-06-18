import Link from 'next/link'
import { FACILITIES } from '@/lib/mockData'
const TYPE_COLORS: Record<string, string> = {
  consultation: 'bg-blue-100 text-blue-700',
  documentation: 'bg-purple-100 text-purple-700',
  litigation: 'bg-red-100 text-red-700',
  comprehensive: 'bg-indigo-100 text-indigo-700',
}
const TYPE_LABELS: Record<string, string> = {
  consultation: 'AI Consultation',
  documentation: 'Document Center',
  litigation: 'Litigation Support',
  comprehensive: 'Comprehensive',
}
export default function FacilitiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Unmanned Legal Facilities</h1>
      <p className="text-gray-600 mb-8">Find nearby AI consultation centers, document preparation offices, and litigation support facilities. All data is fictional.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {FACILITIES.map(f => (
          <Link key={f.id} href={"/facilities/" + f.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{f.name}</h2>
                  <p className="text-sm text-gray-500">{f.city}, {f.region}</p>
                </div>
                <span className={(TYPE_COLORS[f.type] || 'bg-gray-100 text-gray-700') + ' text-xs px-3 py-1 rounded-full font-medium'}>
                  {TYPE_LABELS[f.type] || f.type}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{f.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                <span>Rating: {f.rating}</span>
                <span>{(f.reviewCount ?? 0).toLocaleString()} reviews</span>
                <span>{f.priceRange}</span>
                <span>{f.openHours}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {f.equipment.map(e => (
                  <span key={e} className="bg-gray-50 text-gray-600 text-xs px-2 py-0.5 rounded-full border border-gray-200">{e}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
