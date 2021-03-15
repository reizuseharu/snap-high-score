import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Typography from "@material-ui/core/Typography"
import {LeaderboardType} from "@models/LeaderboardType"
import {Styles} from "@utils/styles"
import React from "react"

interface CategoryButtonProps {
  open: boolean
  type: string
  handleLeaderboardChange: (type: LeaderboardType) => void
  handleClickOpen: () => void
  handleClose: () => void
  generalRules: Map<string, string[]>
  allCategoryRules: Map<string, string[]>
}

export const CategoryButtonGroup = ({open, type, handleLeaderboardChange, handleClickOpen, handleClose, generalRules, allCategoryRules}: CategoryButtonProps) => {
  return (
    <ButtonGroup aria-label="button group">
      {[
        [LeaderboardType.POKEMON, "Pokémon"],
        [LeaderboardType.REPORT_SCORE, "Report Score"],
        [LeaderboardType.COURSE, "Course"],
        [LeaderboardType.CHALLENGE, "Challenge"],
        [LeaderboardType.SITE_COURSE, "Site Course"],
        [LeaderboardType.SITE_REPORT, "Site Report"],
        [LeaderboardType.TIME_ATTACK, "Time Attack"],
      ].map(([leaderboardType, leaderboardName]) => <Button size="small" disabled={ type === leaderboardType } style={type === leaderboardType ? Styles.activeButton: Styles.button} onClick={() => {handleLeaderboardChange(leaderboardType as LeaderboardType)}}>{leaderboardName}</Button>)}
      <Button variant="contained" size="small" style={Styles.rulesButton} color="primary" onClick={handleClickOpen}>Rules</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"General"}</DialogTitle>
        <DialogContent dividers>
          {generalRules.get("rules")?.map(rule => <Typography gutterBottom>{rule}</Typography>)}
        </DialogContent>
        <DialogTitle id="alert-dialog-title">{"Category"}</DialogTitle>
        <DialogContent dividers>
          {allCategoryRules.get(type)?.map(rule => <Typography gutterBottom>{rule}</Typography>)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </ButtonGroup>
  )
}
