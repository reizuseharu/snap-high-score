// @ts-nocheck
import {Autocomplete} from "@material-ui/lab"
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers"
import {LeaderboardType} from "../models/LeaderboardType"
import {toBase64, convertDateToLocalString, toCamelCase, toTitleCase} from "../utilities/utility"
import background from "../assets/img/background.png"
import {PhotoCamera} from "@material-ui/icons"
import React, {useEffect, useState} from "react"
import { useForm, Controller } from 'react-hook-form'
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
  Box,
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  FormLabel, Radio, Checkbox,
} from "@material-ui/core"
import {Navbar} from "./Navbar"

import DateFnsUtils from '@date-io/date-fns'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
)

export const AttackForm = () => {
  const classes = useStyles()
  const { register, handleSubmit, control, errors: fieldsErrors, reset, getValues } = useForm()
  const onSubmit = (data) => {
    console.log("submit")
    console.log(getValues())
    console.log(data)
  }
  const [imageFile, setImageFile] = useState("")
  const [type, setType] = useState<string>(LeaderboardType.POKEMON)
  const [attackVariants, setAttackVariants] = useState<Map<string, string[]>>(new Map())
  const [attackSubVariants, setAttackSubVariants] = useState<string[]>([])
  const [region, setRegion] = useState("NTSC_JPN")
  const [gameConsole, setGameConsole] = useState("N64")

  useEffect(() => {
    fetch('data/attackVariants.json')
      .then(result => result.json())
      .then(attackVariants_ => setAttackVariants(new Map<string, string[]>(Object.entries(attackVariants_))))
  }, [])

  useEffect(() => {
    setAttackSubVariants(attackVariants.get(type) ?? [])
  }, [attackVariants, type])

  const handleChangeRegion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegion((event.target as HTMLInputElement).value)
  }

  const handleChangeGameConsole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameConsole((event.target as HTMLInputElement).value)
  }

  return (
    <Box id="container" style={{
      backgroundImage: `url(${background})`,
      backgroundAttachment: "fixed",
      height: "200%",
      backgroundRepeat: "repeat"
    }}
    >
      <Navbar/>
      <Box style={{ padding: 16, margin: 'auto', maxWidth: "80%", opacity: 0.7 }}>
        <CssBaseline />
        <Typography variant="h5" align="center" component="h1" gutterBottom>
          High Score Submission
        </Typography>
        <Paper style={{ padding: 16 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid container xs={6} direction="column">
                <Grid xs={12} container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="attacker"
                        as={
                          <TextField
                            id="attacker"
                            fullWidth
                            required
                            type="text"
                            label="Attacker"
                          />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                          required: 'Required'
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={5}>
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
                            }}
                            {...props}
                          />
                        )}
                        onChange={([, data]) => data}
                        defaultValue={"POKEMON"}
                        name={"leaderboard"}
                        control={control}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        as={({ onChange, ...props }) => (
                          <Autocomplete
                            key={type}
                            options={attackSubVariants}
                            getOptionLabel={(option) => toTitleCase(`${option}`)}
                            renderInput={(params) => <TextField {...params} label="Challenge"/>}
                            onChange={(e, data) => onChange(data)}
                            {...props}
                          />
                        )}
                        onChange={([, data]) => data}
                        defaultValue={"Bulbasaur"}
                        name={"challenge"}
                        control={control}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="score"
                        as={
                          <TextField
                            id="score"
                            fullWidth
                            required
                            type="number"
                            label="Score"
                          />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                          required: 'Required'
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={10}>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="videoLink"
                        as={
                          <TextField id="videoLink" label="Video Link" />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                          required: 'Required'
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="proofImage"
                        as={
                          <Box>
                            <input accept="image/*"
                                   id="proofImage"
                                   name="proofImage"
                                   ref={register}
                                   key="fileInput"
                                   className={classes.input}
                                   type="file" />
                            <label htmlFor="icon-button-file">
                              <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                              </IconButton>
                            </label>
                          </Box>
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                          required: 'Required'
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container xs={6} direction="column">
                <Grid container spacing={0} alignItems="center">
                  <Grid item>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="region"
                        as={
                          <Box>
                            <FormLabel component="legend">Region</FormLabel>
                            <RadioGroup row aria-label="region" id="region" value={region} onChange={handleChangeRegion}>
                              <FormControlLabel value="NTSC_USA" control={<Radio />} label="NTSC-USA" />
                              <FormControlLabel value="NTSC_JPN" control={<Radio />} label="NTSC-JPN" />
                              <FormControlLabel value="PAL" control={<Radio />} label="PAL" />
                              <FormControlLabel value="PAL_M" control={<Radio />} label="PAL-M" />
                            </RadioGroup>
                          </Box>
                        }
                        control={control}
                        defaultValue="NTSC_JPN"
                        rules={{
                          required: 'Required'
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="console"
                        as={
                          <Box>
                            <FormLabel component="legend">Console</FormLabel>
                            <RadioGroup row aria-label="region" id="console" value={gameConsole} onChange={handleChangeGameConsole}>
                              <FormControlLabel value="N64" control={<Radio />} label="Nintendo 64" />
                              <FormControlLabel value="WII_VC" control={<Radio />} label="Wii VC" />
                              <FormControlLabel value="WII_U_VC" control={<Radio />} label="Wii U VC" />
                            </RadioGroup>
                          </Box>
                        }
                        control={control}
                        defaultValue="N64"
                        rules={{
                          required: 'Required'
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="isEmulated"
                        as={
                          <Box>
                            <FormControlLabel
                              id="isEmulated"
                              control={<Checkbox id="isEmulated" />}
                              label="Emulated"
                            />
                          </Box>
                        }
                        control={control}
                        defaultValue="false"
                        rules={{
                          required: 'Required'
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="takenOn"
                        as={
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="takenOn"
                              label="Picture/Video Taken On"
                              format="yyyy-MM-dd"
                              variant="inline"
                              onChange={(e, data) => data}
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                          </MuiPickersUtilsProvider>
                        }
                        control={control}
                        // Set the seconds to zero - https://github.com/mui-org/material-ui-pickers/issues/1825
                        onChange={date => date && new Date(date.setSeconds(0))}
                        defaultValue=""
                        rules={{
                          required: 'Required'
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="notes"
                    as={
                      <TextField fullWidth id="notes" multiline label="Notes" />
                    }
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Required'
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button
                  id="reset"
                  type="button"
                  variant="contained"
                  onClick={reset}>
                  Reset
                </Button>
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button
                  id="submit"
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={() => console.log(getValues())}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  )
}
