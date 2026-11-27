import '../globals.css'
import { SiteShell } from '@/components/SiteShell'
import { siteMetadata } from '@/lib/seo'

export const metadata = siteMetadata('en')

// 英語のページのルートのレイアウト（html lang="en"）
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="en">{children}</SiteShell>
}
