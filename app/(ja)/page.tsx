import { HomePage } from '@/components/pages/HomePage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('ja', 'home')

export default function Page() {
  return <HomePage lang="ja" />
}
