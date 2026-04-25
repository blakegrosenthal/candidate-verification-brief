import clsx from 'clsx'
import type { BadgeTone } from './badgeStyles'

const toneClasses: Record<BadgeTone, string> = {
  green: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  amber: 'border-amber-200 bg-amber-50 text-amber-800',
  red: 'border-rose-200 bg-rose-50 text-rose-800',
  slate: 'border-slate-200 bg-slate-50 text-slate-700',
  blue: 'border-sky-200 bg-sky-50 text-sky-800',
  violet: 'border-violet-200 bg-violet-50 text-violet-800',
}

export function Badge({
  children,
  tone = 'slate',
  className,
}: {
  children: React.ReactNode
  tone?: BadgeTone
  className?: string
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold leading-none',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
