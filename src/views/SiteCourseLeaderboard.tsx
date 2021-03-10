import {useEffect, useState} from "react"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const SiteCourseLeaderboard = () => {
  const [scoreAttacks, setScoreAttacks] = useState([])

  useEffect(() => {
    fetch('data/siteCourseLeaderboard.json')
      .then(result => result.json())
      .then(siteCourseLeaderboard => setScoreAttacks(siteCourseLeaderboard))
  }, [])

  return BaseHighScoreLeaderboard(scoreAttacks)
}
