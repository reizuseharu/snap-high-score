import {LeaderboardProps} from "../models/LeaderboardProps"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const SiteReportLeaderboard = (props: LeaderboardProps) => {
  return BaseHighScoreLeaderboard(props.scoreAttacks)
}
