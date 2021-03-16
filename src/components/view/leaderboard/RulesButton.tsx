import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Typography from "@material-ui/core/Typography"
import {Styles} from "@utils/styles"
import React, {useState} from "react"

interface RulesButtonProps {
  generalRules: string[] | undefined
  allCategoryRules: string[] | undefined
}

export const RulesButton = ({generalRules, allCategoryRules}: RulesButtonProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant="contained" size="small" style={Styles.rulesButton} color="primary" onClick={handleClickOpen}>Rules</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"General"}</DialogTitle>
        <DialogContent dividers>
          {generalRules?.map(rule => <Typography gutterBottom>{rule}</Typography>)}
        </DialogContent>
        <DialogTitle id="alert-dialog-title">{"Category"}</DialogTitle>
        <DialogContent dividers>
          {allCategoryRules?.map(rule => <Typography gutterBottom>{rule}</Typography>)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
