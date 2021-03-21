/* eslint-disable */
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import {Styles} from "@utils/styles"
import React, {useState} from "react"

interface RadioVerifyProps {
  id: string | undefined
  adminUsername: string | undefined
  adminPassword: string | undefined
}

export const RadioVerify = ({id, adminUsername, adminPassword}: RadioVerifyProps) => {
  const [value, setValue] = useState<string>()
  const [disabled, setDisabled] = useState<boolean>(false)
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    // - Send to endpoint
    // console.log(id)
    // console.log(adminUsername)
    // console.log(adminPassword)
    setDisabled(true)
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue((event.target as HTMLInputElement).value)

  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="verify" name="" value={value} onChange={handleRadioChange}>
        <FormControlLabel value="verify" control={<Radio disabled={disabled}/>} label="Verify"/>
        <FormControlLabel value="reject" control={<Radio disabled={disabled}/>} label="Reject"/>
      </RadioGroup>
      {/* @ts-ignore */}
      <Button variant="contained" size="small" disabled={disabled} style={Styles.rulesButton} color="primary" onClick={handleSubmit}>Submit</Button>
    </FormControl>
  )
}
