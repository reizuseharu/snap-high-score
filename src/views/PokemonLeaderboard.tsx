import {LeaderboardTableRankCell} from "../components/LeaderboardTableRankCell"
import {LeaderboardTableHeaderCell} from "../components/LeaderboardTableHeaderCell"
import {LeaderboardTableRowCell} from "../components/LeaderboardTableRowCell"
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

interface Props {
  location: any
  history: any
  match: any
}

interface State {
  scoreAttacks: Array<ScoreAttack>
}

const scoreAttacks: Array<ScoreAttack> = [
  { attacker: "quo", score: 10000, submittedOn: "2021-01-16", platform: "NTSC-J • N64", proofLink: "https://youtu.be/5QfAKkI1pq4", isVerified: true },
  { attacker: "aKaFuKu", score: 10000, submittedOn: "2017-01-30", platform: "NTSC-J • N64", proofLink: "https://s3.eu-west-2.amazonaws.com/cyberscoreproofs/Proofs/25450/1306266.jpg", isVerified: true },
  { attacker: "packattack", score: 10000, submittedOn: "2005-04-15", platform: "NTSC-U • N64", proofLink: null, isVerified: true },
  { attacker: "feketerigo", score: 10000, submittedOn: "2018-12-01", platform: "NTSC-U • N64", proofLink: "/proofs/32216/1478993.jpg", isVerified: true },
  { attacker: "reizu", score: 12000, submittedOn: "2021-03-06", platform: "NTSC-J • N64", proofLink: null, isVerified: false },
  { attacker: "CJItsAllGewd_", score: 9999, submittedOn: "2020-01-01", platform: "NTSC-J • N64", proofLink: null, isVerified: true },
]

class PokemonLeaderboard extends React.Component<Props & RouteComponentProps, State> {
  constructor(props: Props) {
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

export default PokemonLeaderboard
