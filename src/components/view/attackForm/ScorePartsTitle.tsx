import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import {Styles} from "@utils/styles"
import React from "react"


export const ScorePartsTitle = () => {
  return (
    <FormControl fullWidth variant="outlined" style={Styles.formScoreParts}>
      <FormLabel component="legend">Score Parts</FormLabel>
    </FormControl>
  )
}
