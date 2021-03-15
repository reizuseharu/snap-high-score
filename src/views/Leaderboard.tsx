/* eslint-disable */
import {CategoryButtonGroup} from "@components/view/CategoryButtonGroup"
import {ConsoleButtonGroup} from "@components/view/ConsoleButtonGroup"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import {Autocomplete} from "@material-ui/lab"
import {Console} from "@models/Console"
import {LeaderboardType} from "@models/LeaderboardType"
import {ScoreAttack} from "@models/ScoreAttack"
import {Styles} from "@utils/styles"
import {toCamelCase, toTitleCase} from "@utils/utility"

import {HighScoreLeaderboard} from "@components/view/HighScoreLeaderboard"
import {Navbar} from "@components/view/Navbar"
import React, {useEffect, useState} from "react"
import {useHistory, useLocation} from "react-router"
import * as qs from "query-string"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
)

interface Query {
  variant?: string
  challenge?: string
  gameConsole?: string
}

export const Leaderboard = () => {
  const classes = useStyles()

  const history = useHistory()
  const location = useLocation()

  const searchParams: Query = qs.parse(location.search)
  const defaultType = searchParams.variant
  const defaultChallenge = searchParams.challenge
  const defaultConsole = searchParams.gameConsole

  const [open, setOpen] = useState<boolean>(false)
  const [type, setType] = useState<LeaderboardType>(defaultType as LeaderboardType ?? LeaderboardType.POKEMON)
  const [generalRules, setGeneralRules] = useState<Map<string, string[]>>(new Map())
  const [allCategoryRules, setAllCategoryRules] = useState<Map<string, string[]>>(new Map())
  const [scoreAttacks, setScoreAttacks] = useState<ScoreAttack[]>([])
  const [attackVariants, setAttackVariants] = useState<Map<string, string[]>>(new Map())
  const [attackSubVariants, setAttackSubVariants] = useState<string[]>([])
  const [attackSubVariant, setAttackSubVariant] = useState<string | null>(defaultChallenge ?? "Bulbasaur")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [gameConsole, setGameConsole] = useState<Console>(defaultConsole as Console ?? Console.N64)

  useEffect(() => {
    fetch('data/generalRules.json')
      .then(result => result.json())
      .then(generalRules_ => {setGeneralRules(new Map(Object.entries(generalRules_)))})
  }, [])

  useEffect(() => {
    fetch('data/categoryRules.json')
      .then(result => result.json())
      .then(allCategoryRules_ => {setAllCategoryRules(new Map(Object.entries(allCategoryRules_)))})
  }, [])

  useEffect(() => {
    const typeName = toCamelCase(type)
    fetch(`data/${typeName}Leaderboard.json`)
      .then(result => result.json())
      .then(leaderboard => setScoreAttacks(leaderboard))
  }, [])

  useEffect(() => {
    fetch('data/attackVariants.json')
      .then(result => result.json())
      .then(attackVariants_ => setAttackVariants(new Map<string, string[]>(Object.entries(attackVariants_))))
  }, [])

  useEffect(() => {
    const typeName = toCamelCase(type)
    fetch(`data/${typeName}Leaderboard.json`)
      .then(result => result.json())
      .then(leaderboard => setScoreAttacks(leaderboard))
      .finally(() => setIsLoading(false))
      .finally(() => setAttackSubVariants(attackVariants.get(type) ?? []))
      .finally(() => setAttackSubVariant(null))
      .finally(() => history.replace({ search: `?variant=${type}&challenge=${attackSubVariant}&console=${gameConsole}`}))
  }, [type, attackVariants])

  // ! Fix silent failure
  useEffect(() => {
    const typeName = toCamelCase(type)
    fetch(`data/${typeName}-${attackSubVariant}-${gameConsole}-Leaderboard.json`)
      .then(result => result.json())
      .then(leaderboard => setScoreAttacks(leaderboard))
      .finally(() => setIsLoading(false))
      .finally(() => history.replace({ search: `?variant=${type}&challenge=${attackSubVariant}&console=${gameConsole}`}))
      .catch((reason) => console.log(reason))
  }, [attackSubVariant, gameConsole])

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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

  return (
    <Box id="container" style={Styles.leaderboardBackground}>
      <Navbar/>
      <>
        <Box display="flex" justifyContent="center" borderRadius={16}>
          <Typography style={Styles.leaderboardTitle} gutterBottom>
            <strong>{toTitleCase(type).toUpperCase()} • {attackSubVariant?.toUpperCase()} • {gameConsole}</strong>
          </Typography>
        </Box>

        <Grid container alignItems="center">
          <Grid item xs={2}>
            <Autocomplete
              id="subvariant-search"
              value={attackSubVariant}
              onChange={onSubVariantChange}
              options={attackSubVariants}
              getOptionLabel={(option) => option}
              style={Styles.autocomplete}
              renderInput={(params) => <TextField {...params} size="small" label="SubVariant" variant="outlined" />}
            />
          </Grid>
          <Grid item xs={8}>
            <CategoryButtonGroup open={open} type={type} handleLeaderboardChange={handleLeaderboardChange} handleClickOpen={handleClickOpen} handleClose={handleClose} generalRules={generalRules} allCategoryRules={allCategoryRules}/>
            <ConsoleButtonGroup gameConsole={gameConsole} handleConsoleChange={handleConsoleChange}/>
          </Grid>
          <Grid item xs={2}/>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <HighScoreLeaderboard scoreAttacks={scoreAttacks} isLoading={isLoading}/>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </>
    </Box>
  )
}
