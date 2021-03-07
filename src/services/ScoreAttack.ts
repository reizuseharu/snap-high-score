import {OptionalString} from "../utilities/constants"

export interface ScoreAttack {
  attacker: string
  score: number
  submittedOn: string
  platform: string
  proofLink?: OptionalString
  isVerified: boolean
}
