import {useEffect, useState} from "react"
import {BaseHighScoreLeaderboard} from "../components/BaseHighScoreLeaderboard"

export const CourseLeaderboard = () => {
  const [scoreAttacks, setScoreAttacks] = useState([])

  useEffect(() => {
    fetch('data/courseLeaderboard.json')
      .then(result => result.json())
      .then(courseLeaderboard => setScoreAttacks(courseLeaderboard))
  }, [])

  return BaseHighScoreLeaderboard(scoreAttacks)
}
