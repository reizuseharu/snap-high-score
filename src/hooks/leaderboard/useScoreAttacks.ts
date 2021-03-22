import {ApiScoreAttack} from "@models/ApiScoreAttack"
import {LeaderboardType} from "@models/LeaderboardType"
import {toCamelCase} from "@utils/utility"
import axios from "axios"
import {Dispatch, SetStateAction, useEffect} from "react"

export const useScoreAttacks = (type: LeaderboardType, setScoreAttacks: Dispatch<SetStateAction<ApiScoreAttack[]>>) => {
  useEffect(() => {
    const typeName = toCamelCase(type)
    axios.get(`https://hs-pkmnsnap.ngrok.io/scoreAttack`)
      .then(result => result.data)
      .then((leaderboard: ApiScoreAttack[]) => {
        const users = new Set()
        const topLeaderboard = leaderboard.filter((apiScoreAttack) => {
          const userName = apiScoreAttack.userName
          if (!users.has(userName)) {
            users.add(userName)
            return true
          }

          return false
        })
        setScoreAttacks(topLeaderboard)
      })
  }, [type, setScoreAttacks])
}
