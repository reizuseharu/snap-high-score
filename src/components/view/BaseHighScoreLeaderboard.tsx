import {LeaderboardInfo} from "@components/table/LeaderboardInfo"
import {LeaderboardTableHeaderCell} from "@components/table/LeaderboardTableHeaderCell"
import {LeaderboardTableRankCell} from "@components/table/LeaderboardTableRankCell"
import {LeaderboardTableRowCell} from "@components/table/LeaderboardTableRowCell"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"
import green from "@material-ui/core/colors/green"
import red from "@material-ui/core/colors/red"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Fab from "@material-ui/core/Fab"
import IconButton from "@material-ui/core/IconButton"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Cancel from "@material-ui/icons/Cancel"
import CheckCircle from "@material-ui/icons/CheckCircle"
import Error from "@material-ui/icons/Error"
import Image from "@material-ui/icons/Image"
import YouTube from "@material-ui/icons/YouTube"
import {ScoreAttack} from "@models/ScoreAttack"
import {rankBackgroundColor} from "@services/rank"
import {OptionalString} from "@utils/constants"
import {tableHeadStyle} from "@utils/styleHelpers"
import {isURLDataImage, isURLImage, isURLVideo, prettyPrintScoreParts} from "@utils/utility"
import React, {useState} from "react"

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
