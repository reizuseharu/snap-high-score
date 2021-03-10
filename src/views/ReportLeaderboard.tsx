import {useEffect, useState} from "react"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const ReportLeaderboard = () => {
  const [scoreAttacks, setScoreAttacks] = useState([])

  useEffect(() => {
    fetch('data/reportLeaderboard.json')
      .then(result => result.json())
      .then(reportLeaderboard => setScoreAttacks(reportLeaderboard))
  }, [])

  return BaseHighScoreLeaderboard(scoreAttacks)
}
