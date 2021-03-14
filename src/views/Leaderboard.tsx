/* eslint-disable */
import background from "@assets/img/background.png"
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
import {LeaderboardType} from "@models/LeaderboardType"
import {ScoreAttack} from "@models/ScoreAttack"
import {toCamelCase, toTitleCase} from "@utils/utility"

import {HighScoreLeaderboard} from "@views/HighScoreLeaderboard"
import {Navbar} from "@views/Navbar"
import React, {useEffect, useState} from "react"
import {useHistory, useLocation} from "react-router"
import * as qs from "query-string"

const buttonStyle = {
  minWidth: 50,
  maxHeight: 30,
  backgroundColor: "transparent"
}

const activeButtonStyle = {
  minWidth: 50,
  maxHeight: 30,
  backgroundColor: "rgba(250, 0, 0, 0.7)"
}

const rulesButtonStyle = {
  minWidth: 50,
  maxHeight: 30
}

const autocompleteStyle = {
  minWidth: 200,
  height: 30
}

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
  const [gameConsole, setGameConsole] = useState<string>(defaultConsole ?? "N64")

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
    fetch(`data/${typeName}-${attackSubVariant}-Leaderboard.json`)
      .then(result => result.json())
      .then(leaderboard => setScoreAttacks(leaderboard))
      .finally(() => setIsLoading(false))
      .finally(() => history.replace({ search: `?variant=${type}&challenge=${attackSubVariant}&console=${gameConsole}`}))
      .catch((reason) => console.log(reason))
  }, [attackSubVariant])

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleLeaderboardChange = (type: LeaderboardType) => {
    setType(type)
    setIsLoading(true)
  }

  return (
    <Box id="container" style={{
      backgroundImage: `url(${background})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "500vh",
      backgroundRepeat: "repeat"
    }}>
      <Navbar/>
      <Box>
        <Box display="flex" justifyContent="center" borderRadius={16}>
          <Typography style={{fontFamily: "Roboto", fontSize: 36, color: "#FFFFFF"}} gutterBottom>
            <strong>{toTitleCase(type).toUpperCase()} • {attackSubVariant?.toUpperCase()} • {gameConsole.toUpperCase()}</strong>
          </Typography>
        </Box>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <Autocomplete
              id="combo-box-demo"
              value={attackSubVariant}
              onChange={(event: any, attackSubVariant_: string | null) => {
                setAttackSubVariant(attackSubVariant_)
                setIsLoading(true)
              }}
              options={attackSubVariants}
              getOptionLabel={(option) => option}
              style={autocompleteStyle}
              renderInput={(params) => <TextField {...params} size="small" label="SubVariant" variant="outlined" />}
            />
          </Grid>
          <Grid item xs={8}>
            <ButtonGroup aria-label="button group">
              <Button size="small" disabled={type === LeaderboardType.POKEMON } style={type === LeaderboardType.POKEMON ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.POKEMON)}}>Pokemon</Button>
              <Button size="small" disabled={type === LeaderboardType.REPORT_SCORE } style={type === LeaderboardType.REPORT_SCORE ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.REPORT_SCORE)}}>Report Score</Button>
              <Button size="small" disabled={type === LeaderboardType.COURSE } style={type === LeaderboardType.COURSE ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.COURSE)}}>Course</Button>
              <Button size="small" disabled={type === LeaderboardType.CHALLENGE } style={type === LeaderboardType.CHALLENGE ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.CHALLENGE)}}>Challenge</Button>
              <Button disabled size="small" style={type === LeaderboardType.SITE_COURSE ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.SITE_COURSE)}}>Site Course</Button>
              <Button disabled size="small" style={type === LeaderboardType.SITE_REPORT ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.SITE_REPORT)}}>Site Report</Button>
              <Button size="small" disabled={type === LeaderboardType.TIME_ATTACK } style={type == LeaderboardType.TIME_ATTACK ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.TIME_ATTACK)}}>Time Attack</Button>
              <Button variant="contained" size="small" style={rulesButtonStyle} color="primary" onClick={handleClickOpen}>Rules</Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"General"}</DialogTitle>
                <DialogContent dividers>
                  {generalRules.get("rules")?.map(rule => {
                    return (
                      <Typography gutterBottom>
                        {rule}
                      </Typography>
                    )
                  })}
                </DialogContent>
                <DialogTitle id="alert-dialog-title">{"Category"}</DialogTitle>
                <DialogContent dividers>
                  {allCategoryRules.get(type)?.map(rule => {
                    return (
                      <Typography gutterBottom>
                        {rule}
                      </Typography>
                    )
                  })}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </ButtonGroup>
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
      </Box>
    </Box>
  )
}
