import {LeaderboardTableRankCell} from "@components/LeaderboardTableRankCell"
import {LeaderboardTableHeaderCell} from "@components/LeaderboardTableHeaderCell"
import {LeaderboardTableRowCell} from "@components/LeaderboardTableRowCell"
import {green, red} from "@material-ui/core/colors"
import {Cancel, CheckCircle, Error, Image, YouTube} from "@material-ui/icons"
import {OptionalString} from "@utils/constants"
import {rankBackgroundColor} from "@services/rank"
import {ScoreAttack} from "@models/ScoreAttack"
import React, {useState} from "react"
import {tableHeadStyle} from "@utils/leaderboardHelpers"
import {LeaderboardInfo} from "@components/LeaderboardInfo"

import {
  Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Fab,
  IconButton,
  Table,
  TableBody,
  TableHead,
  TableRow
} from "@material-ui/core"
import {isURLDataImage, isURLImage, isURLVideo, prettyPrintScoreParts} from "@utils/utility"

export const BaseHighScoreLeaderboard = (scoreAttacks: ScoreAttack[], isLoading: boolean) => {
  const [open, setOpen] = useState<boolean>(false)
  const displayProof = (proofLink: OptionalString) => {
    const isDataUrl = isURLDataImage(proofLink ?? "")

    const isImage: boolean = proofLink ? (isURLImage(proofLink) || isDataUrl) : false
    const isVideo: boolean = proofLink ? isURLVideo(proofLink) : false

    if (!isImage && !isVideo) { return <IconButton disabled><Error/></IconButton> }

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return (
      <>
      {isImage && isDataUrl &&
        /* @ts-ignore */
        <>
        <IconButton onClick={handleClickOpen} aria-label="link">
          {isImage && <Image style={{color: green[500]}}/>}
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Proof Pic"}</DialogTitle>
          <DialogContent dividers>
            <img src={proofLink ?? ""} alt={"Proof Pic"} width="400" height="300"/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        </>
      }
      {isImage && !isDataUrl &&
        /* @ts-ignore */
        <IconButton href={proofLink} target="_blank" aria-label="link">
          <Image style={{color: green[500]}}/>
        </IconButton>
      }
      {isVideo &&
        /* @ts-ignore */
        <IconButton href={proofLink} target="_blank" aria-label="link">
          <YouTube style={{color: green[500]}}/>
        </IconButton>
      }
      </>
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
        {isLoading &&
          <TableRow style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'}}>
            <Fab style={{backgroundColor: "transparent"}} aria-label="loading" size="large" disabled>
              <CircularProgress size={50} style={{color: red[700]}} disableShrink/>
            </Fab>
          </TableRow>
        }
        { !isLoading && scoreAttacks
          .sort((sA, sB) => {return sB.score - sA.score})
          .map(({attacker, score, scoreParts, submittedOn, platform, proofLink, isVerified, notes}, index) => {
          return <TableRow style={rankBackgroundColor(index)}>
            <LeaderboardTableRankCell index={index} score={score} ranks={scoreAttacks.map(({score}, _) => {return score})}/>
            <LeaderboardTableRowCell name={<LeaderboardInfo texts={["This is a platform"]} label={<strong>{attacker}</strong>}/>}/>
            <LeaderboardTableRowCell name={<LeaderboardInfo texts={prettyPrintScoreParts(scoreParts)} label={score}/>}/>
            <LeaderboardTableRowCell name={<LeaderboardInfo texts={[notes ?? submittedOn]} label={submittedOn}/>}/>
            <LeaderboardTableRowCell name={<LeaderboardInfo texts={["This is a platform"]} label={platform}/>}/>
            <LeaderboardTableRowCell name={displayProof(proofLink) || "—"}/>
            <LeaderboardTableRowCell name={displayVerified(isVerified)}/>
          </TableRow>
        })}
      </TableBody>
    </Table>
  )
}

export default BaseHighScoreLeaderboard
