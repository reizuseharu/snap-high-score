import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import Error from "@material-ui/icons/Error"
import Image from "@material-ui/icons/Image"
import YouTube from "@material-ui/icons/YouTube"
import {OptionalString} from "@utils/constants"
import {Styles} from "@utils/styles"
import {isURLDataImage, isURLImage, isURLVideo} from "@utils/utility"
import React, {useState} from "react"

interface DisplayProofProps {
  proofLink: OptionalString
}

export const DisplayProof = ({proofLink}: DisplayProofProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const isDataUrl = isURLDataImage(proofLink ?? "")

  const isImage: boolean = proofLink ? (isURLImage(proofLink) || isDataUrl) : false
  const isVideo: boolean = proofLink ? isURLVideo(proofLink) : false

  if (!isImage && !isVideo) { return <IconButton disabled><Error/></IconButton> }

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {isImage && isDataUrl &&
      /* @ts-ignore */
      <>
        <IconButton onClick={handleClickOpen} aria-label="link">
          {isImage && <Image style={Styles.green}/>}
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
        <Image style={Styles.green}/>
      </IconButton>
      }
      {isVideo &&
      /* @ts-ignore */
      <IconButton href={proofLink} target="_blank" aria-label="link">
        <YouTube style={Styles.green}/>
      </IconButton>
      }
    </>
  )
}
