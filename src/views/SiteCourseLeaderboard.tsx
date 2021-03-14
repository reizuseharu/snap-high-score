import {BaseHighScoreLeaderboard} from "@components/BaseHighScoreLeaderboard"
import {LeaderboardProps} from "@models/LeaderboardProps"

export const SiteCourseLeaderboard = (props: LeaderboardProps) => {
  return BaseHighScoreLeaderboard(props.scoreAttacks, props.isLoading)
}
