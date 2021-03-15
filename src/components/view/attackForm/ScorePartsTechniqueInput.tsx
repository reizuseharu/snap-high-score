import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import {Rules} from "@utils/rules"
import {Styles} from "@utils/styles"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface ScorePartsTechniqueInputProps {
  control: Control
}

export const ScorePartsTechniqueInput = ({control}: ScorePartsTechniqueInputProps) => {
  return (
    <FormControlLabel
      style={Styles.formMultiOption}
      control={
        <Controller
          name="isTechnique"
          control={control}
          render={(props) => (
            <Checkbox
              {...props}
              id="isTechnique"
              checked={props.value}
              onChange={(e) => props.onChange(e.target.checked)}
            />
          )}
          defaultValue={false}
          rules={Rules.technique}
        />
      }
      label="Technique"
    />
  )
}
