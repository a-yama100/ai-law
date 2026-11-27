import { AboutPage } from '@/components/pages/AboutPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('ja', 'about')

export default function Page() {
  return <AboutPage lang="ja" />
}
