/* eslint-disable */
import {LeaderboardType} from "../models/LeaderboardType"
import background from "../assets/img/background.png"
import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from "@material-ui/core"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import React, {useEffect, useState} from "react"
import Typography from '@material-ui/core/Typography'

import {ChallengeLeaderboard} from "./ChallengeLeaderboard"
import {CourseLeaderboard} from "./CourseLeaderboard"
import {PokemonLeaderboard} from "./PokemonLeaderboard"
import {ReportLeaderboard} from "./ReportLeaderboard"
import {SiteCourseLeaderboard} from "./SiteCourseLeaderboard"
import {SiteReportLeaderboard} from "./SiteReportLeaderboard"
import {TimeAttackLeaderboard} from "./TimeAttackLeaderboard"
import {Navbar} from "./Navbar"

const buttonStyle = {
  minWidth: 50
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
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(LeaderboardType.POKEMON)
  const [generalRules, setGeneralRules] = useState<Map<String, String[]>>(new Map())
  const [allCategoryRules, setAllCategoryRules] = useState<Map<String, String[]>>(new Map())

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

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLeaderboardChange = (type: LeaderboardType) => {
    setType(type)
  }

  return (
    <Box id="container" style={{
      backgroundImage: `url(${background})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "200%",
      backgroundRepeat: "repeat"
    }}>
      <Navbar/>
      <Box>
        <Grid container alignItems="center" style={{marginTop: "3%"}}>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <ButtonGroup aria-label="button group">
              <Button size="small" style={buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.POKEMON)}}>Pokemon</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.REPORT_SCORE)}}>Report Score</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.COURSE)}}>Course</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.CHALLENGE)}}>Challenge</Button>
              <Button disabled size="small" style={buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.SITE_COURSE)}}>Site Course</Button>
              <Button disabled size="small" style={buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.SITE_REPORT)}}>Site Report</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleLeaderboardChange(LeaderboardType.TIME_ATTACK)}}>Time Attack</Button>
              <Button variant="contained" size="small" style={buttonStyle} color="primary" onClick={handleClickOpen}>Rules</Button>
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
            { LeaderboardType.POKEMON === type && <PokemonLeaderboard/> }
            { LeaderboardType.REPORT_SCORE === type && <ReportLeaderboard/> }
            { LeaderboardType.COURSE === type && <CourseLeaderboard/> }
            { LeaderboardType.CHALLENGE === type && <ChallengeLeaderboard/> }
            { LeaderboardType.SITE_COURSE === type && <SiteCourseLeaderboard/> }
            { LeaderboardType.SITE_REPORT === type && <SiteReportLeaderboard/> }
            { LeaderboardType.TIME_ATTACK === type && <TimeAttackLeaderboard/> }
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Box>
    </Box>
  )
}
