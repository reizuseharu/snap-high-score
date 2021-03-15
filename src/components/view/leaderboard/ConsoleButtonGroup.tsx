import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import {Console} from "@models/Console"
import {Styles} from "@utils/styles"
import React from "react"

interface ConsoleButtonProps {
  gameConsole: string
  handleConsoleChange: (gameConsole: Console) => void
}

export const ConsoleButtonGroup = ({gameConsole, handleConsoleChange}: ConsoleButtonProps) => {
  return (
    <ButtonGroup aria-label="button group">
      {[
        [Console.N64, "N64"],
        [Console.WII_VC, "Wii VC"],
        [Console.WIIU_VC, "WiiU VC"],
      ].map(([consoleType, consoleName]) => <Button size="small" disabled={ gameConsole === consoleType } style={ gameConsole === consoleType ? Styles.activeButton: Styles.button } onClick={() => {handleConsoleChange(consoleType as Console)}}>{consoleName}</Button>)}
    </ButtonGroup>
  )
}
