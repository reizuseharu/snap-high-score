import {useEffect, useState} from "react"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const ChallengeLeaderboard = () => {
  const [scoreAttacks, setScoreAttacks] = useState([])

  useEffect(() => {
    fetch('data/challengeLeaderboard.json')
      .then(result => result.json())
      .then(challengeLeaderboard => setScoreAttacks(challengeLeaderboard))
  }, [])

  return BaseHighScoreLeaderboard(scoreAttacks)
}
