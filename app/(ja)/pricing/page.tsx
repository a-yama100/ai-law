import { PricingPage } from '@/components/pages/PricingPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('ja', 'pricing')

export default function Page() {
  return <PricingPage lang="ja" />
}
