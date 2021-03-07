import {TableCell} from "@material-ui/core"
import {TableCellProps} from "@material-ui/core/TableCell/TableCell"
import {tableCellStyle} from "../utilities/leaderboardHelpers"
import React from "react"

interface LeaderboardTableHeaderCellProps {
  name: string
}

export function LeaderboardTableHeaderCell(props: TableCellProps & LeaderboardTableHeaderCellProps) {
  return (
    <TableCell {...props} align="center" style={tableCellStyle}><strong>{props.name}</strong></TableCell>
  )
}
