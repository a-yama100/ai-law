import { MatchPage } from '@/components/pages/MatchPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('en', 'match')

export default function Page() {
  return <MatchPage lang="en" />
}
