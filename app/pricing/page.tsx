import { AI_PROVIDERS, FACILITIES, LANGUAGE_LABELS } from '@/lib/mockData'
export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Pricing Comparison</h1>
      <p className="text-gray-600 mb-8">Compare costs across AI lawyer services and legal facilities. All prices are fictional and shown in PHP.</p>
      {/* AI Lawyer Pricing Table */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Lawyer Services</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-900">Service</th>
                <th className="text-left p-4 font-semibold text-gray-900">Country</th>
                <th className="text-right p-4 font-semibold text-gray-900">Monthly Fee</th>
                <th className="text-right p-4 font-semibold text-gray-900">Per Consult</th>
                <th className="text-center p-4 font-semibold text-gray-900">Rating</th>
                <th className="text-center p-4 font-semibold text-gray-900">Response</th>
                <th className="text-left p-4 font-semibold text-gray-900">Languages</th>
              </tr>
            </thead>
            <tbody>
              {AI_PROVIDERS.sort((a, b) => a.monthlyFee - b.monthlyFee).map((p, idx) => (
                <tr key={p.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-4">
                    <div className="font-bold text-gray-900">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.priceRange}</div>
                  </td>
                  <td className="p-4 text-gray-600">{p.country}</td>
                  <td className="p-4 text-right font-bold text-gray-900">PHP {(p.monthlyFee ?? 0).toLocaleString()}</td>
                  <td className="p-4 text-right font-bold text-gray-900">PHP {(p.consultFee ?? 0).toLocaleString()}</td>
                  <td className="p-4 text-center">
                    <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-bold">{p.rating}</span>
                  </td>
                  <td className="p-4 text-center text-gray-600">{p.responseTime}</td>
                  <td className="p-4 text-gray-600">{p.languages.map(l => LANGUAGE_LABELS[l] || l).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Facility Pricing Table */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Facilities</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-900">Facility</th>
                <th className="text-left p-4 font-semibold text-gray-900">Location</th>
                <th className="text-left p-4 font-semibold text-gray-900">Type</th>
                <th className="text-center p-4 font-semibold text-gray-900">Price Range</th>
                <th className="text-center p-4 font-semibold text-gray-900">Rating</th>
                <th className="text-center p-4 font-semibold text-gray-900">Hours</th>
                <th className="text-left p-4 font-semibold text-gray-900">Services</th>
              </tr>
            </thead>
            <tbody>
              {FACILITIES.map((f, idx) => (
                <tr key={f.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-4 font-bold text-gray-900">{f.name}</td>
                  <td className="p-4 text-gray-600">{f.city}</td>
                  <td className="p-4 text-gray-600 capitalize">{f.type}</td>
                  <td className="p-4 text-center font-bold text-gray-900">{f.priceRange}</td>
                  <td className="p-4 text-center">
                    <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-bold">{f.rating}</span>
                  </td>
                  <td className="p-4 text-center text-gray-600">{f.openHours}</td>
                  <td className="p-4 text-gray-600 text-xs">{f.equipment.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-amber-700 text-sm">
          All prices are fictional and for simulation purposes only. They do not represent actual service costs.
        </p>
      </div>
    </div>
  )
}
