import Box from "@material-ui/core/Box"
import FormControl from "@material-ui/core/FormControl"
import IconButton from "@material-ui/core/IconButton"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import {Rules} from "@utils/rules"
import {Styles} from "@utils/styles"
import React from "react"
import {Controller} from "react-hook-form"
import {Control} from "react-hook-form/dist/types/form"

interface ProofImageInputButtonProps {
  control: Control
  onImageUpload: (arg0: any) => void
}

export const ProofImageInputButton = ({control, onImageUpload}: ProofImageInputButtonProps) => {
  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        name="proofImage"
        as={
          <Box>
            <input accept="image/*"
                   id="proofImage"
                   name="proofImage"
                   key="fileInput"
                   style={Styles.noDisplay}
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
        rules={Rules.proofImage}
      />
    </FormControl>
  )
}
