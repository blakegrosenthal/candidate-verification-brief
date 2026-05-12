import type {
  EvidenceStrength,
  InstructionFollowing,
  Signal,
} from '../types'

export type BadgeTone = 'green' | 'amber' | 'red' | 'slate' | 'blue' | 'violet'

export function signalTone(value: Signal): BadgeTone {
  if (value === 'High') return 'green'
  if (value === 'Medium') return 'amber'
  return 'slate'
}

export function clarificationNeedTone(value: Signal): BadgeTone {
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
  if (value === 'Complete') return 'green'
  if (value === 'Partial') return 'amber'
  return 'red'
}
