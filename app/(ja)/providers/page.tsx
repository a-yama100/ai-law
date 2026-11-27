import { ProvidersPage } from '@/components/pages/ProvidersPage'
import { staticPageMetadata } from '@/lib/seo'

export const metadata = staticPageMetadata('ja', 'providers')

export default function Page() {
  return <ProvidersPage lang="ja" />
}
