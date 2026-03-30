import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import Script from 'next/script'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  metadataBase: new URL('https://ai-law.phaiworks.com'),
  title: {
    default: 'AI Legal Guide - Future Legal Services Simulation',
    template: '%s | AI Legal Guide',
  },
  description: 'A simulation of future AI-powered legal services. Compare AI lawyer services, find nearby unmanned legal facilities, and match legal issues to the right provider.',
  keywords: ['AI lawyer', 'future legal', 'legal simulation', 'AI legal advice', 'automated law', 'legal tech'],
  authors: [{ name: 'AI Legal Guide' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://ai-law.phaiworks.com/',
    siteName: 'AI Legal Guide',
    title: 'AI Legal Guide - Future Legal Services Simulation',
    description: 'Experience the future of AI-powered legal services through this simulation.',
  },
  icons: { icon: '/favicon.svg' },
}
const gaId = process.env.NEXT_PUBLIC_GA_ID || ''
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={geistSans.variable + ' ' + geistMono.variable + ' antialiased min-h-screen flex flex-col'}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        {gaId && (
          <>
            <Script
              src={"https://www.googletagmanager.com/gtag/js?id=" + gaId}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" + gaId + "');"}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
