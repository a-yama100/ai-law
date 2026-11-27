import { FacilitiesPage } from '@/components/pages/FacilitiesPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('en', 'facilities')

export default function Page() {
  return <FacilitiesPage lang="en" />
}
