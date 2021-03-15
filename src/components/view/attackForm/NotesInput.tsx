import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import {Rules} from "@utils/rules"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface NotesInputProps {
  control: Control
}

export const NotesInput = ({control}: NotesInputProps) => {
  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        name="notes"
        as={
          <TextField fullWidth id="notes" multiline label="Notes" />
        }
        control={control}
        defaultValue=""
        rules={Rules.notes}
      />
    </FormControl>
  )
}
