import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import type { Lang } from '@/lib/i18n'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const gaId = process.env.NEXT_PUBLIC_GA_ID || ''
// 日本語（app/(ja)）と英語（app/(en)）のルートのレイアウトが共通で使う html と body
export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className={geistSans.variable + ' ' + geistMono.variable + ' antialiased min-h-screen flex flex-col'}>
        <Navbar lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <ScrollToTop lang={lang} />
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
