import { FacilityDetailPage } from '@/components/pages/FacilityDetailPage'
import { FACILITIES } from '@/lib/mockData'
import { facilityMetadata } from '@/lib/seo'

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return FACILITIES.map(x => ({ id: x.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  return facilityMetadata('en', id)
}

export default async function Page({ params }: Props) {
  const { id } = await params
  return <FacilityDetailPage lang="en" id={id} />
}
