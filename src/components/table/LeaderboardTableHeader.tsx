import {LeaderboardTableHeaderCell} from "@components/table/LeaderboardTableHeaderCell"
import React from "react"

export const LeaderboardTableHeader = () => {
  return (
    <>
      {[
        "Rank",
        "Attacker",
        "Score",
        "Submission Date",
        "Platform",
        "Proof",
        "Verified",
      ].map((headerName) => <LeaderboardTableHeaderCell name={headerName}/>)
      }
    </>
  )
}
