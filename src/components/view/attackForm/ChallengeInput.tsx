import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import {toTitleCase} from "@utils/utility"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface ChallengeInputProps {
  control: Control
  attackSubVariants: Map<string, string[]>
  challengeValue: string
}

export const ChallengeInput = ({control, attackSubVariants, challengeValue}: ChallengeInputProps) => {
  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        as={({ onChange, ...props }) => (
          <Autocomplete
            value={challengeValue}
            options={attackSubVariants}
            getOptionLabel={(option) => toTitleCase(`${option}`)}
            renderInput={(params) => <TextField {...params} label="Challenge"/>}
            onChange={(e, data) => onChange(data)}
            {...props}
          />
        )}
        // @ts-ignore
        onChange={([, data]) => data}
        defaultValue={""}
        name={"challenge"}
        control={control}
      />
    </FormControl>
  )
}
