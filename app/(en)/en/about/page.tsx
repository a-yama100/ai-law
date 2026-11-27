import { AboutPage } from '@/components/pages/AboutPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('en', 'about')

export default function Page() {
  return <AboutPage lang="en" />
}
