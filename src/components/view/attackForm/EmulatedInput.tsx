import Checkbox from "@material-ui/core/Checkbox"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import {Rules} from "@utils/rules"
import {Styles} from "@utils/styles"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface EmulatedInputProps {
  control: Control
}

export const EmulatedInput = ({control}: EmulatedInputProps) => {
  return (
    <FormControl fullWidth variant="outlined">
      <FormControlLabel
        style={Styles.formEmulated}
        control={
          <Controller
            name="isEmulated"
            control={control}
            render={(props) => (
              <Checkbox
                {...props}
                id="isEmulated"
                checked={props.value}
                onChange={(e) => props.onChange(e.target.checked)}
              />
            )}
            defaultValue={false}
            rules={Rules.emulated}
          />
        }
        label="Emulated"
      />
    </FormControl>
  )
}
