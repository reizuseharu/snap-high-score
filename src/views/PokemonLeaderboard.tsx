import {LeaderboardProps} from "../models/LeaderboardProps"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const PokemonLeaderboard = (props: LeaderboardProps) => {
  return BaseHighScoreLeaderboard(props.scoreAttacks)
}
