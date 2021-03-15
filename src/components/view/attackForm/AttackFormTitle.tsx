import Typography from "@material-ui/core/Typography"
import {Styles} from "@utils/styles"
import React from "react"

interface AttackFormTitleProps {
  title: string
}

export const AttackFormTitle = ({title}: AttackFormTitleProps) => {
  return (
    <Typography style={Styles.title} variant="h5" align="center" component="h1" gutterBottom>
      <strong>{title}</strong>
    </Typography>
  )
}
