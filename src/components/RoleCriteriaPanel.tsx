import { useState } from 'react'
import {
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  MapPin,
  ShieldAlert,
  Sparkles,
} from 'lucide-react'
import { roleCriteria } from '../data/candidates'

function CriteriaList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-sm leading-5 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function RoleCriteriaPanel() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <aside className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-sky-50 text-sky-700">
              <BriefcaseBusiness size={20} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Open role
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">{roleCriteria.title}</h2>
              <p className="mt-1 text-sm text-slate-500">{roleCriteria.department}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <div className="flex gap-2">
              <MapPin size={17} className="mt-0.5 shrink-0 text-slate-400" />
              <span>{roleCriteria.location}</span>
            </div>
            <div className="flex gap-2">
              <CircleDollarSign size={17} className="mt-0.5 shrink-0 text-slate-400" />
              <span>{roleCriteria.compensation}</span>
            </div>
          </div>

          <button
            type="button"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((current) => !current)}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-sky-100"
          >
            {isExpanded ? 'Hide criteria' : 'View criteria'}
            <ChevronDown size={16} className={isExpanded ? 'rotate-180 transition' : 'transition'} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
          <span className="rounded-full bg-slate-100 px-2.5 py-1">
            {roleCriteria.mustHave.length} must-haves
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1">
            {roleCriteria.niceToHave.length} nice-to-haves
          </span>
          <span className="rounded-full bg-rose-50 px-2.5 py-1 text-rose-700">
            {roleCriteria.dealbreakers.length} dealbreakers
          </span>
          <span className="rounded-full bg-sky-50 px-2.5 py-1 text-sky-700">
            {roleCriteria.screeningInstructions.length} screening instructions
          </span>
        </div>
      </div>

      {isExpanded ? (
        <div className="grid gap-5 border-t border-slate-200 p-5 lg:grid-cols-[1fr_1fr_0.9fr_1fr]">
          <CriteriaList title="Must-have skills" items={roleCriteria.mustHave} />
          <CriteriaList title="Nice-to-have skills" items={roleCriteria.niceToHave} />
          <section className="rounded-md border border-rose-100 bg-rose-50 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-rose-900">
              <ShieldAlert size={17} />
              Dealbreakers
            </div>
            <ul className="mt-2 space-y-1.5 text-sm leading-5 text-rose-800">
              {roleCriteria.dealbreakers.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-md border border-sky-100 bg-sky-50 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-sky-950">
              <CheckCircle2 size={17} />
              Screening question instructions
            </div>
            <ul className="mt-2 space-y-1.5 text-sm leading-5 text-sky-900">
              {roleCriteria.screeningInstructions.map((item) => (
                <li key={item} className="flex gap-2">
                  <Sparkles size={14} className="mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : null}
    </aside>
  )
}
