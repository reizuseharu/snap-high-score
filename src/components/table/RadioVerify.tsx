/* eslint-disable */
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import {Styles} from "@utils/styles"
import axios from "axios"
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
    axios.put(`https://hs-pkmnsnap.ngrok.io/scoreAttack/validate`, {id: id, userName: adminUsername, password: adminPassword})
      .then(result => console.log(result.data))
      .catch((reason) => console.log(reason))
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
