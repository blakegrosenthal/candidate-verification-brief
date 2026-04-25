import type {
  EvidenceStrength,
  InstructionFollowing,
  Signal,
  SuggestedNextStep,
} from '../types'

export type BadgeTone = 'green' | 'amber' | 'red' | 'slate' | 'blue' | 'violet'

export function signalTone(value: Signal): BadgeTone {
  if (value === 'High') return 'green'
  if (value === 'Medium') return 'amber'
  return 'slate'
}

export function riskTone(value: Signal): BadgeTone {
  if (value === 'High') return 'red'
  if (value === 'Medium') return 'amber'
  return 'green'
}

export function evidenceTone(value: EvidenceStrength): BadgeTone {
  if (value === 'Strong') return 'green'
  if (value === 'Mixed') return 'amber'
  return 'red'
}

export function instructionTone(value: InstructionFollowing): BadgeTone {
  if (value === 'Good') return 'green'
  if (value === 'Partial') return 'amber'
  return 'red'
}

export function nextStepTone(value: SuggestedNextStep): BadgeTone {
  if (value === 'Strong first-screen candidate') return 'blue'
  if (value === 'Quick verification screen') return 'violet'
  if (value === 'Manual review') return 'amber'
  return 'slate'
}
