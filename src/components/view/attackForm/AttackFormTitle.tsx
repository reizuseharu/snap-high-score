import Typography from "@material-ui/core/Typography"
import React from "react"

interface AttackFormTitleProps {
  title: string
}

export const AttackFormTitle = ({title}: AttackFormTitleProps) => {
  return (
    <Typography variant="h5" align="center" component="h1" gutterBottom>
      {title}
    </Typography>
  )
}
