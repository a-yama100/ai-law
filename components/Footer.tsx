import Link from 'next/link'
export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
            AI Legal Guide
          </Link>
          <p className="text-gray-400 text-center max-w-md">
            A simulation site for experiencing future AI-powered legal services. All data is fictional.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <div className="border-t border-gray-700 w-full pt-6 mt-2">
            <div className="text-center text-sm">
              <p className="text-amber-400 mb-2">This is a simulation site. All provider and facility data is fictional.</p>
              <p className="text-gray-500">Copyright {currentYear} AI Legal Guide. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
