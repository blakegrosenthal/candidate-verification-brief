import { BriefcaseBusiness, CheckCircle2, CircleDollarSign, MapPin, ShieldAlert, Sparkles } from 'lucide-react'
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
  return (
    <aside className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-5">
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
        <div className="mt-5 grid gap-3 text-sm text-slate-600">
          <div className="flex gap-2">
            <MapPin size={17} className="mt-0.5 shrink-0 text-slate-400" />
            <span>{roleCriteria.location}</span>
          </div>
          <div className="flex gap-2">
            <CircleDollarSign size={17} className="mt-0.5 shrink-0 text-slate-400" />
            <span>{roleCriteria.compensation}</span>
          </div>
        </div>
      </div>
      <div className="grid gap-5 p-5">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
          <CriteriaList title="Must-have skills" items={roleCriteria.mustHave} />
          <CriteriaList title="Nice-to-have skills" items={roleCriteria.niceToHave} />
        </div>
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
    </aside>
  )
}
