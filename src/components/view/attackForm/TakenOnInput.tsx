import DateFnsUtils from "@date-io/date-fns"
import FormControl from "@material-ui/core/FormControl"
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface TakenOnInputProps {
  control: Control
}

export const TakenOnInput = ({control}: TakenOnInputProps) => {
  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        name="takenOn"
        render={(props) => {
          return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                margin="normal"
                id="takenOn"
                label="Picture/Video Taken On"
                variant="inline"
                format="yyyy-MM-dd"
                onChange={props.onChange}
                // @ts-ignore
                selected={props.selected}
                value={props.value}
              />
            </MuiPickersUtilsProvider>
          )
        }}
        // @ts-ignore
        onChange={(date) => date}
        control={control}
        defaultValue={new Date(2020, 0, 1)}
      />
    </FormControl>
  )
}
