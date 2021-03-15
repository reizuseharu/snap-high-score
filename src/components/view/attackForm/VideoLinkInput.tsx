import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import {Rules} from "@utils/rules"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface VideoLinkInputProps {
  control: Control
}

export const VideoLinkInput = ({control}: VideoLinkInputProps) => {
  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        name="videoLink"
        as={
          <TextField id="videoLink" label="Video Link" />
        }
        control={control}
        defaultValue=""
        rules={Rules.videoLink}
      />
    </FormControl>
  )
}
