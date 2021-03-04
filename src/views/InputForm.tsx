// @ts-nocheck
import {PhotoCamera} from "@material-ui/icons"
import React from 'react'
import { Form } from 'react-final-form'
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
// ! Date pulls UTC but shows EST on selection

const pokemon = [
  { name: 'Metapod', stage: 'RIVER' },
  { name: 'Poliwag', stage: 'RIVER' },
  { name: 'Magikarp', stage: 'VALLEY' },
  { name: 'Magikarp', stage: 'VOLCANO' },
  { name: 'Pikachu', stage: 'BEACH' },
]
const options = pokemon.map((option) => {
  const stage = option.stage[0]
  return {
    stage,
    ...option,
  }
})

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}
const validate = (values) => {
  const errors = {}
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

export function InputForm() {

  const classes = useStyles()
  return (
    <div id={"container"}>
    <Navbar/>
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Pokémon Snap
      </Typography>
      <Typography variant="h5" align="center" component="h2" gutterBottom>
        High Score Submission
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          isEmulated: false,
          console: 'N64',
          region: 'NTSC-JPN',
          takenOn: '2020-01-02',
        }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="username"
                    fullWidth
                    required
                    type="text"
                    label="Username"
                  />
                </Grid>
                <Grid item xs={7}>
                  <Autocomplete
                    name="pokemon"
                    label="Pokemon"
                    multiple={false}
                    required={true}
                    options={options.sort(
                      (a, b) => -b.stage.localeCompare(a.stage),
                    )}
                    groupBy={(option) => option.stage}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.name}
                    style={{ width: 200 }}
                    renderOption={(option) => option.name}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    required
                    name="score"
                    type="number"
                    label="Score"
                  />
                </Grid>
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
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={9}>
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
                </Grid>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={3}>
                    <Checkboxes
                      label=""
                      name="isEmulated"
                      required={true}
                      data={[{ label: 'Emulated', value: 'isEmulated' }]}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField name="videoLink" label="Video Link" />
                  </Grid>
                  <Grid item xs={6}>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </Grid>
                </Grid>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={6}>
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
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  </div>
  )
}
