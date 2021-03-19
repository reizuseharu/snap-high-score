// @ts-nocheck
import {AttackerInput} from "@components/view/attackForm/AttackerInput"
import {AttackFormTitle} from "@components/view/attackForm/AttackFormTitle"
import {ChallengeInput} from "@components/view/attackForm/ChallengeInput"
import {ConsoleInput} from "@components/view/attackForm/ConsoleInput"
import {EmulatedInput} from "@components/view/attackForm/EmulatedInput"
import {LeaderboardInput} from "@components/view/attackForm/LeaderboardInput"
import {NotesInput} from "@components/view/attackForm/NotesInput"
import {ProofImageInputButton} from "@components/view/attackForm/ProofImageInputButton"
import {RegionInput} from "@components/view/attackForm/RegionInput"
import {ResetButton} from "@components/view/attackForm/ResetButton"
import {ScoreInput} from "@components/view/attackForm/ScoreInput"
import {ScorePartsPoseInput} from "@components/view/attackForm/ScorePartsPoseInput"
import {ScorePartsSamePokemonInput} from "@components/view/attackForm/ScorePartsSamePokemonInput"
import {ScorePartsSizeInput} from "@components/view/attackForm/ScorePartsSizeInput"
import {ScorePartsSpecialInput} from "@components/view/attackForm/ScorePartsSpecialInput"
import {ScorePartsTechniqueInput} from "@components/view/attackForm/ScorePartsTechniqueInput"
import {ScorePartsTitle} from "@components/view/attackForm/ScorePartsTitle"
import {SubmissionImage} from "@components/view/attackForm/SubmissionImage"
import {SubmissionImageName} from "@components/view/attackForm/SubmissionImageName"
import {SubmitButton} from "@components/view/attackForm/SubmitButton"
import {TakenOnInput} from "@components/view/attackForm/TakenOnInput"
import {VideoLinkInput} from "@components/view/attackForm/VideoLinkInput"
import {Navbar} from "@components/view/Navbar"
import Box from "@material-ui/core/Box"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import {LeaderboardType} from "@models/LeaderboardType"
import {Styles} from "@utils/styles"
import {convertDateToLocalString, toBase64} from "@utils/utility"
import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {useAttackVariants} from "../hooks/leaderboard/useAttackVariants"

export const AttackForm = () => {
  const { handleSubmit, control, reset, getValues, setValue } = useForm()
  const [imageFile, setImageFile] = useState<string>("")
  const [imageFileName, setImageFileName] = useState<string>("")
  const [type, setType] = useState<string>(LeaderboardType.POKEMON)
  const [attackVariants, setAttackVariants] = useState<Map<string, string[]>>(new Map())
  const [attackSubVariants, setAttackSubVariants] = useState<string[]>([])

  useAttackVariants(setAttackVariants)

  useEffect(() => {
    setAttackSubVariants(attackVariants.get(type) ?? [])
  }, [attackVariants, type])

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

  return (
    <Box id="container" style={Styles.formBackground}>
      <Navbar/>
      <Box style={Styles.form}>
        <CssBaseline />
        <AttackFormTitle title={"High Score Submission"}/>
        <Paper style={Styles.formPaper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid container xs={6} direction="column">
                <Grid xs={12} container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <AttackerInput control={control}/>
                  </Grid>
                  <Grid item xs={6}>
                    <LeaderboardInput control={control} attackVariants={attackVariants} setType={setType} setValue={setValue}/>
                  </Grid>
                  <Grid item xs={6}>
                    <ChallengeInput control={control} attackSubVariants={attackSubVariants} challengeValue={getValues("challenge")}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container xs={6} direction="column">
                <Grid container spacing={0} alignItems="center">
                  <Grid item>
                    <RegionInput control={control}/>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item style={Styles.formMultiOption}>
                    <ConsoleInput control={control}/>
                  </Grid>
                  <Grid item>
                    <EmulatedInput control={control}/>
                  </Grid>
                </Grid>
              </Grid>
              <ScorePartsTitle/>
              <Grid container xs={12} alignItems="flex-start" spacing={2}>
                <Grid item xs={2}>
                  <ScoreInput control={control}/>
                </Grid>
                <Grid item xs={2}>
                  <ScorePartsSpecialInput control={control}/>
                </Grid>
                <Grid item xs={2}>
                  <ScorePartsSizeInput control={control}/>
                </Grid>
                <Grid item xs={2}>
                  <ScorePartsPoseInput control={control}/>
                </Grid>
                <Grid item xs={2}>
                  <ScorePartsSamePokemonInput control={control}/>
                </Grid>
                <Grid item xs={2}>
                  <ScorePartsTechniqueInput control={control}/>
                </Grid>
              </Grid>
              <Grid container xs={12} alignItems="flex-start" spacing={2}>
                <Grid item xs={5} style={Styles.formProof}>
                  <VideoLinkInput control={control}/>
                </Grid>
                <Grid item xs={1} style={Styles.formProof}>
                  <ProofImageInputButton control={control} onImageUpload={onImageUpload}/>
                </Grid>
                <Grid item xs={6}>
                  <TakenOnInput control={control}/>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <NotesInput control={control}/>
              </Grid>
              <Grid item style={Styles.formButton}>
                <ResetButton handleResetScoreAttack={reset}/>
              </Grid>
              <Grid item style={Styles.formButton}>
                <SubmitButton handleSubmitScoreAttack={handleSubmitScoreAttack}/>
              </Grid>
              <Grid item style={Styles.formImage}>
                <SubmissionImage imageFile={imageFile}/>
              </Grid>
              <Grid item style={Styles.formFilename}>
                <SubmissionImageName filename={imageFileName}/>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  )
}
