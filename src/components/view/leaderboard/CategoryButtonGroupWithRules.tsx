import {CategoryButtonGroup} from "@components/view/leaderboard/CategoryButtonGroup"
import {RulesButton} from "@components/view/leaderboard/RulesButton"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import {LeaderboardType} from "@models/LeaderboardType"
import React from "react"

interface CategoryButtonProps {
  type: string
  handleLeaderboardChange: (type: LeaderboardType) => void
  generalRules: Map<string, string[]>
  allCategoryRules: Map<string, string[]>
}

export const CategoryButtonGroupWithRules = ({type, handleLeaderboardChange, generalRules, allCategoryRules}: CategoryButtonProps) => {
  return (
    <ButtonGroup aria-label="button group">
      <CategoryButtonGroup type={type} handleLeaderboardChange={handleLeaderboardChange}/>
      <RulesButton generalRules={generalRules.get("rules")} allCategoryRules={allCategoryRules.get(type)}/>
    </ButtonGroup>
  )
}
