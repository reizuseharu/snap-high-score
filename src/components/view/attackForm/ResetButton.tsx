import Button from "@material-ui/core/Button"
import React from "react"

interface ResetButtonProps {
  handleResetScoreAttack: () => void
}

export const ResetButton = ({handleResetScoreAttack}: ResetButtonProps) => {
  return (
    <Button
      id="reset"
      type="button"
      variant="contained"
      onClick={handleResetScoreAttack}>
      Reset
    </Button>
  )
}
