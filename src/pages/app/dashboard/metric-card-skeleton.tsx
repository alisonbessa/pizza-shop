import { Skeleton } from '@/components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-32" />
      <Skeleton className="h-4 w-48" />
    </>
  )
}
