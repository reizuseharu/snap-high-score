import CircularProgress from "@material-ui/core/CircularProgress"
import Fab from "@material-ui/core/Fab"
import TableRow from "@material-ui/core/TableRow"
import {Styles} from "@utils/styles"
import React from "react"

export const LoadingProgress = () => {
  return (
    // @ts-ignore
    <TableRow style={Styles.centerFloating}>
      <Fab style={Styles.transparent} aria-label="loading" size="large" disabled>
        <CircularProgress size={50} style={Styles.darkRed} disableShrink/>
      </Fab>
    </TableRow>
  )
}
