// @ts-nocheck
import {Autocomplete} from "@material-ui/lab"
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers"
import {LeaderboardType} from "../models/LeaderboardType"
import {toBase64, convertDateToLocalString, toCamelCase} from "../utilities/utility"
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
    console.log(getValues())
    console.log(data)
  }
  const [imageFile, setImageFile] = useState("")
  const [type, setType] = useState<LeaderboardType>(LeaderboardType.POKEMON)
  const [attackVariants, setAttackVariants] = useState<Map<string, string[]>>(new Map())
  const [attackSubVariants, setAttackSubVariants] = useState<string[]>([])
  const [value, setValue] = React.useState<string | null>(null)

  useEffect(() => {
    fetch('data/attackVariants.json')
      .then(result => result.json())
      .then(attackVariants_ => setAttackVariants(new Map<string, string[]>(Object.entries(attackVariants_))))
  }, [])

  useEffect(() => {
    console.log(value)
  }, [value])

  useEffect(() => {
    setAttackSubVariants(attackVariants.get(type) ?? [])
  }, [type])

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
                        name="leaderboard"
                        as={
                          <Autocomplete
                            id="leaderboard"
                            label="Leaderboard"
                            multiple={false}
                            required={true}
                            options={Array.from(attackVariants.keys())}
                            renderInput={params => <TextField {...params} label="Leaderboard" />}
                          />
                        }
                        control={control}
                        defaultValue="POKEMON"
                        rules={{
                          required: 'Required'
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="challenge"
                        as={
                          <Autocomplete
                            label="Challenge"
                            multiple={false}
                            required={true}
                            options={attackSubVariants}
                            renderInput={params => <TextField {...params} label="Challenge" />}
                          />
                        }
                        control={control}
                        defaultValue="Bulbasaur" // ! Fix
                        rules={{
                          required: 'Required'
                        }}
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
                            <RadioGroup row aria-label="region" id="region" value={value}>
                              <FormControlLabel value="NTSC_USA" control={<Radio />} label="NTSC-USA" />
                              <FormControlLabel value="NTSC_JPN" control={<Radio />} label="NTSC-JPN" />
                              <FormControlLabel value="PAL" control={<Radio />} label="PAL" />
                              <FormControlLabel value="PAL_M" control={<Radio />} label="PAL-M" />
                            </RadioGroup>
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
                <Grid container spacing={1}>
                  <Grid item>
                    <FormControl fullWidth variant="outlined">
                      <Controller
                        name="console"
                        as={
                          <Box>
                            <FormLabel component="legend">Console</FormLabel>
                            <RadioGroup row aria-label="region" id="console" value={value}>
                              <FormControlLabel value="N64" control={<Radio />} label="Nintendo 64" />
                              <FormControlLabel value="WII_VC" control={<Radio />} label="Wii VC" />
                              <FormControlLabel value="WII_U_VC" control={<Radio />} label="Wii U VC" />
                            </RadioGroup>
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
                        defaultValue=""
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
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                          </MuiPickersUtilsProvider>
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
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="reset"
                    as={
                      <Button
                        id="reset"
                        type="button"
                        variant="contained"
                        onClick={reset}>
                        Reset
                      </Button>
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
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="submit"
                    as={
                      <Button
                        id="submit"
                        variant="contained"
                        color="primary"
                        type="submit">
                        Submit
                      </Button>
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
          </form>
        </Paper>
      </Box>
    </Box>
  )
}
