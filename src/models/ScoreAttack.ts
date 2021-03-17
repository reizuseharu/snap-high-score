import {ScoreParts} from "@models/ScoreParts"
import {OptionalString} from "@utils/constants"

export interface ScoreAttack {
  id?: string
  attacker: string
  score: number
  scoreParts?: ScoreParts
  submittedOn: string
  platform: string
  proofLink?: OptionalString
  isVerified: boolean
  notes?: OptionalString
}
