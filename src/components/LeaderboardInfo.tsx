/* eslint-disable */
import {
  Box,
} from "@material-ui/core"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import React, {useState} from "react"
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

const buttonStyle = {
  minWidth: 50
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: 'none',
      ...buttonStyle,
    },
    typography: {
      padding: theme.spacing(2),
    },
  }),
)

interface Props {
  text: string
  label: string
}

export const LeaderboardInfo = (props: Props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event)
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const popOpen = Boolean(anchorEl)
  const id = popOpen ? 'simple-popover' : undefined

  return (
    <Box>
      <Typography
        aria-owns={id}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {props.label}
      </Typography>
      <Popover
        id={id}
        className={classes.popover}
        open={popOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        disableRestoreFocus
      >
        <Typography className={classes.typography}>{props.text}</Typography>
      </Popover>
    </Box>
  )
}
