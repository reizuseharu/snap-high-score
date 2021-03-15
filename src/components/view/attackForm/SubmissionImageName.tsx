import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import React from "react"


interface SubmissionImageNameProps {
  filename: string
}

export const SubmissionImageName = ({filename: imageFileName}: SubmissionImageNameProps) => {
  return (
    <Typography>
      <Box fontWeight="fontWeightBold">
        {imageFileName}
      </Box>
    </Typography>
  )
}
