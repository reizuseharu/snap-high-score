import {AdminTableBody} from "@components/table/AdminTableBody"
import {LeaderboardTableHeader} from "@components/table/LeaderboardTableHeader"
import {LoadingProgress} from "@components/table/LoadingProgress"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import {ApiScoreAttack} from "@models/ApiScoreAttack"
import {Styles} from "@utils/styles"
import {convertDateToLocalString} from "@utils/utility"
import React from "react"

interface AdminQueueProps {
  scoreAttacks: ApiScoreAttack[]
  isLoading: boolean
  adminUsername: string | undefined
  adminPassword: string | undefined
}

export const AdminQueue = ({scoreAttacks, isLoading, adminUsername, adminPassword}: AdminQueueProps) => {
  const processedScoreAttacks = scoreAttacks.map((apiScoreAttack: ApiScoreAttack) => {
    return {
      id: apiScoreAttack.id,
      attacker: apiScoreAttack.userName,
      score: apiScoreAttack.totalScore,
      scoreParts: {
        special: apiScoreAttack.special,
        size: apiScoreAttack.size,
        pose: apiScoreAttack.pose,
        isTechnique: apiScoreAttack.isTechnique,
        samePokemon: apiScoreAttack.samePokemon
      },
      // @ts-ignore
      submittedOn: convertDateToLocalString(new Date(...apiScoreAttack.submittedOn)),
      platform: `${apiScoreAttack.console} • ${apiScoreAttack.region}`,
      proofLink: apiScoreAttack.proof,
      isVerified: apiScoreAttack.isVerified,
      notes: apiScoreAttack.notes,
    }
  })

  return (
    <Table size="small" aria-label="a dense table">
      <TableHead style={Styles.tableHead}>
        <LeaderboardTableHeader/>
      </TableHead>
      <TableBody>
        { isLoading && <LoadingProgress/> }
        { !isLoading && <AdminTableBody scoreAttacks={processedScoreAttacks} adminUsername={adminUsername} adminPassword={adminPassword}/>}
      </TableBody>
    </Table>
  )
}
