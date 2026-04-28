import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileQuestion,
  MessageSquareText,
  Target,
  ThumbsUp,
} from 'lucide-react'
import { Badge } from './Badge'
import {
  evidenceTone,
  instructionTone,
  nextStepTone,
  riskTone,
  signalTone,
} from './badgeStyles'
import type { Candidate } from '../types'

function firstSentences(text: string, count = 1) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [text]
  return sentences.slice(0, count).join(' ').trim()
}

function uniqueItems(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)))
}

function recruiterTakeaway(candidate: Candidate) {
  if (candidate.id === 'maya-patel') {
    return 'Candidate appears aligned, but the first screen should verify quota ownership, deal size, sales cycle, and Salesforce depth.'
  }

  if (candidate.id === 'ethan-brooks') {
    return 'If this candidate is screened, several claims should be pressure tested because they are vague or unsupported. Use the first call to clarify whether the experience is real, specific, and personally owned.'
  }

  if (candidate.id === 'marcus-green') {
    return 'Strong outbound story on paper. Pressure test whether the claimed pipeline gains were personally owned and whether he wants hands-on AE work.'
  }

  if (candidate.verificationRisk === 'High') {
    return 'Looks relevant on paper, but the first screen should pressure test vague claims, ownership, and examples.'
  }

  if (candidate.verificationRisk === 'Medium') {
    return 'Use the first screen to clarify the main gap before trusting the strongest claims.'
  }

  return 'Use the first screen to confirm the strongest evidence and calibrate role alignment.'
}

