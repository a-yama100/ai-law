import { PrivacyPage } from '@/components/pages/PrivacyPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('ja', 'privacy')

export default function Page() {
  return <PrivacyPage lang="ja" />
}
