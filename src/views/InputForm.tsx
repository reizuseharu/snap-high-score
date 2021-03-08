// @ts-nocheck
import {ATTACK_VARIANTS} from "../services/LeaderboardAttack"
import {toBase64, convertDateToLocalString} from "../services/utility"
import background from "../assets/img/background.png"
import {PhotoCamera} from "@material-ui/icons"
import React, { useState }  from 'react'
import { Form } from 'react-final-form'
import { useForm } from 'react-hook-form'
import {
  Autocomplete,
  Checkboxes,
  DatePicker,
  TextField,
  Radios,
} from 'mui-rff'
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline, IconButton, makeStyles, Theme, createStyles,
} from "@material-ui/core"
import Navbar from "./Navbar"

import DateFnsUtils from '@date-io/date-fns'

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}
const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.pokemon) {
    errors.pokemon = 'Required'
  }
  if (!values.score) {
    errors.score = 'Required'
  }
  if (!values.region) {
    errors.region = 'Required'
  }
  if (!values.console) {
    errors.console = 'Required'
  }
  return errors
}

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

const attackVariants = Array.from(ATTACK_VARIANTS.keys())

export function InputForm() {
  const classes = useStyles()
  const { register } = useForm()
  const [imageFile, setImageFile] = useState("")
  const [attackVariant, setAttackVariant] = useState(attackVariants[0])
  const [boardVariants, setBoardVariants] = useState(ATTACK_VARIANTS.get(attackVariant))

  const onChange = async (e) => {
    const file = e.target.files[0]
    const fileData = await toBase64(file)
    setImageFile(fileData)
  }

  const onVariantChange = (e, attackVariant) => {
    setAttackVariant(attackVariant)
    setBoardVariants(ATTACK_VARIANTS.get(attackVariant))
  }

  const gatherAllData = (values) => {
    const formValues = {
      ...values,
      imageData: imageFile,
      takenOn: convertDateToLocalString(values.takenOn)
    }
    return JSON.stringify(formValues, 0, 2)
  }

  return (
    <div id="container" style={{
      backgroundImage: `url(${background})`,
      backgroundAttachment: "fixed",
      height: "200%",
      backgroundRepeat: "repeat"
    }}
    >
    <Navbar/>
    <div style={{ padding: 16, margin: 'auto', maxWidth: "80%" }}>
      <CssBaseline />
      <Typography variant="h5" align="center" component="h1" gutterBottom>
        High Score Submission
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          isEmulated: false,
          console: 'N64',
          region: 'NTSC-JPN',
          takenOn: new Date(),
        }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate
                style={{backgroundColor: "#000000", opacity: 0.7}}>
            <Paper style={{ padding: 16 }}>
              <Grid container>
                <Grid container xs={6} direction="column">
                  <Grid xs={12} container alignItems="flex-start" spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="username"
                        fullWidth
                        required
                        type="text"
                        label="Username"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Autocomplete
                        name="leaderboard"
                        label="Leaderboard"
                        multiple={false}
                        required={true}
                        options={attackVariants}
                        onChange={onVariantChange}
                        getOptionLabel={(option) => option}
                        getOptionValue={(option) => option}
                        renderOption={(option) => option}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Autocomplete
                        name="variant"
                        label="Variant"
                        multiple={false}
                        required={true}
                        options={boardVariants}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        fullWidth
                        required
                        name="score"
                        type="number"
                        label="Score"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField name="videoLink" label="Video Link" />
                    </Grid>
                    <Grid item xs={2}>
                      <input accept="image/*"
                             name={"proofImage"}
                             ref={register}
                             key="fileInput"
                             className={classes.input}
                             onChange={onChange}
                             id="icon-button-file" type="file" />
                      <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container xs={6} direction="column">
                  <Grid container spacing={0} alignItems="center">
                    <Grid item>
                      <Radios
                        label="Region"
                        name="region"
                        required={true}
                        data={[
                          { label: 'NTSC-USA', value: 'NTSC-USA' },
                          { label: 'NTSC-JPN', value: 'NTSC-JPN' },
                          { label: 'PAL', value: 'PAL' },
                          { label: 'PAL-M', value: 'PAL-M' },
                        ]}
                        radioGroupProps={{ row: true }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Radios
                        label="Console"
                        name="console"
                        required={true}
                        data={[
                          { label: 'Nintendo 64', value: 'N64' },
                          { label: 'Wii VC', value: 'Wii VC' },
                          { label: 'Wii U VC', value: 'Wii U VC' },
                        ]}
                        radioGroupProps={{ row: true }}
                      />
                    </Grid>
                    <Grid item>
                      <Checkboxes
                        label=""
                        name="isEmulated"
                        required={true}
                        data={[{ label: 'Emulated', value: 'isEmulated' }]}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} alignItems="center">
                    <Grid item xs={12}>
                      <DatePicker
                        label="Picture/Video Taken On"
                        name="takenOn"
                        required={true}
                        dateFunsUtils={DateFnsUtils}
                        margin="normal"
                        variant="inline"
                        format="yyyy-MM-dd"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth name="notes" multiline label="Notes" />
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}>
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <pre><span style={{color: "#FFFFFF"}}>{gatherAllData(values)}</span></pre>
          </form>
        )}
      />
    </div>
  </div>
  )
}
