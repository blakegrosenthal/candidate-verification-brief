import { useMemo, useState } from 'react'
import {
  AlertCircle,
  ClipboardList,
  FileWarning,
  Gauge,
  SearchCheck,
  ShieldQuestion,
  Users,
} from 'lucide-react'
import { CandidateTable } from './components/CandidateTable'
import { DashboardCard } from './components/DashboardCard'
import { Filters, type FilterState } from './components/Filters'
import { RoleCriteriaPanel } from './components/RoleCriteriaPanel'
import { VerificationBrief } from './components/VerificationBrief'
import { candidates } from './data/candidates'
import type { Candidate } from './types'

function App() {
  const [selectedCandidateId, setSelectedCandidateId] = useState('ethan-brooks')
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<FilterState>({
    fitSignal: 'All',
    verificationRisk: 'All',
    suggestedNextStep: 'All',
    genericAnswerRisk: 'All',
    instructionFollowing: 'All',
  })

  const filteredCandidates = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return candidates.filter((candidate) => {
      const matchesFilters =
        (filters.fitSignal === 'All' || candidate.fitSignal === filters.fitSignal) &&
        (filters.verificationRisk === 'All' ||
          candidate.verificationRisk === filters.verificationRisk) &&
        (filters.suggestedNextStep === 'All' ||
          candidate.suggestedNextStep === filters.suggestedNextStep) &&
        (filters.genericAnswerRisk === 'All' ||
          candidate.genericAnswerRisk === filters.genericAnswerRisk) &&
        (filters.instructionFollowing === 'All' ||
          candidate.instructionFollowing === filters.instructionFollowing)

      if (!matchesFilters) return false
      if (!normalizedSearch) return true

      const searchableText = [
        candidate.name,
        candidate.currentRole,
        candidate.background,
        candidate.applicationAnswer,
        ...candidate.resumeHighlights,
        ...candidate.skills,
        ...candidate.companies,
      ]
        .join(' ')
        .toLowerCase()

      return searchableText.includes(normalizedSearch)
    })
  }, [filters, search])

  const selectedCandidate =
    filteredCandidates.find((candidate) => candidate.id === selectedCandidateId) ??
    filteredCandidates[0]

  const metrics = useMemo(() => {
    const recommended = candidates.filter((candidate) =>
      ['Interview', 'Quick screen'].includes(candidate.suggestedNextStep),
    ).length

    return {
      total: candidates.length,
      recommended,
      highFit: candidates.filter((candidate) => candidate.fitSignal === 'High').length,
      highRisk: candidates.filter((candidate) => candidate.verificationRisk === 'High').length,
      genericRisk: candidates.filter((candidate) => candidate.genericAnswerRisk === 'High').length,
      instructionIssues: candidates.filter((candidate) =>
        ['Partial', 'Issue'].includes(candidate.instructionFollowing),
      ).length,
    }
  }, [])

  function updateFilter<K extends keyof FilterState>(key: K, value: FilterState[K]) {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  function selectCandidate(candidate: Candidate) {
    setSelectedCandidateId(candidate.id)
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto grid max-w-[1680px] gap-6 px-4 py-5 sm:px-6 lg:px-8">
        <header className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-slate-950 text-white">
                  <SearchCheck size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Recruiter prep layer
                  </p>
                  <h1 className="mt-1 text-3xl font-semibold tracking-normal text-slate-950">
                    Candidate Verification Brief
                  </h1>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-700">
                See what to trust, what to question, and what to verify before the first
                interview.
              </p>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-500">
                This tool does not replace recruiter judgment. It helps recruiters prepare better
                first screens by surfacing claims to verify, weak evidence, generic answers, and
                instruction-following issues.
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600 lg:max-w-sm">
              <span className="font-semibold text-slate-900">Current queue:</span> Commercial
              Account Executive applicants reviewed from the latest inbound batch.
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <DashboardCard
            label="Total applicants reviewed"
            value={metrics.total}
            detail="Sample batch ready for review"
            icon={Users}
          />
          <DashboardCard
            label="Recommended first screens"
            value={metrics.recommended}
            detail="Interview or quick screen"
            icon={ClipboardList}
          />
          <DashboardCard
            label="High fit candidates"
            value={metrics.highFit}
            detail="Fit is not a final decision"
            icon={Gauge}
          />
          <DashboardCard
            label="High verification risk"
            value={metrics.highRisk}
            detail="Claims need a tighter screen"
            icon={ShieldQuestion}
          />
          <DashboardCard
            label="Generic answer risk"
            value={metrics.genericRisk}
            detail="Polished or copy-paste sounding"
            icon={AlertCircle}
          />
          <DashboardCard
            label="Instruction issues"
            value={metrics.instructionIssues}
            detail="Partial or missed instructions"
            icon={FileWarning}
          />
        </section>

        <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
          <RoleCriteriaPanel />
          <div className="grid gap-5">
            <Filters
              filters={filters}
              search={search}
              onFilterChange={updateFilter}
              onSearchChange={setSearch}
            />
            <CandidateTable
              candidates={filteredCandidates}
              selectedCandidateId={selectedCandidate?.id}
              onSelectCandidate={selectCandidate}
            />
          </div>
        </div>

        <VerificationBrief candidate={selectedCandidate} />
      </div>
    </main>
  )
}

export default App
