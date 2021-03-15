import {BaseHighScoreLeaderboard} from "@components/view/BaseHighScoreLeaderboard"
import {LeaderboardProps} from "@models/LeaderboardProps"

export const HighScoreLeaderboard = (props: LeaderboardProps) => BaseHighScoreLeaderboard(props.scoreAttacks, props.isLoading)
