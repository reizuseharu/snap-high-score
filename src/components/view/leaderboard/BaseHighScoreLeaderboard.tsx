import {LeaderboardTableBody} from "@components/table/LeaderboardTableBody"
import {LeaderboardTableHeader} from "@components/table/LeaderboardTableHeader"
import {LoadingProgress} from "@components/table/LoadingProgress"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import {ScoreAttack} from "@models/ScoreAttack"
import {Styles} from "@utils/styles"
import React from "react"

export const BaseHighScoreLeaderboard = (scoreAttacks: ScoreAttack[], isLoading: boolean) => {
  return (
    <Table size="small" aria-label="a dense table">
      <TableHead style={Styles.tableHead}>
        {<LeaderboardTableHeader/>}
      </TableHead>
      <TableBody>
        { isLoading && <LoadingProgress/> }
        { !isLoading && <LeaderboardTableBody scoreAttacks={scoreAttacks}/>}
      </TableBody>
    </Table>
  )
}
