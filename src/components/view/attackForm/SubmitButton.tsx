import Button from "@material-ui/core/Button"
import React from "react"

interface SubmitButtonProps {
  handleSubmitScoreAttack: () => void
}

export const SubmitButton = ({handleSubmitScoreAttack}: SubmitButtonProps) => {
  return (
    <Button
      id="submit"
      variant="contained"
      color="primary"
      type="submit"
      onClick={handleSubmitScoreAttack}>
      Submit
    </Button>
  )
}
