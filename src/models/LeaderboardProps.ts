import {ApiScoreAttack} from "@models/ApiScoreAttack"

export interface LeaderboardProps {
  scoreAttacks: ApiScoreAttack[]
  isLoading: boolean
}
