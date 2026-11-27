import { ProviderDetailPage } from '@/components/pages/ProviderDetailPage'
import { AI_PROVIDERS } from '@/lib/mockData'
import { providerMetadata } from '@/lib/seo'

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return AI_PROVIDERS.map(x => ({ id: x.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  return providerMetadata('ja', id)
}

export default async function Page({ params }: Props) {
  const { id } = await params
  return <ProviderDetailPage lang="ja" id={id} />
}
