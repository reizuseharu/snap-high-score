import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import {toTitleCase} from "@utils/utility"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface LeaderboardInputProps {
  control: Control
  attackVariants: Map<string, string[]>
  setValue: (arg0: any, arg1: any) => void
  setType: (arg0: any) => void
}

export const LeaderboardInput = ({control, attackVariants, setValue, setType}: LeaderboardInputProps) => {
  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        as={({ onChange, ...props }) => (
          <Autocomplete
            options={Array.from(attackVariants.keys())}
            getOptionLabel={(option) => toTitleCase(`${option}`)}
            renderInput={(params) => <TextField {...params} label="Leaderboard"/>}
            onChange={(e, type_) => {
              onChange(type_)
              setType(type_)
              setValue("challenge", null)
            }}
            {...props}
          />
        )}
        // @ts-ignore
        onChange={([, data]) => data}
        defaultValue={""}
        name={"leaderboard"}
        control={control}
      />
    </FormControl>
  )
}
