/* eslint-disable */
import {AppBar, Tab, Tabs} from "@material-ui/core"
import React from 'react'
// creates a beautiful scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

import image from '../assets/img/sidebar-2.jpg'
import {ChallengeLeaderboard} from "./ChallengeLeaderboard"
import PokemonLeaderboard from "./PokemonLeaderboard"
import { ReportLeaderboard } from "./ReportLeaderboard"
import {RouteComponentProps} from "react-router"
import Navbar from "./Navbar"

interface Props {
  classes: any
  location: any
  history: any
  match: any
}

interface State {
  value: number
  image: string
  color: string
  hasImage: boolean
  fixedClasses: string
  mobileOpen: boolean
  shouldShowLeaderboardPokemon: boolean
  shouldShowLeaderboardReportScore: boolean
  shouldShowLeaderboardCourse: boolean
  shouldShowLeaderboardChallenge: boolean
  shouldShowLeaderboardSiteReportScore: boolean
  shouldShowLeaderboardTimeAttack: boolean
}

class Leaderboard extends React.Component<Props & RouteComponentProps, State> {
  refs: any
  constructor(props: Props) {
    super(props)
    this.state = {
      image,
      value: 0,
      color: 'blue',
      hasImage: true,
      fixedClasses: 'dropdown show',
      mobileOpen: false,
      shouldShowLeaderboardPokemon: true,
      shouldShowLeaderboardReportScore: false,
      shouldShowLeaderboardCourse: false,
      shouldShowLeaderboardChallenge: false,
      shouldShowLeaderboardSiteReportScore: false,
      shouldShowLeaderboardTimeAttack: false
    }
    this.hideComponent = this.hideComponent.bind(this)
    this.showOtherComponent = this.showOtherComponent.bind(this)
    this.showComponent = this.showComponent.bind(this)
  }

  showComponent(index: number) {
    switch (index) {
      case 0:
        this.setState({ shouldShowLeaderboardPokemon: true })
        this.setState({ shouldShowLeaderboardReportScore: false })
        this.setState({ shouldShowLeaderboardCourse: false })
        this.setState({ shouldShowLeaderboardChallenge: false })
        this.setState({ shouldShowLeaderboardSiteReportScore: false })
        this.setState({ shouldShowLeaderboardTimeAttack: false })
        break
      case 1:
        this.setState({ shouldShowLeaderboardPokemon: false })
        this.setState({ shouldShowLeaderboardReportScore: true })
        this.setState({ shouldShowLeaderboardCourse: false })
        this.setState({ shouldShowLeaderboardChallenge: false })
        this.setState({ shouldShowLeaderboardSiteReportScore: false })
        this.setState({ shouldShowLeaderboardTimeAttack: false })
        break
      case 2:
        this.setState({ shouldShowLeaderboardPokemon: false })
        this.setState({ shouldShowLeaderboardReportScore: false })
        this.setState({ shouldShowLeaderboardCourse: true })
        this.setState({ shouldShowLeaderboardChallenge: false })
        this.setState({ shouldShowLeaderboardSiteReportScore: false })
        this.setState({ shouldShowLeaderboardTimeAttack: false })
        break
      case 3:
        this.setState({ shouldShowLeaderboardPokemon: false })
        this.setState({ shouldShowLeaderboardReportScore: false })
        this.setState({ shouldShowLeaderboardCourse: false })
        this.setState({ shouldShowLeaderboardChallenge: true })
        this.setState({ shouldShowLeaderboardSiteReportScore: false })
        this.setState({ shouldShowLeaderboardTimeAttack: false })
        break
      case 4:
        this.setState({ shouldShowLeaderboardPokemon: false })
        this.setState({ shouldShowLeaderboardReportScore: false })
        this.setState({ shouldShowLeaderboardCourse: false })
        this.setState({ shouldShowLeaderboardChallenge: false })
        this.setState({ shouldShowLeaderboardSiteReportScore: true })
        this.setState({ shouldShowLeaderboardTimeAttack: false })
        break
      case 5:
        this.setState({ shouldShowLeaderboardPokemon: false })
        this.setState({ shouldShowLeaderboardReportScore: false })
        this.setState({ shouldShowLeaderboardCourse: false })
        this.setState({ shouldShowLeaderboardChallenge: false })
        this.setState({ shouldShowLeaderboardSiteReportScore: false })
        this.setState({ shouldShowLeaderboardTimeAttack: true })
        break
      default:
        break
    }
  }

  hideComponent(name: string) {
    switch (name) {
      case "shouldShowLeaderboardPokemon":
        this.setState({ shouldShowLeaderboardPokemon: !this.state.shouldShowLeaderboardPokemon })
        this.setState({ shouldShowLeaderboardReportScore: !this.state.shouldShowLeaderboardReportScore })
        break
      case "shouldShowLeaderboardReportScore":
        this.setState({ shouldShowLeaderboardReportScore: !this.state.shouldShowLeaderboardReportScore })
        this.setState({ shouldShowLeaderboardReportScore: !this.state.shouldShowLeaderboardReportScore })
        break
      default:
        break
    }
  }

  showOtherComponent() {
    this.setState({ shouldShowLeaderboardPokemon: !this.state.shouldShowLeaderboardPokemon })
    this.setState({ shouldShowLeaderboardReportScore: !this.state.shouldShowLeaderboardReportScore })
  }

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false })
    }
  }

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel)
    }
    window.addEventListener('resize', this.resizeFunction)
  }

  componentDidUpdate(e: any) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunction)
  }

  handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    this.setState({ value: value })
    this.showComponent(value)
    // this.showOtherComponent()
  }

  render() {
    const { classes, ...rest } = this.props
    const {
      shouldShowLeaderboardPokemon,
      shouldShowLeaderboardReportScore,
      shouldShowLeaderboardCourse,
      shouldShowLeaderboardChallenge,
      shouldShowLeaderboardSiteReportScore,
      shouldShowLeaderboardTimeAttack
    } = this.state
    return (
      <div id="container">
        <Navbar/>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Pokemon" />
            <Tab label="Report Score" />
            <Tab label="Course" />
            <Tab label="Challenge" />
            <Tab label="Site Report" />
            <Tab label="Time Attack" />
          </Tabs>
        </AppBar>
        { shouldShowLeaderboardPokemon &&
          <PokemonLeaderboard location={this.props.location} history={this.props.history} match={this.props.match}/>
        }
        { shouldShowLeaderboardReportScore && <ReportLeaderboard/> }
        { shouldShowLeaderboardCourse && <ReportLeaderboard/> }
        { shouldShowLeaderboardChallenge && <ChallengeLeaderboard/> }
        { shouldShowLeaderboardSiteReportScore && <ReportLeaderboard/> }
        { shouldShowLeaderboardTimeAttack && <ReportLeaderboard/> }
      </div>
    )
  }
}

export default Leaderboard
