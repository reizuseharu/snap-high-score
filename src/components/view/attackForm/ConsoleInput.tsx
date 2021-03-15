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

interface ConsoleInputProps {
  control: Control
}

export const ConsoleInput = ({control}: ConsoleInputProps) => {
  const [gameConsole, setGameConsole] = useState<string>("N64")
  const handleChangeGameConsole = (event: React.ChangeEvent<HTMLInputElement>) => setGameConsole((event.target as HTMLInputElement).value)

  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        name="console"
        as={
          <Box>
            <FormLabel component="legend">Console</FormLabel>
            <RadioGroup row aria-label="console" id="console" value={gameConsole} onChange={handleChangeGameConsole}>
              <FormControlLabel value="N64" control={<Radio />} label="Nintendo 64" />
              <FormControlLabel value="WII_VC" control={<Radio />} label="Wii VC" />
              <FormControlLabel value="WIIU_VC" control={<Radio />} label="WiiU VC" />
            </RadioGroup>
          </Box>
        }
        control={control}
        defaultValue="N64"
        rules={Rules.console_}
      />
    </FormControl>
  )
}
