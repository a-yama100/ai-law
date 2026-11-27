import { FacilitiesPage } from '@/components/pages/FacilitiesPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('ja', 'facilities')

export default function Page() {
  return <FacilitiesPage lang="ja" />
}
