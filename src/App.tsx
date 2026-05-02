import { useMemo, useState } from 'react'
import {
  ClipboardList,
  FileWarning,
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
    return {
      total: candidates.length,
      briefsReady: candidates.length,
      highRisk: candidates.filter((candidate) => candidate.verificationRisk === 'High').length,
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
              <p className="mt-2 max-w-3xl text-base font-semibold leading-6 text-slate-800">
                Recruiter prep brief for the first screen.
              </p>
              <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600">
                Built for recruiter first-screen prep. Turn polished applications into focused
                questions before the call.
              </p>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-500">
                This tool does not replace recruiter judgment. It helps recruiters prepare better
                first screens by surfacing claims to verify, weak evidence, generic answers, and
                instruction-following issues.
              </p>
              <p className="mt-3 inline-flex rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm leading-5 text-slate-600">
                Verification risk does not mean fraud. It means key claims need confirmation before
                the recruiter trusts them.
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600 lg:max-w-sm">
              <span className="font-semibold text-slate-900">Current queue:</span> Commercial
              Account Executive applicants reviewed from the latest inbound batch.
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <DashboardCard
            label="Total applicants reviewed"
            value={metrics.total}
            detail="Sample batch ready for review"
            icon={Users}
          />
          <DashboardCard
            label="Briefs ready for review"
            value={metrics.briefsReady}
            detail="Verification notes generated"
            icon={ClipboardList}
          />
          <DashboardCard
            label="High verification concern"
            value={metrics.highRisk}
            detail="Claims needing verification"
            icon={ShieldQuestion}
          />
          <DashboardCard
            label="Missed instructions"
            value={metrics.instructionIssues}
            detail="Partial or missed instructions"
            icon={FileWarning}
          />
        </section>

        <RoleCriteriaPanel />

        <section className="grid items-start gap-5 2xl:grid-cols-[minmax(760px,0.95fr)_minmax(520px,1.05fr)]">
          <div className="grid gap-4">
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
          <div className="2xl:sticky 2xl:top-5 2xl:max-h-[calc(100vh-2.5rem)] 2xl:overflow-y-auto">
            <VerificationBrief candidate={selectedCandidate} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
