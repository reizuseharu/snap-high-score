import {ScoreAttack} from "../services/ScoreAttack"

export interface LeaderboardProps {
  location: any
  history: any
  match: any
  scoreAttacks?: Array<ScoreAttack>
}
