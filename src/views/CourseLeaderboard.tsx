import {green} from "@material-ui/core/colors"
import {Cancel, CheckCircle, Image, YouTube} from "@material-ui/icons"
import {OptionalString} from "../utilities/constants"
import {rankBackgroundColor, rankColor, rankImage} from "../services/rank"
import {ScoreAttack} from "../services/ScoreAttack"
import React from 'react'
import { RouteComponentProps } from 'react-router';

import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core"
import {isURLImage, isURLVideo, ordinal_suffix_of} from "../services/utility"

interface Props {
  location: any
  history: any
  match: any
}


interface State {
  scoreAttacks: Array<ScoreAttack>
}

const scoreAttacks: Array<ScoreAttack> = [
  { attacker: "kuwhoa", score: 10000, submittedOn: "2021-01-16", platform: "NTSC-J • N64", proofLink: "https://youtu.be/5QfAKkI1pq4", isVerified: true },
  { attacker: "aKaFuShoo", score: 10000, submittedOn: "2017-01-30", platform: "NTSC-J • N64", proofLink: "https://s3.eu-west-2.amazonaws.com/cyberscoreproofs/Proofs/25450/1306266.jpg", isVerified: true },
  { attacker: "packaquack", score: 10000, submittedOn: "2005-04-15", platform: "NTSC-U • N64", proofLink: null, isVerified: true },
  { attacker: "federerigo", score: 10000, submittedOn: "2018-12-01", platform: "NTSC-U • N64", proofLink: "/proofs/32216/1478993.jpg", isVerified: true },
  { attacker: "rayzoo", score: 12000, submittedOn: "2021-03-06", platform: "NTSC-J • N64", proofLink: null, isVerified: false },
]

class CourseLeaderboard extends React.Component<Props & RouteComponentProps, State> {
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
          <TableHead style={{backgroundColor: "#000000", opacity: 0.7}}>
            <TableCell align="center" style={{color: "#FFFFFF", border: 0}}><strong>Rank</strong></TableCell>
            <TableCell align="center" style={{color: "#FFFFFF", border: 0}}><strong>Attacker</strong></TableCell>
            <TableCell align="center" style={{color: "#FFFFFF", border: 0}}><strong>Score</strong></TableCell>
            <TableCell align="center" style={{color: "#FFFFFF", border: 0}}><strong>Submission Date</strong></TableCell>
            <TableCell align="center" style={{color: "#FFFFFF", border: 0}}><strong>Platform</strong></TableCell>
            <TableCell align="center" style={{color: "#FFFFFF", border: 0}}><strong>Proof</strong></TableCell>
            <TableCell align="center" style={{color: "#FFFFFF", border: 0}}><strong>Verified</strong></TableCell>
          </TableHead>
          <TableBody>
            {this.state.scoreAttacks.map(({attacker, score, submittedOn, platform, proofLink, isVerified}, index) => {
              return <TableRow style={rankBackgroundColor(index)}>
                <TableCell align="center" style={rankColor(index)}><img src={rankImage(index)} alt=""/>{ordinal_suffix_of(index + 1)}</TableCell>
                <TableCell align="center" style={{color: "#FFFFFF", border: 0}}><strong>{attacker}</strong></TableCell>
                <TableCell align="center" style={{color: "#FFFFFF", border: 0}}>{score}</TableCell>
                <TableCell align="center" style={{color: "#FFFFFF", border: 0}}>{submittedOn}</TableCell>
                <TableCell align="center" style={{color: "#FFFFFF", border: 0}}>{platform}</TableCell>
                <TableCell align="center" style={{color: "#FFFFFF", border: 0}}>{this.displayProof(proofLink) || "--"}</TableCell>
                <TableCell align="center" style={{color: "#FFFFFF", border: 0}}>{this.displayVerified(isVerified)}</TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
    )
  }
}

export default CourseLeaderboard
