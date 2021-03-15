import TextField from "@material-ui/core/TextField"
import {Autocomplete} from "@material-ui/lab"
import {Styles} from "@utils/styles"
import React from "react"

interface SubVariantSearchProps {
  attackSubVariant: string | null
  attackSubVariants: string[]
  onSubVariantChange: (event: any, attackSubVariant_: string | null) => void
}

export const SubVariantSearch = ({attackSubVariant, attackSubVariants, onSubVariantChange}: SubVariantSearchProps) => {
  return (
    <Autocomplete
      id="subvariant-search"
      value={attackSubVariant}
      onChange={onSubVariantChange}
      options={attackSubVariants}
      getOptionLabel={(option) => option}
      style={Styles.autocomplete}
      renderInput={(params) => <TextField {...params} size="small" label="SubVariant" variant="outlined" />}
    />
  )
}
