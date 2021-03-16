import Box from "@material-ui/core/Box"
import Cancel from "@material-ui/icons/Cancel"
import CheckCircle from "@material-ui/icons/CheckCircle"
import {Styles} from "@utils/styles"
import React from "react"

interface DisplayVerifiedProps {
  isVerified: boolean
}

export const DisplayVerified = ({isVerified}: DisplayVerifiedProps) => {
  return (
    <Box>
      { isVerified && <CheckCircle style={Styles.green} /> }
      { !isVerified && <Cancel color="secondary" /> }
    </Box>
  )
}
