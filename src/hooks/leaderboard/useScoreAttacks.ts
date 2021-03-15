import {LeaderboardType} from "@models/LeaderboardType"
import {ScoreAttack} from "@models/ScoreAttack"
import {toCamelCase} from "@utils/utility"
import {Dispatch, SetStateAction, useEffect} from "react"

export const useScoreAttacks = (type: LeaderboardType, setScoreAttacks: Dispatch<SetStateAction<ScoreAttack[]>>) => {
  useEffect(() => {
    const typeName = toCamelCase(type)
    fetch(`data/${typeName}Leaderboard.json`)
      .then(result => result.json())
      .then(leaderboard => {setScoreAttacks(leaderboard)})
  }, [type, setScoreAttacks])
}
