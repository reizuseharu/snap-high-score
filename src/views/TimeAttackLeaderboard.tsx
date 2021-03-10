import {useEffect, useState} from "react"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const TimeAttackLeaderboard = () => {
  const [scoreAttacks, setScoreAttacks] = useState([])

  useEffect(() => {
    fetch('data/timeAttackLeaderboard.json')
      .then(result => result.json())
      .then(timeAttackLeaderboard => setScoreAttacks(timeAttackLeaderboard))
  }, [])

  return BaseHighScoreLeaderboard(scoreAttacks)
}
