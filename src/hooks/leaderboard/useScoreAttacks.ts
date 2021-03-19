import {LeaderboardType} from "@models/LeaderboardType"
import {ScoreAttack} from "@models/ScoreAttack"
import {toCamelCase} from "@utils/utility"
import axios from "axios"
import {Dispatch, SetStateAction, useEffect} from "react"

export const useScoreAttacks = (type: LeaderboardType, setScoreAttacks: Dispatch<SetStateAction<ScoreAttack[]>>) => {
  useEffect(() => {
    const typeName = toCamelCase(type)
    axios.get(`data/${typeName}Leaderboard.json`)
      .then(result => result.data)
      .then(leaderboard => {setScoreAttacks(leaderboard)})
  }, [type, setScoreAttacks])
}
