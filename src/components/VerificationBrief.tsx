import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  FileQuestion,
  MessageSquareText,
  ShieldQuestion,
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

function BriefSection({
  title,
  icon: Icon,
  children,
}: {
  title: string
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex size-8 items-center justify-center rounded-md bg-slate-100 text-slate-600">
          <Icon size={17} />
        </span>
        <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      </div>
      {children}
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-6 text-slate-650">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function VerificationBrief({ candidate }: { candidate?: Candidate }) {
  if (!candidate) {
    return (
      <aside className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="font-semibold text-slate-950">Select a candidate to view the brief.</p>
      </aside>
    )
  }

  return (
    <aside className="grid gap-4">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Candidate Verification Brief
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-950">{candidate.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{candidate.currentRole}</p>
          </div>
          <Badge tone={nextStepTone(candidate.suggestedNextStep)}>
            {candidate.suggestedNextStep}
          </Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge tone={signalTone(candidate.fitSignal)}>Fit: {candidate.fitSignal}</Badge>
          <Badge tone={riskTone(candidate.verificationRisk)}>
            Verification risk: {candidate.verificationRisk}
          </Badge>
          <Badge tone={evidenceTone(candidate.evidenceStrength)}>
            Evidence: {candidate.evidenceStrength}
          </Badge>
          <Badge tone={riskTone(candidate.genericAnswerRisk)}>
            Generic risk: {candidate.genericAnswerRisk}
          </Badge>
          <Badge tone={instructionTone(candidate.instructionFollowing)}>
            Instructions: {candidate.instructionFollowing}
          </Badge>
        </div>
      </section>

      <BriefSection title="Overall read" icon={Target}>
        <p className="text-sm leading-6 text-slate-650">{candidate.brief.overallRead}</p>
      </BriefSection>

      <div className="grid gap-4 xl:grid-cols-2">
        <BriefSection title="What looks credible" icon={CheckCircle2}>
          <BulletList items={candidate.brief.credible} />
        </BriefSection>
        <BriefSection title="Claims to verify" icon={ShieldQuestion}>
          <BulletList items={candidate.brief.claimsToVerify} />
        </BriefSection>
      </div>

      <BriefSection title="Gaps or inconsistencies" icon={AlertTriangle}>
        <BulletList items={candidate.brief.gapsOrInconsistencies} />
      </BriefSection>

      <BriefSection title="Generic answer notes" icon={MessageSquareText}>
        <BulletList items={candidate.brief.genericAnswerNotes} />
      </BriefSection>

      <BriefSection title="Instruction following" icon={ClipboardCheck}>
        <div className="grid gap-3">
          {candidate.brief.instructionChecks.map((check) => (
            <div key={check.instruction} className="rounded-md border border-slate-200 bg-slate-50 p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-950">{check.instruction}</p>
                <Badge tone={instructionTone(check.flag)}>{check.flag}</Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Candidate answer: </span>
                {check.candidateAnswer}
              </p>
              <p className="mt-1 text-sm text-slate-500">{check.note}</p>
            </div>
          ))}
        </div>
      </BriefSection>

      <BriefSection title="First-screen questions" icon={FileQuestion}>
        <ol className="space-y-2 text-sm leading-6 text-slate-650">
          {candidate.brief.firstScreenQuestions.map((question, index) => (
            <li key={question} className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-800">
                {index + 1}
              </span>
              <span>{question}</span>
            </li>
          ))}
        </ol>
      </BriefSection>

      <div className="grid gap-4 xl:grid-cols-2">
        <BriefSection title="One concern to test" icon={AlertTriangle}>
          <p className="text-sm leading-6 text-slate-650">{candidate.brief.concernToTest}</p>
        </BriefSection>
        <BriefSection title="Reason to still interview" icon={ThumbsUp}>
          <p className="text-sm leading-6 text-slate-650">{candidate.brief.reasonToStillInterview}</p>
        </BriefSection>
      </div>

      <BriefSection title="Suggested first-screen focus" icon={ClipboardCheck}>
        <p className="text-sm leading-6 text-slate-650">{candidate.brief.suggestedNextStep}</p>
      </BriefSection>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-base font-semibold text-slate-950">Application context</h3>
        <div className="mt-4 grid gap-4 xl:grid-cols-2">
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
    </aside>
  )
}
