import {LeaderboardProps} from "../services/LeaderboardProps"
import {LeaderboardState} from "../services/LeaderboardState"
import {LeaderboardTableRankCell} from "./LeaderboardTableRankCell"
import {LeaderboardTableHeaderCell} from "./LeaderboardTableHeaderCell"
import {LeaderboardTableRowCell} from "./LeaderboardTableRowCell"
import {green} from "@material-ui/core/colors"
import {Cancel, CheckCircle, Image, YouTube} from "@material-ui/icons"
import {OptionalString} from "../utilities/constants"
import {rankBackgroundColor} from "../services/rank"
import {ScoreAttack} from "../services/ScoreAttack"
import React from 'react'
import { RouteComponentProps } from 'react-router'
import {tableHeadStyle} from "../utilities/leaderboardHelpers"

import {
  IconButton,
  Table,
  TableBody,
  TableHead,
  TableRow
} from "@material-ui/core"
import {isURLImage, isURLVideo} from "../services/utility"

class BaseHighScoreLeaderboard extends React.Component<LeaderboardProps & RouteComponentProps, LeaderboardState> {
  constructor(props: LeaderboardProps, scoreAttacks: Array<ScoreAttack>) {
    super(props)

    this.state = {
      scoreAttacks: scoreAttacks
    }

    this.handleChange = this.handleChange.bind(this)
    this.displayProof = this.displayProof.bind(this)
    this.displayVerified = this.displayVerified.bind(this)
  }

  handleChange = () => {}

  async componentWillMount() {
    this.setState({})

    console.dir(this.state)
    return Promise.resolve()
  }

  displayProof(proofLink: OptionalString) {
    const isImage: boolean = proofLink ? isURLImage(proofLink) : false
    const isVideo: boolean = proofLink ? isURLVideo(proofLink) : false

    if (!isImage && !isVideo) { return null}

    return (
      /* @ts-ignore */
      <IconButton href={proofLink} target="_blank" aria-label="link">
        { isImage && <Image /> }
        { isVideo && <YouTube color={"secondary"}/> }
      </IconButton>
    )
  }

  displayVerified(isVerified: boolean) {
    return (
      <div>
        { isVerified && <CheckCircle style={{ color: green[500] }} /> }
        { !isVerified && <Cancel color="secondary" /> }
      </div>
    )
  }

  render() {
    return (
      <Table size="small" aria-label="a dense table">
        <TableHead style={tableHeadStyle}>
          <LeaderboardTableHeaderCell name={"Rank"}/>
          <LeaderboardTableHeaderCell name={"Attacker"}/>
          <LeaderboardTableHeaderCell name={"Score"}/>
          <LeaderboardTableHeaderCell name={"Submission Date"}/>
          <LeaderboardTableHeaderCell name={"Platform"}/>
          <LeaderboardTableHeaderCell name={"Proof"}/>
          <LeaderboardTableHeaderCell name={"Verified"}/>
        </TableHead>
        <TableBody>
          {this.state.scoreAttacks
            .sort((sA, sB) => {return sB.score - sA.score})
            .map(({attacker, score, submittedOn, platform, proofLink, isVerified}, index) => {
            return <TableRow style={rankBackgroundColor(index)}>
              <LeaderboardTableRankCell index={index} score={score} ranks={this.state.scoreAttacks.map(({score}, _) => {return score})}/>
              <LeaderboardTableRowCell name={<strong>{attacker}</strong>}/>
              <LeaderboardTableRowCell name={score}/>
              <LeaderboardTableRowCell name={submittedOn}/>
              <LeaderboardTableRowCell name={platform}/>
              <LeaderboardTableRowCell name={this.displayProof(proofLink) || "—"}/>
              <LeaderboardTableRowCell name={this.displayVerified(isVerified)}/>
            </TableRow>
          })}
        </TableBody>
      </Table>
    )
  }
}

export default BaseHighScoreLeaderboard
