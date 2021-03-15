import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import IconButton from "@material-ui/core/IconButton"
import Image from "@material-ui/icons/Image"
import {Styles} from "@utils/styles"
import React, {useState} from "react"

interface SubmissionImageProps {
  imageFile: string | undefined
}

export const SubmissionImage = ({imageFile}: SubmissionImageProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <IconButton onClick={handleClickOpen} aria-label="link">
        <Image style={(imageFile === "") ? {} : Styles.green}/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent dividers>
          <img src={imageFile} alt={"Proof Pic"} width="400" height="300"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
