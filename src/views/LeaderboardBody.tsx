import background from "../assets/img/background.png"
import {rankBackgroundColor, rankColor, rankImage} from "../services/rank"
import React from 'react'
import { RouteComponentProps } from 'react-router';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core"
import {createLeaderboard, Race, sortLeaderboard} from "../services/leaderboardGenerator"
import {ordinal_suffix_of} from "../services/utility"
import {leagueToFileTag} from "../utilities/constants"

interface Props {
  location: any
  history: any
  match: any
}

interface State {
  pointLeaderboard: Map<string, number>
  averageTimeLeaderboard: Map<string, number>
  averagePointsLeaderboard: Map<string, number>
  sortedPointLeaderboard: Map<string, number>
  currentLinealChampion: string
}

class LeaderboardBody extends React.Component<Props & RouteComponentProps, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      pointLeaderboard: new Map(),
      averageTimeLeaderboard: new Map(),
      averagePointsLeaderboard: new Map(),
      sortedPointLeaderboard: new Map(),
      currentLinealChampion: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = () => {}

  async componentWillMount() {
    let leagueName: string = this.props.match.params.league
    if (leagueName === undefined) {
      leagueName = "alpha"
    }
    const fileTag = leagueToFileTag.get(leagueName) as string

    const raceFile: string = `https://gist.githubusercontent.com/reizuseharu/${fileTag}/raw/snap-league-results-${leagueName}.json`
    const raceResponse: Response = await fetch(raceFile)

    const races: Race[] = await raceResponse.json()

    // @ts-ignore
    const [pointLeaderboard, averageTimeLeaderboard, averagePointsLeaderboard, currentLinealChampion]: [Map<string, number>, Map<string, number>, Map<string, number>, string] = createLeaderboard(races)
    const sortedPointLeaderboard: Map<string, number> = sortLeaderboard(pointLeaderboard)

    console.log("Working")

    this.setState({
      pointLeaderboard,
      averageTimeLeaderboard,
      averagePointsLeaderboard,
      sortedPointLeaderboard,
      currentLinealChampion
    })

    console.dir(this.state)
    return Promise.resolve()
  }

  render() {
    return (
      <div style={{
        height:"100vh",
        backgroundColor: "#99CCFF",
        backgroundImage: `url(${background})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"}}>
        <Table size="small" aria-label="a dense table" style={{
          marginLeft: "20%",
          marginRight: "20%",
          width: "60%"
        }}>
          <TableHead style={{backgroundColor: "#000000", opacity: 0.7}}>
            <TableCell align="center" style={{color: "#FFFFFF"}}><strong>Rank</strong></TableCell>
            <TableCell align="center" style={{color: "#FFFFFF"}}><strong>Runner</strong></TableCell>
            <TableCell align="center" style={{color: "#FFFFFF"}}><strong>Points</strong></TableCell>
            <TableCell align="center" style={{color: "#FFFFFF"}}><strong>Average Time</strong></TableCell>
          </TableHead>
          <TableBody>
            {Array.from(this.state.sortedPointLeaderboard).map(([runnerName, points], index) => {
              return <TableRow style={rankBackgroundColor(index)}>
                <TableCell align="center" style={rankColor(index)}><img src={rankImage(index)} alt=""/>{ordinal_suffix_of(index + 1)}</TableCell>
                <TableCell align="center" style={(() => { if (runnerName === this.state.currentLinealChampion) {return {color: "gold"}} else {return {color: "#FFFFFF"}} })()}><strong>{runnerName}</strong></TableCell>
                <TableCell align="center" style={{color: "#FFFFFF"}}>{points}</TableCell>
                <TableCell align="center" style={{color: "#FFFFFF"}}>{this.state.averageTimeLeaderboard.get(runnerName) || "--"}</TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default LeaderboardBody
