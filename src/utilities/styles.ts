import background from "@assets/img/background-2.png"
import green from "@material-ui/core/colors/green"
import red from "@material-ui/core/colors/red"

export class Styles {
  static readonly tableCell = {color: "#FFFFFF", border: 0}
  static readonly tableHead = {backgroundColor: "#000000", opacity: 0.7}
  static readonly green = {color: green[500]}
  static readonly transparent = {backgroundColor: "transparent"}
  static readonly darkRed = {color: red[700]}

  static readonly centerFloating = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  }

  static readonly form = {padding: 16, margin: 'auto', maxWidth: "80%", opacity: 0.7}
  static readonly formPaper = {padding: 16}
  static readonly formScoreParts = {height: "100%", paddingTop: 5}
  static readonly formMultiOption = {height: "100%", paddingTop: 10}
  static readonly formEmulated = {height: "100%", paddingTop: 20}
  static readonly formProof = {height: "100%", paddingTop: 25}
  static readonly formButton = {marginTop: 16}
  static readonly formImage = {marginTop: 12, marginLeft: 16}
  static readonly formFilename = {marginTop: 24, marginLeft: 8}

  static readonly formBackground = {
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    backgroundRepeat: "repeat"
  }

  static readonly title = {fontFamily: "Roboto", fontSize: 36, color: "#FFFFFF"}

  static readonly leaderboardBackground = {
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    backgroundRepeat: "no-repeat"
  }

  static readonly button = {
    minWidth: 50,
    maxHeight: 30,
    backgroundColor: "transparent"
  }

  static readonly activeButton = {
    minWidth: 50,
    maxHeight: 30,
    backgroundColor: "rgba(250, 0, 0, 0.7)"
  }

  static readonly rulesButton = {
    minWidth: 50,
    maxHeight: 30
  }

  static readonly autocomplete = {
    minWidth: 200,
    height: 30
  }

  static readonly noDisplay = {display: 'none'}
}
