import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import {Console} from "@models/Console"
import {LeaderboardType} from "@models/LeaderboardType"
import {Styles} from "@utils/styles"
import {toTitleCase} from "@utils/utility"
import React from "react"

interface LeaderboardTitleProps {
  type: LeaderboardType
  attackSubVariant: string | null
  gameConsole: Console
}

export const LeaderboardTitle = ({type, attackSubVariant, gameConsole}: LeaderboardTitleProps) => {
  return (
    <Box display="flex" justifyContent="center" borderRadius={16}>
      <Typography style={Styles.title} gutterBottom>
        <strong>{toTitleCase(type).toUpperCase()} • {attackSubVariant?.toUpperCase()} • {gameConsole}</strong>
      </Typography>
    </Box>
  )
}
