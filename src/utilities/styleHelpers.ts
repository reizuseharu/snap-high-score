import background from "@assets/img/background.png"
import green from "@material-ui/core/colors/green"
import red from "@material-ui/core/colors/red"

export const tableCellStyle = { color: "#FFFFFF", border: 0 }
export const tableHeadStyle = { backgroundColor: "#000000", opacity: 0.7 }
export const greenStyle = { color: green[500] }
export const transparentStyle = { backgroundColor: "transparent" }
export const darkRedStyle = { color: red[700] }

export const centerFloatingStyle = {
  position: 'absolute', left: '50%', top: '50%',
  transform: 'translate(-50%, -50%)'
}

export const formStyle = { padding: 16, margin: 'auto', maxWidth: "80%", opacity: 0.7 }
export const formPaperStyle = { padding: 16 }
export const formScorePartsStyle = {height: "100%", paddingTop: 5}
export const formMultiOptionStyle = { height: "100%", paddingTop: 10 }
export const formEmulatedStyle = { height: "100%", paddingTop: 20 }
export const formProofStyle = { height: "100%", paddingTop: 25 }
export const formButtonStyle = { marginTop: 16 }
export const formImageStyle = { marginTop: 12, marginLeft: 16 }
export const formFilenameStyle = { marginTop: 24, marginLeft: 8 }

export const formBackgroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundAttachment: "fixed",
  height: "200vh",
  backgroundRepeat: "repeat"
}

export const leaderboardTitleStyle = { fontFamily: "Roboto", fontSize: 36, color: "#FFFFFF" }

export const leaderboardBackgroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "500vh",
  backgroundRepeat: "repeat"
}

export const buttonStyle = {
  minWidth: 50,
  maxHeight: 30,
  backgroundColor: "transparent"
}

export const activeButtonStyle = {
  minWidth: 50,
  maxHeight: 30,
  backgroundColor: "rgba(250, 0, 0, 0.7)"
}

export const rulesButtonStyle = {
  minWidth: 50,
  maxHeight: 30
}

export const autocompleteStyle = {
  minWidth: 200,
  height: 30
}
