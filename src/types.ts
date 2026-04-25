export type Signal = 'High' | 'Medium' | 'Low'
export type EvidenceStrength = 'Strong' | 'Mixed' | 'Weak'
export type InstructionFollowing = 'Good' | 'Partial' | 'Issue'
export type SuggestedNextStep =
  | 'Interview'
  | 'Quick screen'
  | 'Review manually'
  | 'Do not prioritize'

export type InstructionCheck = {
  instruction: string
  candidateAnswer: string
  flag: InstructionFollowing
  note: string
}

export type Candidate = {
  id: string
  name: string
  currentRole: string
  background: string
  resumeHighlights: string[]
  applicationAnswer: string
  screeningResponses: {
    salary: string
    companyInterest: string
    salesResult: string
  }
  skills: string[]
  companies: string[]
  fitSignal: Signal
  verificationRisk: Signal
  evidenceStrength: EvidenceStrength
  genericAnswerRisk: Signal
  instructionFollowing: InstructionFollowing
  suggestedNextStep: SuggestedNextStep
  brief: {
    overallRead: string
    credible: string[]
    claimsToVerify: string[]
    gapsOrInconsistencies: string[]
    genericAnswerNotes: string[]
    instructionChecks: InstructionCheck[]
    firstScreenQuestions: string[]
    concernToTest: string
    reasonToStillInterview: string
    suggestedNextStep: string
  }
}
