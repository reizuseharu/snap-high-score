import {LeaderboardProps} from "../models/LeaderboardProps"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const CourseLeaderboard = (props: LeaderboardProps) => {
  return BaseHighScoreLeaderboard(props.scoreAttacks, props.isLoading)
}
