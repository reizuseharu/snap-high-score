import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import {Rules} from "@utils/rules"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface AttackerInputProps {
  control: Control
}

export const AttackerInput = ({control}: AttackerInputProps) => {
  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        name="attacker"
        as={
          <TextField
            id="attacker"
            fullWidth
            required
            type="text"
            label="Attacker"
          />
        }
        control={control}
        defaultValue=""
        rules={Rules.attacker}
      />
    </FormControl>
  )
}
