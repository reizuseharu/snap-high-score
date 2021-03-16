import {RulesButton} from "@components/view/leaderboard/RulesButton"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import {LeaderboardType} from "@models/LeaderboardType"
import {Styles} from "@utils/styles"
import React from "react"

interface CategoryButtonProps {
  type: string
  handleLeaderboardChange: (type: LeaderboardType) => void
  generalRules: Map<string, string[]>
  allCategoryRules: Map<string, string[]>
}

export const CategoryButtonGroup = ({type, handleLeaderboardChange, generalRules, allCategoryRules}: CategoryButtonProps) => {
  return (
    <ButtonGroup aria-label="button group">
      {[
        [LeaderboardType.POKEMON, "Pokémon"],
        [LeaderboardType.REPORT_SCORE, "Report Score"],
        [LeaderboardType.COURSE, "Course"],
        [LeaderboardType.CHALLENGE, "Challenge"],
        [LeaderboardType.SITE_COURSE, "Site Course"],
        [LeaderboardType.SITE_REPORT, "Site Report"],
        [LeaderboardType.TIME_ATTACK, "Time Attack"],
      ].map(([leaderboardType, leaderboardName]) => <Button size="small" disabled={ type === leaderboardType } style={type === leaderboardType ? Styles.activeButton: Styles.button} onClick={() => {handleLeaderboardChange(leaderboardType as LeaderboardType)}}>{leaderboardName}</Button>)}
      <RulesButton generalRules={generalRules.get("rules")} allCategoryRules={allCategoryRules.get(type)}/>
    </ButtonGroup>
  )
}
