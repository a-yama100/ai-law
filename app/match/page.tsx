'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AI_PROVIDERS, FACILITIES, LEGAL_ISSUES, SPECIALTY_LABELS, LANGUAGE_LABELS } from '@/lib/mockData'
export default function MatchPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const toggleIssue = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id])
  }
  const matchedSpecialties = new Set<string>()
  selected.forEach(id => {
    const issue = LEGAL_ISSUES.find(s => s.id === id)
    issue?.relatedSpecialties.forEach(sp => matchedSpecialties.add(sp))
  })
  const rankedProviders = AI_PROVIDERS.map(p => {
    const matchCount = p.specialties.filter(s => matchedSpecialties.has(s)).length
    return { ...p, matchCount }
  }).filter(p => p.matchCount > 0).sort((a, b) => b.matchCount - a.matchCount || b.rating - a.rating)
  const relevantFacilities = FACILITIES.filter(f => {
    if (matchedSpecialties.has('criminal') || matchedSpecialties.has('white_collar') || matchedSpecialties.has('fraud')) {
      return f.type === 'litigation' || f.type === 'comprehensive'
    }
    if (matchedSpecialties.has('contract') || matchedSpecialties.has('real_estate') || matchedSpecialties.has('corporate')) {
      return f.type === 'documentation' || f.type === 'comprehensive'
    }
    return true
  }).sort((a, b) => b.rating - a.rating)
  const categories = [...new Set(LEGAL_ISSUES.map(s => s.category))]
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Legal Issue Matching</h1>
      <p className="text-gray-600 mb-8">Select your legal issues below and we will recommend the best AI lawyer and facility for you.</p>
      {/* Issue Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Select Legal Issues</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(cat => {
            const catIssues = LEGAL_ISSUES.filter(s => s.category === cat)
            const hasSelected = catIssues.some(s => selected.includes(s.id))
            return (
              <div key={cat} className={"bg-white rounded-xl shadow-lg overflow-hidden" + (hasSelected ? " ring-2 ring-indigo-400" : "")}>
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-sm">{cat}</h3>
                </div>
                <div className="p-4 space-y-2">
                  {catIssues.map(issue => (
                    <button
                      key={issue.id}
                      onClick={() => toggleIssue(issue.id)}
                      className={"w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer " + (selected.includes(issue.id)
                        ? "bg-indigo-500 text-white shadow-md"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100")}
                    >
                      <span className="flex items-center gap-2">
                        {selected.includes(issue.id)
                          ? <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          : <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={2} /></svg>}
                        {issue.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <button
          onClick={() => setShowResults(true)}
          disabled={selected.length === 0}
          className="mt-4 bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Find Matching Lawyers
        </button>
      </div>
      {/* Results */}
      {showResults && selected.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Results</h2>
          <p className="text-gray-600 mb-6">
            Related practice areas: {[...matchedSpecialties].map(s => SPECIALTY_LABELS[s] || s).join(', ')}
          </p>
          {/* Matched AI Providers */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended AI Lawyers</h3>
          {rankedProviders.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {rankedProviders.map((p, idx) => (
                <Link key={p.id} href={"/providers/" + p.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={"bg-gradient-to-r " + p.gradient + " p-4 flex items-center justify-between"}>
                    <div>
                      <div className="flex items-center gap-2">
                        {idx === 0 && <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">Best Match</span>}
                        <h4 className="text-lg font-bold text-white">{p.name}</h4>
                      </div>
                      <p className="text-white/80 text-sm">{p.country}</p>
                    </div>
                    <div className="text-right text-white">
                      <div className="text-2xl font-bold">{p.matchCount}</div>
                      <div className="text-xs text-white/70">matches</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>Rating: {p.rating}</span>
                      <span>{p.reviewCount.toLocaleString()} reviews</span>
                      <span>{p.priceRange}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {p.specialties.filter(s => matchedSpecialties.has(s)).map(s => (
                        <span key={s} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5 rounded-full">{SPECIALTY_LABELS[s] || s}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mb-8">No matching AI lawyer services found.</p>
          )}
          {/* Relevant Facilities */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Facilities</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {relevantFacilities.slice(0, 4).map(f => (
              <Link key={f.id} href={"/facilities/" + f.id} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{f.name}</h4>
                    <p className="text-sm text-gray-500">{f.city}, {f.region}</p>
                  </div>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{f.type}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <span>Rating: {f.rating}</span>
                  <span>{f.priceRange}</span>
                  <span>{f.openHours}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {f.equipment.slice(0, 3).map(e => (
                    <span key={e} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5 rounded-full">{e}</span>
                  ))}
                  {f.equipment.length > 3 && <span className="text-xs text-gray-400">+{f.equipment.length - 3} more</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
