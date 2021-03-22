import {OptionalString} from "@utils/constants"

export interface ApiScoreAttack {
  id?: string
  userName: string
  totalScore: number
  special: number
  size: number
  pose: number
  isTechnique: boolean
  samePokemon: number
  submittedOn: number[]
  region: string
  console: string
  proof: string | null
  isVerified: boolean
  notes?: OptionalString
}
