import TextField from "@material-ui/core/TextField"
import {Rules} from "@utils/rules"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface ScorePartsSamePokemonInputProps {
  control: Control
}

export const ScorePartsSamePokemonInput = ({control}: ScorePartsSamePokemonInputProps) => {
  return (
    <Controller
      name="samePokemon"
      as={
        <TextField
          id="samePokemon"
          fullWidth
          required
          type="number"
          label="Same Pokémon"
        />
      }
      control={control}
      defaultValue=""
      rules={Rules.samePokemon}
    />
  )
}
