/* eslint-disable */
import {LeaderboardType} from "../services/LeaderboardType"
import background from "../assets/img/background.png"
import {Box, Button, ButtonGroup, Grid} from "@material-ui/core"
import React from 'react'

import ChallengeLeaderboard from "./ChallengeLeaderboard"
import CourseLeaderboard from "./CourseLeaderboard"
import PokemonLeaderboard from "./PokemonLeaderboard"
import ReportLeaderboard from "./ReportLeaderboard"
import SiteReportLeaderboard from "./SiteReportLeaderboard"
import TimeAttackLeaderboard from "./TimeAttackLeaderboard"
import {RouteComponentProps} from "react-router"
import Navbar from "./Navbar"

interface Props {
  classes: any
  location: any
  history: any
  match: any
}

interface State {
  value: LeaderboardType
  shouldShowLeaderboardPokemon: boolean
  shouldShowLeaderboardReportScore: boolean
  shouldShowLeaderboardCourse: boolean
  shouldShowLeaderboardChallenge: boolean
  shouldShowLeaderboardSiteReportScore: boolean
  shouldShowLeaderboardTimeAttack: boolean
}

const buttonStyle = {
  minWidth: 50
}

class Leaderboard extends React.Component<Props & RouteComponentProps, State> {
  refs: any
  constructor(props: Props) {
    super(props)
    this.state = {
      value: LeaderboardType.POKEMON,
      shouldShowLeaderboardPokemon: true,
      shouldShowLeaderboardReportScore: false,
      shouldShowLeaderboardCourse: false,
      shouldShowLeaderboardChallenge: false,
      shouldShowLeaderboardSiteReportScore: false,
      shouldShowLeaderboardTimeAttack: false
    }

    this.showComponent = this.showComponent.bind(this)
  }

  showComponent(type: LeaderboardType) {
    this.setState({
      shouldShowLeaderboardPokemon: LeaderboardType.POKEMON === type,
      shouldShowLeaderboardCourse: LeaderboardType.COURSE === type,
      shouldShowLeaderboardChallenge: LeaderboardType.CHALLENGE === type,
      shouldShowLeaderboardReportScore: LeaderboardType.REPORT_SCORE === type,
      shouldShowLeaderboardSiteReportScore: LeaderboardType.SITE_REPORT_SCORE === type,
      shouldShowLeaderboardTimeAttack: LeaderboardType.TIME_ATTACK === type
    })
  }

  componentDidUpdate(e: any) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0
    }
  }

  handleChange = (value: LeaderboardType) => {
    this.setState({ value: value })
    this.showComponent(value)
  }

  render() {
    const {
      shouldShowLeaderboardPokemon,
      shouldShowLeaderboardReportScore,
      shouldShowLeaderboardCourse,
      shouldShowLeaderboardChallenge,
      shouldShowLeaderboardSiteReportScore,
      shouldShowLeaderboardTimeAttack
    } = this.state

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
                <Button size="small" style={buttonStyle} onClick={() => {this.handleChange(LeaderboardType.POKEMON)}}>Pokemon</Button>
                <Button size="small" style={buttonStyle} onClick={() => {this.handleChange(LeaderboardType.REPORT_SCORE)}}>Report Score</Button>
                <Button size="small" style={buttonStyle} onClick={() => {this.handleChange(LeaderboardType.COURSE)}}>Course</Button>
                <Button size="small" style={buttonStyle} onClick={() => {this.handleChange(LeaderboardType.CHALLENGE)}}>Challenge</Button>
                <Button disabled size="small" style={buttonStyle} onClick={() => {this.handleChange(LeaderboardType.SITE_REPORT_SCORE)}}>Site Report</Button>
                <Button disabled size="small" style={buttonStyle} onClick={() => {this.handleChange(LeaderboardType.TIME_ATTACK)}}>Time Attack</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={4}/>
          </Grid>

          <Grid container alignItems="center">
            <Grid item xs={2}/>
            <Grid item xs={8}>
              { shouldShowLeaderboardPokemon && <PokemonLeaderboard location={this.props.location} history={this.props.history} match={this.props.match}/> }
              { shouldShowLeaderboardReportScore && <ReportLeaderboard location={this.props.location} history={this.props.history} match={this.props.match}/> }
              { shouldShowLeaderboardCourse && <CourseLeaderboard location={this.props.location} history={this.props.history} match={this.props.match}/> }
              { shouldShowLeaderboardChallenge && <ChallengeLeaderboard location={this.props.location} history={this.props.history} match={this.props.match}/> }
              { shouldShowLeaderboardSiteReportScore && <SiteReportLeaderboard location={this.props.location} history={this.props.history} match={this.props.match}/> }
              { shouldShowLeaderboardTimeAttack && <TimeAttackLeaderboard location={this.props.location} history={this.props.history} match={this.props.match}/> }
            </Grid>
            <Grid item xs={2}/>
          </Grid>
        </Box>
      </Box>
    )
  }
}

export default Leaderboard
