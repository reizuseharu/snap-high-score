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
import React, {useState} from "react"
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
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(LeaderboardType.POKEMON)
  const [shouldShowLeaderboardPokemon, setShouldShowLeaderboardPokemon] = useState(true)
  const [shouldShowLeaderboardReportScore, setShouldShowLeaderboardReportScore] = useState(false)
  const [shouldShowLeaderboardCourse, setShouldShowLeaderboardCourse] = useState(false)
  const [shouldShowLeaderboardChallenge, setShouldShowLeaderboardChallenge] = useState(false)
  const [shouldShowLeaderboardSiteCourse, setShouldShowLeaderboardSiteCourse] = useState(false)
  const [shouldShowLeaderboardSiteReport, setShouldShowLeaderboardSiteReport] = useState(false)
  const [shouldShowLeaderboardTimeAttack, setShouldShowLeaderboardTimeAttack] = useState(false)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const popOpen = Boolean(anchorEl)
  const id = popOpen ? 'simple-popover' : undefined

  const showLeaderboardVariant = (type: LeaderboardType) => {
    setShouldShowLeaderboardPokemon(LeaderboardType.POKEMON === type)
    setShouldShowLeaderboardCourse(LeaderboardType.COURSE === type)
    setShouldShowLeaderboardChallenge(LeaderboardType.CHALLENGE === type)
    setShouldShowLeaderboardReportScore(LeaderboardType.REPORT_SCORE === type)
    setShouldShowLeaderboardSiteCourse(LeaderboardType.SITE_COURSE_SCORE === type)
    setShouldShowLeaderboardSiteReport(LeaderboardType.SITE_REPORT_SCORE === type)
    setShouldShowLeaderboardTimeAttack(LeaderboardType.TIME_ATTACK === type)
  }

  const handleChange = (type: LeaderboardType) => {
    setType(type)
    showLeaderboardVariant(type)
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
              <Button size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.POKEMON)}}>Pokemon</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.REPORT_SCORE)}}>Report Score</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.COURSE)}}>Course</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.CHALLENGE)}}>Challenge</Button>
              <Button disabled size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.SITE_COURSE_SCORE)}}>Site Course</Button>
              <Button disabled size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.SITE_REPORT_SCORE)}}>Site Report</Button>
              <Button disabled size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.TIME_ATTACK)}}>Time Attack</Button>
              <Button variant="contained" size="small" style={buttonStyle} color="primary" onClick={handleClickOpen}>Rules</Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Rules"}</DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  </Typography>
                  <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                  </Typography>
                  <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                    auctor fringilla.
                  </Typography>
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
            { shouldShowLeaderboardPokemon && <PokemonLeaderboard/> }
            { shouldShowLeaderboardReportScore && <ReportLeaderboard/> }
            { shouldShowLeaderboardCourse && <CourseLeaderboard/> }
            { shouldShowLeaderboardChallenge && <ChallengeLeaderboard/> }
            { shouldShowLeaderboardSiteCourse && <SiteCourseLeaderboard/> }
            { shouldShowLeaderboardSiteReport && <SiteReportLeaderboard/> }
            { shouldShowLeaderboardTimeAttack && <TimeAttackLeaderboard/> }
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Box>
    </Box>
  )
}
