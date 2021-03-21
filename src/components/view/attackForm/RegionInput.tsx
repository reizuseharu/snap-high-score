import Box from "@material-ui/core/Box"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import {Rules} from "@utils/rules"
import React, {useState} from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface RegionInputProps {
  control: Control
}

export const RegionInput = ({control}: RegionInputProps) => {
  const [region, setRegion] = useState<string>("NTSC_JPN")
  const handleChangeRegion = (event: React.ChangeEvent<HTMLInputElement>) => setRegion((event.target as HTMLInputElement).value)

  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        name="region"
        as={
          <Box>
            <FormLabel component="legend">Region</FormLabel>
            <RadioGroup row aria-label="region" id="region" value={region} onChange={handleChangeRegion}>
              <FormControlLabel value="NTSC_U" control={<Radio />} label="NTSC-USA" />
              <FormControlLabel value="NTSC_J" control={<Radio />} label="NTSC-JPN" />
              <FormControlLabel value="PAL" control={<Radio />} label="PAL" />
              <FormControlLabel value="PAL_M" control={<Radio />} label="PAL-M" />
            </RadioGroup>
          </Box>
        }
        control={control}
        defaultValue="NTSC_J"
        rules={Rules.region}
      />
    </FormControl>
  )
}
