import TableCell from "@material-ui/core/TableCell"
import {TableCellProps} from "@material-ui/core/TableCell/TableCell"
import {Styles} from "@utils/styles"
import React from "react"

interface LeaderboardTableHeaderCellProps {
  name: string
}

export const LeaderboardTableHeaderCell = (props: TableCellProps & LeaderboardTableHeaderCellProps) => {
  return (
    <TableCell {...props} align="center" style={Styles.tableCell}><strong>{props.name}</strong></TableCell>
  )
}
