import TextField from "@material-ui/core/TextField"
import {Rules} from "@utils/rules"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface ScorePartsPoseInputProps {
  control: Control
}

export const ScorePartsPoseInput = ({control}: ScorePartsPoseInputProps) => {
  return (
    <Controller
      name="pose"
      as={
        <TextField
          id="pose"
          fullWidth
          required
          type="number"
          label="Pose"
        />
      }
      control={control}
      defaultValue=""
      rules={Rules.pose}
    />
  )
}
