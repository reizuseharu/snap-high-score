import TableCell from "@material-ui/core/TableCell"
import {TableCellProps} from "@material-ui/core/TableCell/TableCell"
import {Styles} from "@utils/styles"
import React, {Attributes} from "react"

interface LeaderboardTableCellProps {
  name: string | number | Attributes
}

export const LeaderboardTableRowCell = (props: TableCellProps & LeaderboardTableCellProps) => {
  return (
    <TableCell {...props} align="center" style={Styles.tableCell}>{props.name}</TableCell>
  )
}
