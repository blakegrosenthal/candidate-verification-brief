import clsx from 'clsx'
import type { KeyboardEvent } from 'react'
import { Badge } from './Badge'
import {
  evidenceTone,
  instructionTone,
  nextStepTone,
  riskTone,
  signalTone,
} from './badgeStyles'
import type { Candidate } from '../types'

export function CandidateTable({
  candidates,
  selectedCandidateId,
  onSelectCandidate,
}: {
  candidates: Candidate[]
  selectedCandidateId?: string
  onSelectCandidate: (candidate: Candidate) => void
}) {
  function handleRowKeyDown(event: KeyboardEvent<HTMLTableRowElement>, candidate: Candidate) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelectCandidate(candidate)
    }
  }

  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">Applicant verification queue</h2>
          <p className="mt-1 text-sm text-slate-500">
            Fit signal and verification risk are intentionally separate.
          </p>
        </div>
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-sm font-semibold text-slate-600">
          {candidates.length} shown
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[1120px] w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-[0.1em] text-slate-500">
            <tr>
              <th className="px-5 py-3 font-semibold">Candidate</th>
              <th className="px-4 py-3 font-semibold">Current / recent role</th>
              <th className="px-4 py-3 font-semibold">Fit signal</th>
              <th className="px-4 py-3 font-semibold">Verification risk</th>
              <th className="px-4 py-3 font-semibold">Evidence strength</th>
              <th className="px-4 py-3 font-semibold">Generic answer risk</th>
              <th className="px-4 py-3 font-semibold">Instruction following</th>
              <th className="px-5 py-3 font-semibold">Suggested next step</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {candidates.map((candidate) => {
              const isSelected = selectedCandidateId === candidate.id
              return (
                <tr
                  key={candidate.id}
                  onClick={() => onSelectCandidate(candidate)}
                  onKeyDown={(event) => handleRowKeyDown(event, candidate)}
                  tabIndex={0}
                  role="button"
                  aria-selected={isSelected}
                  aria-label={`Open verification brief for ${candidate.name}`}
                  className={clsx(
                    'cursor-pointer transition hover:bg-sky-50/70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400',
                    isSelected && 'bg-sky-50',
                  )}
                >
                  <td className="px-5 py-4">
                    <div className="font-semibold text-slate-950">{candidate.name}</div>
                    <div className="mt-1 line-clamp-2 max-w-[240px] text-xs leading-5 text-slate-500">
                      {candidate.background}
                    </div>
                  </td>
                  <td className="max-w-[210px] px-4 py-4 text-slate-700">{candidate.currentRole}</td>
                  <td className="px-4 py-4">
                    <Badge tone={signalTone(candidate.fitSignal)}>{candidate.fitSignal}</Badge>
                  </td>
                  <td className="px-4 py-4">
                    <Badge tone={riskTone(candidate.verificationRisk)}>
                      {candidate.verificationRisk}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <Badge tone={evidenceTone(candidate.evidenceStrength)}>
                      {candidate.evidenceStrength}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <Badge tone={riskTone(candidate.genericAnswerRisk)}>
                      {candidate.genericAnswerRisk}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <Badge tone={instructionTone(candidate.instructionFollowing)}>
                      {candidate.instructionFollowing}
                    </Badge>
                  </td>
                  <td className="px-5 py-4">
                    <Badge tone={nextStepTone(candidate.suggestedNextStep)}>
                      {candidate.suggestedNextStep}
                    </Badge>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {candidates.length === 0 ? (
        <div className="px-5 py-12 text-center">
          <p className="text-sm font-semibold text-slate-900">No candidates match these filters.</p>
          <p className="mt-1 text-sm text-slate-500">Try clearing one filter or broadening the search.</p>
        </div>
      ) : null}
    </section>
  )
}
