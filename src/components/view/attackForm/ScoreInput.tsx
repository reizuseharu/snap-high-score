import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import {Rules} from "@utils/rules"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface ScoreInputProps {
  control: Control
}

export const ScoreInput = ({control}: ScoreInputProps) => {
  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        name="score"
        as={
          <TextField
            id="score"
            fullWidth
            required
            type="number"
            label="Total Score"
          />
        }
        control={control}
        defaultValue=""
        rules={Rules.score}
      />
    </FormControl>
  )
}
