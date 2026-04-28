export type Signal = 'High' | 'Medium' | 'Low'
export type EvidenceStrength = 'Strong' | 'Mixed' | 'Weak'
export type InstructionFollowing = 'Complete' | 'Partial' | 'Issue'
export type SuggestedNextStep =
  | 'Ready for targeted screen'
  | 'Verification priority'
  | 'Manual review'
  | 'Role-alignment review'

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