function BriefBlock({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-slate-200 pt-4">
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-sm leading-6 text-slate-650">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function NumberedQuestions({ questions }: { questions: string[] }) {
  return (
    <ol className="space-y-2 text-sm leading-6 text-slate-650">
      {questions.map((question, index) => (
        <li key={question} className="flex gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-800">
            {index + 1}
          </span>
          <span>{question}</span>
        </li>
      ))}
    </ol>
  )
}

export function VerificationBrief({ candidate }: { candidate?: Candidate }) {
  const [isMoreDetailOpen, setIsMoreDetailOpen] = useState(false)

  useEffect(() => {
    setIsMoreDetailOpen(false)
  }, [candidate?.id])

  const compactBrief = useMemo(() => {
    if (!candidate) return undefined

    const instructionFlags = candidate.brief.instructionChecks
      .filter((check) => check.flag !== 'Complete')
      .map((check) => `Instruction issue: ${check.instruction}.`)

    const genericFlag =
      candidate.genericAnswerRisk !== 'Low'
        ? `Generic answers: ${candidate.genericAnswerRisk.toLowerCase()} risk.`
        : ''

    const whyFlagged = uniqueItems([
      ...instructionFlags,
      genericFlag,
      ...candidate.brief.gapsOrInconsistencies,
      candidate.brief.concernToTest,
    ]).slice(0, 3)

    return {
      overallRead: firstSentences(candidate.brief.overallRead, 2),
      takeaway: recruiterTakeaway(candidate),
      whyFlagged,
      claimsToVerify: candidate.brief.claimsToVerify.slice(0, 3),
      questions: candidate.brief.firstScreenQuestions.slice(0, 3),
      focus: firstSentences(candidate.brief.suggestedNextStep, 1),
    }
  }, [candidate])

  if (!candidate || !compactBrief) {
    return (
      <aside className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="font-semibold text-slate-950">Select a candidate to view the brief.</p>
      </aside>
    )
  }

  return (
    <aside className="rounded-lg border border-slate-300 bg-white shadow-sm">
      <section className="border-b border-slate-200 p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Selected Candidate Verification Brief
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-950">{candidate.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{candidate.currentRole}</p>
          </div>
          <Badge tone={nextStepTone(candidate.suggestedNextStep)}>
            {candidate.suggestedNextStep}
          </Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge tone={signalTone(candidate.fitSignal)}>
            Role alignment: {candidate.fitSignal}
          </Badge>
          <Badge tone={riskTone(candidate.verificationRisk)}>
            Verification concern: {candidate.verificationRisk}
          </Badge>
          <Badge tone={evidenceTone(candidate.evidenceStrength)}>
            Evidence: {candidate.evidenceStrength}
          </Badge>
        </div>
      </section>

      <section className="grid gap-4 p-5">
        <section className="rounded-md border border-sky-200 bg-sky-50 p-4">
          <h3 className="text-sm font-semibold text-sky-950">Recruiter takeaway</h3>
          <p className="mt-2 text-sm leading-6 text-sky-900">{compactBrief.takeaway}</p>
        </section>

        <BriefBlock title="Overall read">
          <p className="text-sm leading-6 text-slate-650">{compactBrief.overallRead}</p>
        </BriefBlock>

        <BriefBlock title="Why flagged">
          <BulletList items={compactBrief.whyFlagged} />
        </BriefBlock>

        <BriefBlock title="Top claims to verify">
          <BulletList items={compactBrief.claimsToVerify} />
        </BriefBlock>

        <BriefBlock title="First-screen questions">
          <NumberedQuestions questions={compactBrief.questions} />
        </BriefBlock>

        <BriefBlock title="Suggested first-screen focus">
          <p className="text-sm leading-6 text-slate-650">{compactBrief.focus}</p>
        </BriefBlock>

        <section className="rounded-md border border-slate-200 bg-slate-50">
          <button
            type="button"
            aria-expanded={isMoreDetailOpen}
            onClick={() => setIsMoreDetailOpen((current) => !current)}
            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-sky-100"
          >
            More detail
            <ChevronDown
              size={16}
              className={isMoreDetailOpen ? 'rotate-180 transition' : 'transition'}
            />
          </button>

          {isMoreDetailOpen ? (
            <div className="grid gap-4 border-t border-slate-200 bg-white p-4">
              <div className="grid gap-4 xl:grid-cols-2">
                <section>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    What looks credible
                  </div>
                  <div className="mt-2">
                    <BulletList items={candidate.brief.credible} />
                  </div>
                </section>
                <section>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <AlertTriangle size={16} className="text-amber-600" />
                    Key gaps or inconsistencies
                  </div>
                  <div className="mt-2">
                    <BulletList items={candidate.brief.gapsOrInconsistencies} />
                  </div>
                </section>
              </div>

              <section>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <MessageSquareText size={16} className="text-slate-500" />
                  Generic answer notes
                </div>
                <div className="mt-2">
                  <BulletList items={candidate.brief.genericAnswerNotes} />
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <ClipboardCheck size={16} className="text-sky-700" />
                  Instruction following breakdown
                </div>
                <div className="mt-2 grid gap-2">
                  {candidate.brief.instructionChecks.map((check) => (
                    <div
                      key={check.instruction}
                      className="rounded-md border border-slate-200 bg-slate-50 p-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-slate-950">{check.instruction}</p>
                        <Badge tone={instructionTone(check.flag)}>{check.flag}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-600">
                        <span className="font-semibold text-slate-800">Answer: </span>
                        {check.candidateAnswer}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">{check.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid gap-4 xl:grid-cols-2">
                <section>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <AlertTriangle size={16} className="text-rose-600" />
                    One concern to test
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-650">
                    {candidate.brief.concernToTest}
                  </p>
                </section>
                <section>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <ThumbsUp size={16} className="text-emerald-600" />
                    Reason to continue review
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-650">
                    {candidate.brief.reasonToStillInterview}
                  </p>
                </section>
              </div>

              <section>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <Target size={16} className="text-slate-500" />
                  Application context
                </div>
                <div className="mt-3 grid gap-4 xl:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Resume highlights</p>
                    <div className="mt-2">
                      <BulletList items={candidate.resumeHighlights} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Application answer sample</p>
                    <p className="mt-2 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-650">
                      {candidate.applicationAnswer}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <FileQuestion size={16} className="text-slate-500" />
                  Full first-screen question set
                </div>
                <div className="mt-2">
                  <NumberedQuestions questions={candidate.brief.firstScreenQuestions} />
                </div>
              </section>
            </div>
          ) : null}
        </section>
      </section>
    </aside>
  )
}
