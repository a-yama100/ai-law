import '../globals.css'
import { SiteShell } from '@/components/SiteShell'
import { siteMetadata } from '@/lib/seo'

export const metadata = siteMetadata('ja')

// 日本語のページのルートのレイアウト（html lang="ja"）
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="ja">{children}</SiteShell>
}
