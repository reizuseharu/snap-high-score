// @ts-nocheck
import background from "@assets/img/background.png"

import DateFnsUtils from "@date-io/date-fns"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import green from "@material-ui/core/colors/green"
import CssBaseline from "@material-ui/core/CssBaseline"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Image from "@material-ui/icons/Image"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import Autocomplete from "@material-ui/lab/Autocomplete"
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers"
import {LeaderboardType} from "@models/LeaderboardType"
import {convertDateToLocalString, toBase64, toTitleCase} from "@utils/utility"
import {Navbar} from "@views/Navbar"
import React, {useEffect, useState} from "react"
import {Controller, useForm} from "react-hook-form"

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
  const { handleSubmit, control, reset, getValues, setValue } = useForm()
  const [imageFile, setImageFile] = useState<string>("")
  const [imageFileName, setImageFileName] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)
  const [type, setType] = useState<string>(LeaderboardType.POKEMON)
  const [attackVariants, setAttackVariants] = useState<Map<string, string[]>>(new Map())
  const [attackSubVariants, setAttackSubVariants] = useState<string[]>([])
  const [region, setRegion] = useState<string>("NTSC_JPN")
  const [gameConsole, setGameConsole] = useState<string>("N64")

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

  const onImageUpload = (e) => {
    const file: File = e.target.files[0]

    setImageFileName(file.name)

    toBase64(file).then(imageData => setImageFile(imageData))

    console.log(`Uploaded a file: ${file.name}`)
  }

  const onSubmit = (data) => {
    console.log("submit")
    console.log(getValues())
    console.log(data)
  }

  const handleSubmitScoreAttack = () => {
    let values = getValues()
    console.log(values)
    values.takenOn = convertDateToLocalString(values.takenOn)
    values.score = parseInt(values.score)
    values.special = parseInt(values.special)
    values.size = parseInt(values.size)
    values.pose = parseInt(values.pose)
    values.samePokemon = parseInt(values.samePokemon)

    console.log(values)
  }

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
                              setValue("challenge", null)
                            }}
                            {...props}
                          />
                        )}
                        onChange={([, data]) => data}
                        defaultValue={""}
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
                            value={getValues("challenge")}
                            options={attackSubVariants}
                            getOptionLabel={(option) => toTitleCase(`${option}`)}
                            renderInput={(params) => <TextField {...params} label="Challenge"/>}
                            onChange={(e, data) => onChange(data)}
                            {...props}
                          />
                        )}
                        onChange={([, data]) => data}
                        defaultValue={""}
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
                  <Grid item style={{height: "100%", paddingTop: 10}}>
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
                      <FormControlLabel
                        style={{height: "100%", paddingTop: 20}}
                        control={
                          <Controller
                            name="isEmulated"
                            control={control}
                            render={(props) => (
                              <Checkbox
                                {...props}
                                id="isEmulated"
                                checked={props.value}
                                onChange={(e) => props.onChange(e.target.checked)}
                              />
                            )}
                            defaultValue={false}
                            rules={{
                              required: 'Required'
                            }}
                          />
                        }
                        label="Emulated"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <FormControl fullWidth variant="outlined" style={{height: "100%", paddingTop: 5}}>
                <FormLabel component="legend">Score Parts</FormLabel>
              </FormControl>
              <Grid container xs={12} alignItems="flex-start" spacing={2}>
                <Grid item xs={2}>
                    <Controller
                      name="special"
                      as={
                        <TextField
                          id="special"
                          fullWidth
                          required
                          type="number"
                          label="Special"
                        />
                      }
                      control={control}
                      defaultValue=""
                      rules={{
                        required: 'Required'
                      }}
                    />
              </Grid>
                <Grid item xs={2}>
                  <Controller
                    name="size"
                    as={
                      <TextField
                        id="size"
                        fullWidth
                        required
                        type="number"
                        label="Size"
                      />
                    }
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Required'
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Controller
                    name="pose"
                    as={
                      <TextField
                        id="pose"
                        fullWidth
                        required
                        type="number"
                        label="Pose"
                      />
                    }
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Required'
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
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
                    rules={{
                      required: 'Required'
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <FormControlLabel
                    style={{height: "100%", paddingTop: 10}}
                    control={
                      <Controller
                        name="isTechnique"
                        control={control}
                        render={(props) => (
                          <Checkbox
                            {...props}
                            id="isTechnique"
                            checked={props.value}
                            onChange={(e) => props.onChange(e.target.checked)}
                          />
                        )}
                        defaultValue={false}
                        rules={{
                          required: 'Required'
                        }}
                      />
                    }
                    label="Technique"
                  />
                </Grid>
              </Grid>
              <Grid container xs={12} alignItems="flex-start" spacing={2}>
                <Grid item xs={5} style={{height: "100%", paddingTop: 25}}>
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
                <Grid item xs={1} style={{height: "100%", paddingTop: 25}}>
                  <FormControl fullWidth variant="outlined">
                    <Controller
                      name="proofImage"
                      as={
                        <Box>
                          <input accept="image/*"
                                 id="proofImage"
                                 name="proofImage"
                                 key="fileInput"
                                 className={classes.input}
                                 onChange={onImageUpload}
                                 type="file" />
                          <label htmlFor="proofImage">
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
                <Grid item xs={6}>
                  <FormControl fullWidth variant="outlined">
                    <Controller
                      name="takenOn"
                      render={(props) => {
                        return (
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              autoOk
                              margin="normal"
                              id="takenOn"
                              label="Picture/Video Taken On"
                              variant="inline"
                              format="yyyy-MM-dd"
                              onChange={props.onChange}
                              selected={props.selected}
                              value={props.value}
                            />
                          </MuiPickersUtilsProvider>
                        )
                      }}
                      onChange={(date) => date}
                      control={control}
                      defaultValue={new Date(2020, 0, 1)}
                    />
                  </FormControl>
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
                  onClick={handleSubmitScoreAttack}>
                  Submit
                </Button>
              </Grid>
              <Grid item style={{ marginTop: 12, marginLeft: 16 }}>
                <>
                  <IconButton onClick={handleClickOpen} aria-label="link">
                    <Image style={(imageFile === "") ? {} : {color: green[500]}}/>
                  </IconButton>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogContent dividers>
                      <img src={imageFile} alt={"Proof Pic"} width="400" height="300"/>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              </Grid>
              <Grid item style={{ marginTop: 24, marginLeft: 8 }}>
                <Typography>
                  <Box fontWeight="fontWeightBold">
                    {imageFileName}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  )
}
