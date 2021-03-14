import {BaseHighScoreLeaderboard} from "@components/BaseHighScoreLeaderboard"
import {LeaderboardProps} from "@models/LeaderboardProps"

export const SiteReportLeaderboard = (props: LeaderboardProps) => {
  return BaseHighScoreLeaderboard(props.scoreAttacks, props.isLoading)
}
