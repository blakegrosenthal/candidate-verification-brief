import { Search } from 'lucide-react'
import type { InstructionFollowing, Signal, SuggestedNextStep } from '../types'

export type FilterState = {
  fitSignal: 'All' | Signal
  verificationRisk: 'All' | Signal
  suggestedNextStep: 'All' | SuggestedNextStep
  genericAnswerRisk: 'All' | Signal
  instructionFollowing: 'All' | InstructionFollowing
}

const signalOptions = ['All', 'High', 'Medium', 'Low'] as const
const nextStepOptions = [
  'All',
  'Strong first-screen candidate',
  'Quick verification screen',
  'Manual review',
  'Lower priority screen',
] as const
const instructionOptions = ['All', 'Good', 'Partial', 'Issue'] as const

function SelectFilter<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: readonly T[]
  onChange: (value: T) => void
}) {
  return (
    <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium normal-case tracking-normal text-slate-800 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export function Filters({
  filters,
  search,
  onFilterChange,
  onSearchChange,
}: {
  filters: FilterState
  search: string
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void
  onSearchChange: (value: string) => void
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-3 lg:grid-cols-[minmax(240px,1.4fr)_repeat(5,minmax(132px,1fr))]">
        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          Search
          <div className="relative">
            <Search
              aria-hidden="true"
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Name, role, skill, or company"
              className="h-10 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-sm font-medium normal-case tracking-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            />
          </div>
        </label>
        <SelectFilter
          label="Fit signal"
          value={filters.fitSignal}
          options={signalOptions}
          onChange={(value) => onFilterChange('fitSignal', value)}
        />
        <SelectFilter
          label="Verification risk"
          value={filters.verificationRisk}
          options={signalOptions}
          onChange={(value) => onFilterChange('verificationRisk', value)}
        />
        <SelectFilter
          label="Next step"
          value={filters.suggestedNextStep}
          options={nextStepOptions}
          onChange={(value) => onFilterChange('suggestedNextStep', value)}
        />
        <SelectFilter
          label="Generic answers"
          value={filters.genericAnswerRisk}
          options={signalOptions}
          onChange={(value) => onFilterChange('genericAnswerRisk', value)}
        />
        <SelectFilter
          label="Instructions"
          value={filters.instructionFollowing}
          options={instructionOptions}
          onChange={(value) => onFilterChange('instructionFollowing', value)}
        />
      </div>
    </section>
  )
}
