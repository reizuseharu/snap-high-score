/* eslint-disable */
import {AppBar, Tab, Tabs} from "@material-ui/core"
import React from 'react'
// creates a beautiful scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

import image from '../assets/img/sidebar-2.jpg'
import LeaderboardBody from "./LeaderboardBody"
import {Leaderboard as LeaderboardBody2} from "./LeaderboardBody2"
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
  shouldShowPokemonLeaderboard: boolean
  shouldShowAllLeaderboard: boolean
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
      shouldShowPokemonLeaderboard: true,
      shouldShowAllLeaderboard: false
    }
    this.hideComponent = this.hideComponent.bind(this)
    this.showOtherComponent = this.showOtherComponent.bind(this)
  }

  hideComponent(name: string) {
    switch (name) {
      case "shouldShowPokemonLeaderboard":
        this.setState({ shouldShowPokemonLeaderboard: !this.state.shouldShowPokemonLeaderboard })
        this.setState({ shouldShowAllLeaderboard: !this.state.shouldShowAllLeaderboard })
        break
      case "shouldShowAllLeaderboard":
        this.setState({ shouldShowAllLeaderboard: !this.state.shouldShowAllLeaderboard })
        this.setState({ shouldShowAllLeaderboard: !this.state.shouldShowAllLeaderboard })
        break
      default:
        break
    }
  }

  showOtherComponent() {
    this.setState({ shouldShowPokemonLeaderboard: !this.state.shouldShowPokemonLeaderboard })
    this.setState({ shouldShowAllLeaderboard: !this.state.shouldShowAllLeaderboard })
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
    this.showOtherComponent()
  }

  render() {
    const { classes, ...rest } = this.props
    const { shouldShowPokemonLeaderboard, shouldShowAllLeaderboard } = this.state
    return (
      <div id="container">
        <Navbar/>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Pokemon" />
            <Tab label="All" />
          </Tabs>
        </AppBar>
        { shouldShowPokemonLeaderboard &&
          <LeaderboardBody location={this.props.location} history={this.props.history} match={this.props.match}/>
        }
        { shouldShowAllLeaderboard && <LeaderboardBody2/> }
      </div>
    )
  }
}

export default Leaderboard
