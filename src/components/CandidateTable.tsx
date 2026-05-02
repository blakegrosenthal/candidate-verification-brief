import clsx from 'clsx'
import type { KeyboardEvent } from 'react'
import { Badge } from './Badge'
import {
  evidenceTone,
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
          <h2 className="text-lg font-semibold text-slate-950">Candidate queue</h2>
          <p className="mt-1 text-sm leading-5 text-slate-500">
            Select a row to prepare the verification brief. Role alignment and verification concern
            stay separate.
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs leading-5 text-slate-500">
            <span>
              <span className="font-semibold text-slate-700">Verification concern:</span> candidate
              may look qualified, but key claims need clarification.
            </span>
            <span>
              <span className="font-semibold text-slate-700">Evidence strength:</span> shows how
              well claims are supported with examples, metrics, tools, or ownership.
            </span>
          </div>
        </div>
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-sm font-semibold text-slate-600">
          {candidates.length} shown
        </span>
      </div>
      <div>
        <table className="w-full table-fixed text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-[0.1em] text-slate-500">
            <tr>
              <th className="w-[24%] px-4 py-3 font-semibold">Candidate</th>
              <th className="w-[22%] px-3 py-3 font-semibold">Current / recent role</th>
              <th className="w-[11%] px-3 py-3 font-semibold">Role alignment</th>
              <th className="w-[14%] px-3 py-3 font-semibold">Claims to clarify</th>
              <th className="w-[14%] px-3 py-3 font-semibold">Evidence strength</th>
              <th className="w-[15%] px-4 py-3 font-semibold">Suggested screen focus</th>
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
                    isSelected && 'bg-sky-50 [box-shadow:inset_3px_0_0_#0284c7]',
                  )}
                >
                  <td className="px-4 py-4 align-top">
                    <div className="font-semibold text-slate-950">{candidate.name}</div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600">
                        Generic answers: {candidate.genericAnswerRisk}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600">
                        Instruction following: {candidate.instructionFollowing}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-4 align-top leading-5 text-slate-700">
                    {candidate.currentRole}
                  </td>
                  <td className="px-3 py-4 align-top">
                    <Badge tone={signalTone(candidate.fitSignal)}>{candidate.fitSignal}</Badge>
                  </td>
                  <td className="px-3 py-4 align-top">
                    <Badge tone={riskTone(candidate.verificationRisk)}>
                      {candidate.verificationRisk}
                    </Badge>
                  </td>
                  <td className="px-3 py-4 align-top">
                    <Badge tone={evidenceTone(candidate.evidenceStrength)}>
                      {candidate.evidenceStrength}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 align-top">
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
