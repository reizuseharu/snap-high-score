/* eslint-disable */
import background from "@assets/img/background.png"
import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField
} from "@material-ui/core"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import {Autocomplete} from "@material-ui/lab"
import {LeaderboardType} from "@models/LeaderboardType"
import {ScoreAttack} from "@models/ScoreAttack"
import {toCamelCase} from "@utils/utility"

import {ChallengeLeaderboard} from "@views/ChallengeLeaderboard"
import {CourseLeaderboard} from "@views/CourseLeaderboard"
import {Navbar} from "@views/Navbar"
import {PokemonLeaderboard} from "@views/PokemonLeaderboard"
import {ReportScoreLeaderboard} from "@views/ReportScoreLeaderboard"
import {SiteCourseLeaderboard} from "@views/SiteCourseLeaderboard"
import {SiteReportLeaderboard} from "@views/SiteReportLeaderboard"
import {TimeAttackLeaderboard} from "@views/TimeAttackLeaderboard"
import React, {useEffect, useState} from "react"

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

export const Leaderboard = () => {
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)
  const [type, setType] = useState<LeaderboardType>(LeaderboardType.POKEMON)
  const [generalRules, setGeneralRules] = useState<Map<string, string[]>>(new Map())
  const [allCategoryRules, setAllCategoryRules] = useState<Map<string, string[]>>(new Map())
  const [scoreAttacks, setScoreAttacks] = useState<ScoreAttack[]>([])
  const [attackVariants, setAttackVariants] = useState<Map<string, string[]>>(new Map())
  const [attackSubVariants, setAttackSubVariants] = useState<string[]>([])
  const [value, setValue] = useState<string | null>(null) // - Fix naming for this
  const [isLoading, setIsLoading] = useState(true)

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
      .finally(() => setIsLoading(false))
  }, [type])

  useEffect(() => {
    fetch('data/attackVariants.json')
      .then(result => result.json())
      .then(attackVariants_ => setAttackVariants(new Map<string, string[]>(Object.entries(attackVariants_))))
  }, [])

  useEffect(() => {
    console.log(value)
  }, [value])

  useEffect(() => {
    setAttackSubVariants(attackVariants.get(type) ?? [])
  }, [type])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
        <Grid container alignItems="center" style={{marginTop: "3%"}}>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <ButtonGroup aria-label="button group">
              <Button size="small" style={type == LeaderboardType.POKEMON ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.POKEMON)}}>Pokemon</Button>
              <Button size="small" style={type == LeaderboardType.REPORT_SCORE ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.REPORT_SCORE)}}>Report Score</Button>
              <Button size="small" style={type == LeaderboardType.COURSE ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.COURSE)}}>Course</Button>
              <Button size="small" style={type == LeaderboardType.CHALLENGE ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.CHALLENGE)}}>Challenge</Button>
              <Button disabled size="small" style={type == LeaderboardType.SITE_COURSE ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.SITE_COURSE)}}>Site Course</Button>
              <Button disabled size="small" style={type == LeaderboardType.SITE_REPORT ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.SITE_REPORT)}}>Site Report</Button>
              <Button size="small" style={type == LeaderboardType.TIME_ATTACK ? activeButtonStyle: buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.TIME_ATTACK)}}>Time Attack</Button>
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
          <Grid item xs={2}>
            <Autocomplete
              id="combo-box-demo"
              onChange={(event: any, newValue: string | null) => {
                setValue(newValue)
              }}
              options={attackSubVariants}
              getOptionLabel={(option) => option}
              style={autocompleteStyle}
              renderInput={(params) => <TextField {...params} size="small" label="SubVariant" variant="outlined" />}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs={2}/>
          <Grid item xs={8}>
            { LeaderboardType.POKEMON === type && <PokemonLeaderboard scoreAttacks={scoreAttacks} isLoading={isLoading}/> }
            { LeaderboardType.REPORT_SCORE === type && <ReportScoreLeaderboard scoreAttacks={scoreAttacks} isLoading={isLoading}/> }
            { LeaderboardType.COURSE === type && <CourseLeaderboard scoreAttacks={scoreAttacks} isLoading={isLoading}/> }
            { LeaderboardType.CHALLENGE === type && <ChallengeLeaderboard scoreAttacks={scoreAttacks} isLoading={isLoading}/> }
            { LeaderboardType.SITE_COURSE === type && <SiteCourseLeaderboard scoreAttacks={scoreAttacks} isLoading={isLoading}/> }
            { LeaderboardType.SITE_REPORT === type && <SiteReportLeaderboard scoreAttacks={scoreAttacks} isLoading={isLoading}/> }
            { LeaderboardType.TIME_ATTACK === type && <TimeAttackLeaderboard scoreAttacks={scoreAttacks} isLoading={isLoading}/> }
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Box>
    </Box>
  )
}
