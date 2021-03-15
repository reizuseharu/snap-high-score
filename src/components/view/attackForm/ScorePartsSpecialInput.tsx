import TextField from "@material-ui/core/TextField"
import {Rules} from "@utils/rules"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface ScorePartsSpecialInputProps {
  control: Control
}

export const ScorePartsSpecialInput = ({control}: ScorePartsSpecialInputProps) => {
  return (
    <Controller
      name="special"
      as={
        <TextField
          id="special"
          fullWidth
          required
          type="number"
          label="Special"
        />
      }
      control={control}
      defaultValue=""
      rules={Rules.special}
    />
  )
}
