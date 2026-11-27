import { PricingPage } from '@/components/pages/PricingPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('en', 'pricing')

export default function Page() {
  return <PricingPage lang="en" />
}
