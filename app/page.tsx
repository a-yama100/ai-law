import Link from 'next/link'
import { AI_PROVIDERS, FACILITIES } from '@/lib/mockData'
const FEATURES = [
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Legal Issue Matching",
    desc: "Describe your legal problem and AI will recommend the best AI lawyer service and nearby facility.",
    href: "/match",
    gradient: "from-indigo-500 to-indigo-700",
  },
  {
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    title: "AI Lawyer Comparison",
    desc: "Compare AI lawyer services from around the world by specialty, price, and rating.",
    href: "/providers",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    title: "Facility Search",
    desc: "Find unmanned legal consultation centers, document preparation offices, and AI courtrooms near you.",
    href: "/facilities",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Pricing Comparison",
    desc: "Compare consultation fees, monthly plans, and facility costs at a glance.",
    href: "/pricing",
    gradient: "from-amber-500 to-amber-700",
  },
]
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative text-white py-12">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-bg.png)" }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm mb-6">
            Future Legal Services Simulation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Legal Guide
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Experience the future where AI lawyers replace all human attorneys.
            <br />
            Find the best AI lawyer service and nearby unmanned legal facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/match" className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg">
              Start Legal Issue Matching
            </Link>
            <Link href="/providers" className="border-2 border-white/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Browse AI Lawyers
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold">{AI_PROVIDERS.length}</div>
              <div className="text-indigo-200 text-sm">AI Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{FACILITIES.length}</div>
              <div className="text-indigo-200 text-sm">Facilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-indigo-200 text-sm">Available</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <Link key={f.href} href={f.href} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className={"bg-gradient-to-r " + f.gradient + " p-4 flex items-center gap-3"}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
                <h3 className="text-xl font-bold text-white">{f.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{f.desc}</p>
                <span className="inline-block mt-4 text-indigo-600 font-medium group-hover:translate-x-1 transition-transform">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Describe Your Issue", desc: "Enter your legal problem and preferences. The AI assistant will analyze your situation." },
              { step: "2", title: "Get Matched", desc: "Receive personalized recommendations for AI lawyer services and nearby legal facilities." },
              { step: "3", title: "Connect", desc: "Start a consultation with your chosen AI lawyer and book services at a local facility." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
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
          <h3 className="text-lg font-bold text-amber-800 mb-2">Important Notice</h3>
          <p className="text-amber-700">
            This is a simulation site depicting a future scenario where AI replaces all human lawyers.
            All AI lawyer services, facilities, and data shown on this site are entirely fictional.
            This site does not provide real legal advice or services.
          </p>
        </div>
      </section>
    </div>
  )
}
