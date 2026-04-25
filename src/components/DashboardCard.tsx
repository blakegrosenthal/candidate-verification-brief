import type { LucideIcon } from 'lucide-react'

export function DashboardCard({
  label,
  value,
  detail,
  icon: Icon,
}: {
  label: string
  value: string | number
  detail: string
  icon: LucideIcon
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <span className="flex size-9 items-center justify-center rounded-md bg-slate-100 text-slate-600">
          <Icon size={18} strokeWidth={1.8} />
        </span>
      </div>
      <div className="mt-4 text-3xl font-semibold tracking-normal text-slate-950">{value}</div>
      <p className="mt-1 text-sm text-slate-500">{detail}</p>
    </article>
  )
}
