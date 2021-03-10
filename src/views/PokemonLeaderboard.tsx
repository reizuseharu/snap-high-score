import {useEffect, useState} from "react"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const PokemonLeaderboard = () => {
  const [scoreAttacks, setScoreAttacks] = useState([])

  useEffect(() => {
    fetch('data/pokemonLeaderboard.json')
      .then(result => result.json())
      .then(pokemonLeaderboard => setScoreAttacks(pokemonLeaderboard))
  }, [])

  return BaseHighScoreLeaderboard(scoreAttacks)
}
