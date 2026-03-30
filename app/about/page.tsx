export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About AI Legal Guide</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">What is this site?</h2>
          <p className="text-gray-600">
            AI Legal Guide is a simulation site that envisions a future where all human lawyers have been replaced by AI attorneys.
            Users can explore AI lawyer services from around the world, search for unmanned legal facilities,
            and experience how legal services might work in this hypothetical future.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-700">
              All AI lawyer services, legal facilities, pricing, ratings, and other data on this site are entirely fictional.
              This site does not provide real legal advice or representation.
              If you have actual legal concerns, please consult a real attorney.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Purpose</h2>
          <p className="text-gray-600">
            This project explores the possibilities and challenges of a future where AI handles all legal services.
            It is designed as a thought experiment and technology demonstration, built with Next.js by PH AI Works.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Developer</h2>
          <p className="text-gray-600">
            Built by <a href="https://www.phaiworks.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">PH AI Works</a> as a sample project demonstrating AI-powered web applications.
          </p>
        </section>
      </div>
    </div>
  )
}
