/* eslint-disable */
import {AdminQueue} from "@components/view/leaderboard/AdminQueue"
import {CategoryButtonGroup} from "@components/view/leaderboard/CategoryButtonGroup"
import {ConsoleButtonGroup} from "@components/view/leaderboard/ConsoleButtonGroup"
import {LeaderboardTitle} from "@components/view/leaderboard/LeaderboardTitle"
import {SubVariantSearch} from "@components/view/leaderboard/SubVariantSearch"

import {Navbar} from "@components/view/Navbar"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import {ApiScoreAttack} from "@models/ApiScoreAttack"
import {Console} from "@models/Console"
import {LeaderboardType} from "@models/LeaderboardType"
import {Styles} from "@utils/styles"
import {toCamelCase} from "@utils/utility"
import axios from "axios"
import * as qs from "query-string"
import React, {ChangeEvent, useEffect, useState} from "react"
import {useHistory, useLocation} from "react-router"
import {useAttackVariants} from "../hooks/leaderboard/useAttackVariants"
import {useScoreAttacks} from "../hooks/leaderboard/useScoreAttacks"

interface Query {
  variant?: string
  challenge?: string
  gameConsole?: string
}

export const Admin = () => {
  const history = useHistory()
  const location = useLocation()

  const searchParams: Query = qs.parse(location.search)
  const defaultType = searchParams.variant
  const defaultChallenge = searchParams.challenge
  const defaultConsole = searchParams.gameConsole

  const [type, setType] = useState<LeaderboardType>(defaultType as LeaderboardType ?? LeaderboardType.POKEMON)
  const [scoreAttacks, setScoreAttacks] = useState<ApiScoreAttack[]>([])
  const [attackVariants, setAttackVariants] = useState<Map<string, string[]>>(new Map())
  const [attackSubVariants, setAttackSubVariants] = useState<string[]>([])
  const [attackSubVariant, setAttackSubVariant] = useState<string | null>(defaultChallenge ?? "Bulbasaur")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [gameConsole, setGameConsole] = useState<Console>(defaultConsole as Console ?? Console.N64)

  const [adminUsername, setAdminUsername] = useState<string>()
  const [adminPassword, setAdminPassword] = useState<string>()

  useScoreAttacks(type, setScoreAttacks)
  useAttackVariants(setAttackVariants)

  useEffect(() => {
    const typeName = toCamelCase(type)
    axios.get(`https://hs-pkmnsnap.ngrok.io/scoreAttack/challenge/${attackSubVariant}`)
      .then(result => result.data)
      .then(leaderboard => setScoreAttacks(leaderboard))
      .finally(() => setIsLoading(false))
      .finally(() => setAttackSubVariants(attackVariants.get(type) ?? []))
      .finally(() => setAttackSubVariant(null))
      .finally(() => history.replace({ search: `?variant=${type}&challenge=${attackSubVariant}&console=${gameConsole}`}))
  }, [type, attackVariants])

  // ! Fix silent failure
  useEffect(() => {
    const typeName = toCamelCase(type)
    axios.get(`https://hs-pkmnsnap.ngrok.io/scoreAttack/challenge/${attackSubVariant}/console/${gameConsole}/notVerified`)
      .then(result => result.data)
      .then(leaderboard => setScoreAttacks(leaderboard))
      .finally(() => setIsLoading(false))
      .finally(() => history.replace({ search: `?variant=${type}&challenge=${attackSubVariant}&console=${gameConsole}`}))
      .catch((reason) => console.log(reason))
  }, [attackSubVariant, gameConsole])

  const handleLeaderboardChange = (type: LeaderboardType) => {
    setType(type)
    setIsLoading(true)
  }

  const onSubVariantChange = (event: any, attackSubVariant_: string | null) => {
    setAttackSubVariant(attackSubVariant_)
    setIsLoading(true)
  }

  const handleConsoleChange = (gameConsole: Console) => {
    setGameConsole(gameConsole)
    setIsLoading(true)
  }

  const onAdminUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setAdminUsername(event.target.value)
  const onAdminPasswordChange = (event: ChangeEvent<HTMLInputElement>) => setAdminPassword(event.target.value)

  return (
    <Box id="container" style={Styles.leaderboardBackground}>
      <Navbar/>
      <>
        <LeaderboardTitle type={type} attackSubVariant={attackSubVariant} gameConsole={gameConsole}/>

        <Grid container alignItems="center">
          <Grid item xs={2}>
            <TextField required id="standard-required" label="Admin Name" onChange={onAdminUsernameChange}/>
            <TextField
              id="standard-password-input"
              label="Admin Password"
              type="password"
              autoComplete="current-password"
              onChange={onAdminPasswordChange}
            />
          </Grid>
          <Grid item xs={8}>
            <CategoryButtonGroup type={type} handleLeaderboardChange={handleLeaderboardChange}/>
            <ConsoleButtonGroup gameConsole={gameConsole} handleConsoleChange={handleConsoleChange}/>
          </Grid>
          <Grid item xs={2}>
            <SubVariantSearch attackSubVariant={attackSubVariant} attackSubVariants={attackSubVariants} onSubVariantChange={onSubVariantChange}/>
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <AdminQueue scoreAttacks={scoreAttacks} isLoading={isLoading} adminUsername={adminUsername} adminPassword={adminPassword}/>
          </Grid>
          <Grid item xs={1}/>
        </Grid>
      </>
    </Box>
  )
}
