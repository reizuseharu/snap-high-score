import {ScoreParts} from "./ScoreParts"
import {OptionalString} from "../utilities/constants"

export interface ScoreAttack {
  attacker: string
  score: number
  scoreParts?: ScoreParts
  submittedOn: string
  platform: string
  proofLink?: OptionalString
  isVerified: boolean
}
