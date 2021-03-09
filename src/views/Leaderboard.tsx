/* eslint-disable */
import {LeaderboardType} from "../services/LeaderboardType"
import background from "../assets/img/background.png"
import {Box, Button, ButtonGroup, Grid} from "@material-ui/core"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import React, {Props, useState} from "react"
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

import {ChallengeLeaderboard} from "./ChallengeLeaderboard"
import {CourseLeaderboard} from "./CourseLeaderboard"
import {PokemonLeaderboard} from "./PokemonLeaderboard"
import {ReportLeaderboard} from "./ReportLeaderboard"
import {SiteReportLeaderboard} from "./SiteReportLeaderboard"
import {TimeAttackLeaderboard} from "./TimeAttackLeaderboard"
import Navbar from "./Navbar"

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
  const [type, setType] = useState(LeaderboardType.POKEMON)
  const [shouldShowLeaderboardPokemon, setShouldShowLeaderboardPokemon] = useState(true)
  const [shouldShowLeaderboardReportScore, setShouldShowLeaderboardReportScore] = useState(false)
  const [shouldShowLeaderboardCourse, setShouldShowLeaderboardCourse] = useState(false)
  const [shouldShowLeaderboardChallenge, setShouldShowLeaderboardChallenge] = useState(false)
  const [shouldShowLeaderboardSiteReportScore, setShouldShowLeaderboardSiteReportScore] = useState(false)
  const [shouldShowLeaderboardTimeAttack, setShouldShowLeaderboardTimeAttack] = useState(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const showLeaderboardVariant = (type: LeaderboardType) => {
    setShouldShowLeaderboardPokemon(LeaderboardType.POKEMON === type)
    setShouldShowLeaderboardCourse(LeaderboardType.COURSE === type)
    setShouldShowLeaderboardChallenge(LeaderboardType.CHALLENGE === type)
    setShouldShowLeaderboardReportScore(LeaderboardType.REPORT_SCORE === type)
    setShouldShowLeaderboardSiteReportScore(LeaderboardType.SITE_REPORT_SCORE === type)
    setShouldShowLeaderboardTimeAttack(LeaderboardType.TIME_ATTACK === type)
  }

  const handleChange = (type: LeaderboardType) => {
    setType(type)
    showLeaderboardVariant(type)
  }

  // return (
  //   <Box>
  //     <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
  //       Open Popover
  //     </Button>
  //     <Popover
  //       id={id}
  //       open={open}
  //       anchorEl={anchorEl}
  //       onClose={handleClose}
  //       anchorOrigin={{
  //         vertical: 'bottom',
  //         horizontal: 'center',
  //       }}
  //       transformOrigin={{
  //         vertical: 'top',
  //         horizontal: 'center',
  //       }}
  //     >
  //       <Typography className={classes.typography}>The content of the Popover.</Typography>
  //     </Popover>
  //   </Box>
  // )

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
          <Grid item xs={6}>
            <ButtonGroup aria-label="button group">
              <Button size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.POKEMON)}}>Pokemon</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.REPORT_SCORE)}}>Report Score</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.COURSE)}}>Course</Button>
              <Button size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.CHALLENGE)}}>Challenge</Button>
              <Button disabled size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.SITE_REPORT_SCORE)}}>Site Report</Button>
              <Button disabled size="small" style={buttonStyle} onClick={() => {handleChange(LeaderboardType.TIME_ATTACK)}}>Time Attack</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={4}/>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs={2}/>
          <Grid item xs={8}>
            { shouldShowLeaderboardPokemon && <PokemonLeaderboard/> }
            { shouldShowLeaderboardReportScore && <ReportLeaderboard/> }
            { shouldShowLeaderboardCourse && <CourseLeaderboard/> }
            { shouldShowLeaderboardChallenge && <ChallengeLeaderboard/> }
            { shouldShowLeaderboardSiteReportScore && <SiteReportLeaderboard/> }
            { shouldShowLeaderboardTimeAttack && <TimeAttackLeaderboard/> }
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Box>
    </Box>
  )
}
