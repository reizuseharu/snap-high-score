import {useEffect, useState} from "react"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const SiteReportLeaderboard = () => {
  const [scoreAttacks, setScoreAttacks] = useState([])

  useEffect(() => {
    fetch('data/siteReportLeaderboard.json')
      .then(result => result.json())
      .then(siteReportLeaderboard => setScoreAttacks(siteReportLeaderboard))
  }, [])

  return BaseHighScoreLeaderboard(scoreAttacks)
}
