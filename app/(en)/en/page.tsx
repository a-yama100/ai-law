import { HomePage } from '@/components/pages/HomePage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('en', 'home')

export default function Page() {
  return <HomePage lang="en" />
}
