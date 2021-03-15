import TextField from "@material-ui/core/TextField"
import {Rules} from "@utils/rules"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface ScorePartsSizeInputProps {
  control: Control
}

export const ScorePartsSizeInput = ({control}: ScorePartsSizeInputProps) => {
  return (
    <Controller
      name="size"
      as={
        <TextField
          id="size"
          fullWidth
          required
          type="number"
          label="Size"
        />
      }
      control={control}
      defaultValue=""
      rules={Rules.size}
    />
  )
}
