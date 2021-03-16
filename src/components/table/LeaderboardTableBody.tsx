import {DisplayProof} from "@components/table/DisplayProof"
import {DisplayVerified} from "@components/table/DisplayVerified"
import {LeaderboardInfo} from "@components/table/LeaderboardInfo"
import {LeaderboardTableRankCell} from "@components/table/LeaderboardTableRankCell"
import {LeaderboardTableRowCell} from "@components/table/LeaderboardTableRowCell"
import TableRow from "@material-ui/core/TableRow"
import {ScoreAttack} from "@models/ScoreAttack"
import {rankBackgroundColor} from "@services/rank"
import {prettyPrintScoreParts} from "@utils/utility"
import React from "react"

interface LeaderboardTableBodyProps {
  scoreAttacks: ScoreAttack[]
}


export const LeaderboardTableBody = ({scoreAttacks}: LeaderboardTableBodyProps) => {
  return (
    <>
      {scoreAttacks
        .sort((sA, sB) => {return sB.score - sA.score})
        .map(({attacker, score, scoreParts, submittedOn, platform, proofLink, isVerified, notes}, index) => {
          return <TableRow style={rankBackgroundColor(index)}>
            <LeaderboardTableRankCell index={index} score={score} ranks={scoreAttacks.map(({score}, _) => {return score})}/>
            <LeaderboardTableRowCell name={<LeaderboardInfo texts={["This is a platform"]} label={<strong>{attacker}</strong>}/>}/>
            <LeaderboardTableRowCell name={<LeaderboardInfo texts={prettyPrintScoreParts(scoreParts)} label={score}/>}/>
            <LeaderboardTableRowCell name={<LeaderboardInfo texts={[notes ?? submittedOn]} label={submittedOn}/>}/>
            <LeaderboardTableRowCell name={<LeaderboardInfo texts={["This is a platform"]} label={platform}/>}/>
            <LeaderboardTableRowCell name={<DisplayProof proofLink={proofLink}/> || "—"}/>
            <LeaderboardTableRowCell name={<DisplayVerified isVerified={isVerified}/>}/>
          </TableRow>
        })}
    </>
  )
}
