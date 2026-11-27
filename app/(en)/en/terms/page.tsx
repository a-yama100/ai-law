import { TermsPage } from '@/components/pages/TermsPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('en', 'terms')

export default function Page() {
  return <TermsPage lang="en" />
}
