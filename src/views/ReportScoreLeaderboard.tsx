import {LeaderboardProps} from "@models/LeaderboardProps"
import {BaseHighScoreLeaderboard} from "@components/BaseHighScoreLeaderboard"

export const ReportScoreLeaderboard = (props: LeaderboardProps) => {
  return BaseHighScoreLeaderboard(props.scoreAttacks, props.isLoading)
}
