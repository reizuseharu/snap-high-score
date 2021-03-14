/* eslint-disable */
import {Box,} from "@material-ui/core"
import Popover from "@material-ui/core/Popover"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React, {Attributes, useState} from "react"

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
      padding: theme.spacing(1),
    },
  }),
)

interface Props {
  texts: string[]
  label: string | number | Attributes
}

export const LeaderboardInfo = (props: Props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
        {props.texts.map((text) => {
          return <Typography className={classes.typography}>{text}</Typography>
        })}
      </Popover>
    </Box>
  )
}
