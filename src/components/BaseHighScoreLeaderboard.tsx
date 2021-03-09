import {LeaderboardTableRankCell} from "./LeaderboardTableRankCell"
import {LeaderboardTableHeaderCell} from "./LeaderboardTableHeaderCell"
import {LeaderboardTableRowCell} from "./LeaderboardTableRowCell"
import {green} from "@material-ui/core/colors"
import {Cancel, CheckCircle, Error, Image, YouTube} from "@material-ui/icons"
import {OptionalString} from "../utilities/constants"
import {rankBackgroundColor} from "../services/rank"
import {ScoreAttack} from "../services/ScoreAttack"
import React from 'react'
import {tableHeadStyle} from "../utilities/leaderboardHelpers"
import {LeaderboardInfo} from "./LeaderboardInfo"

import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableHead,
  TableRow
} from "@material-ui/core"
import {isURLImage, isURLVideo} from "../services/utility"

export const BaseHighScoreLeaderboard = (scoreAttacks: ScoreAttack[]) => {
  const displayProof = (proofLink: OptionalString) => {
    const isImage: boolean = proofLink ? isURLImage(proofLink) : false
    const isVideo: boolean = proofLink ? isURLVideo(proofLink) : false

    if (!isImage && !isVideo) { return <IconButton disabled><Error/></IconButton> }

    return (
      /* @ts-ignore */
      <IconButton href={proofLink} target="_blank" aria-label="link">
        { isImage && <Image style={{ color: green[500]}}/> }
        { isVideo && <YouTube style={{ color: green[500]}}/> }
      </IconButton>
    )
  }

  const displayVerified = (isVerified: boolean) => {
    return (
      <Box>
        { isVerified && <CheckCircle style={{ color: green[500] }} /> }
        { !isVerified && <Cancel color="secondary" /> }
      </Box>
    )
  }
  // <LeaderboardInfo text={"what"} label={"Stuff"}/>
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
        {scoreAttacks
          .sort((sA, sB) => {return sB.score - sA.score})
          .map(({attacker, score, submittedOn, platform, proofLink, isVerified}, index) => {
          return <TableRow style={rankBackgroundColor(index)}>
            <LeaderboardTableRankCell index={index} score={score} ranks={scoreAttacks.map(({score}, _) => {return score})}/>
            <LeaderboardTableRowCell name={<strong>{attacker}</strong>}/>
            <LeaderboardTableRowCell name={score}/>
            <LeaderboardTableRowCell name={submittedOn}/>
            <LeaderboardTableRowCell name={<LeaderboardInfo text={"This is a platform"} label={platform}/>}/>
            <LeaderboardTableRowCell name={displayProof(proofLink) || "—"}/>
            <LeaderboardTableRowCell name={displayVerified(isVerified)}/>
          </TableRow>
        })}
      </TableBody>
    </Table>
  )
}

export default BaseHighScoreLeaderboard
