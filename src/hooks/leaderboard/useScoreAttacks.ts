import {ApiScoreAttack} from "@models/ApiScoreAttack"
import {LeaderboardType} from "@models/LeaderboardType"
import {toCamelCase} from "@utils/utility"
import axios from "axios"
import {Dispatch, SetStateAction, useEffect} from "react"

export const useScoreAttacks = (type: LeaderboardType, setScoreAttacks: Dispatch<SetStateAction<ApiScoreAttack[]>>) => {
  useEffect(() => {
    const typeName = toCamelCase(type)
    axios.get(`http://hs-pkmnsnap.ngrok.io/scoreAttack`)
      .then(result => result.data)
      .then(leaderboard => {setScoreAttacks(leaderboard)})
  }, [type, setScoreAttacks])
}
