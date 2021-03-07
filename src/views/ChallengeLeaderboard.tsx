// @ts-nocheck
import background from "../assets/img/background.png"
import { green } from '@material-ui/core/colors'
import {IconButton} from "@material-ui/core"
import { Image, YouTube, CheckCircle, Cancel } from '@material-ui/icons'
import {rankBackgroundColor, rankColor, rankImage} from "../services/rank"
import {isURLImage, isURLVideo, ordinal_suffix_of} from "../services/utility"
import React from "react"
import MUIDataTable from "mui-datatables"
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles"

const columns = [
  {
    name: "rank",
    label: "Rank",
    options: {
      filter: false,
      customBodyRender : (value, tableMeta, update) => {
        const rowIndex = tableMeta.rowIndex
        return ( <span style={rankColor(rowIndex)}><img src={rankImage(rowIndex)} alt=""/>{ordinal_suffix_of(rowIndex + 1)}</span>)
      }
    },
  },
  {
    name: "attacker",
    label: "Attacker",
    options: {
      filter: true
    }
  },
  {
    name: "score",
    label: "Score",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "submittedOn",
    label: "Submission Date",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    name: "platform",
    label: "Platform",
    options: {
      filter: true
    }
  },
  {
    name: "proofLink",
    label: "Proof",
    options: {
      filter: true,
      sort: false,
      customBodyRender : (value: string, tableMeta, update) => {
        const isImage: boolean = value ? isURLImage(value) : false
        const isVideo: boolean = value ? isURLVideo(value) : false
        return (
          <IconButton href={value} aria-label="link">
            { isImage && <Image /> }
            { isVideo && <YouTube /> }
          </IconButton>
        )
      }
    }
  },
  {
    name: "isVerified",
    label: "Verified",
    options: {
      filter: true,
      sort: false,
      customBodyRender : (value: boolean, tableMeta, update) => {
        const isVerified: boolean = value
        return (
          <div>
            { isVerified && <CheckCircle style={{ color: green[500] }}/> }
            { !isVerified && <Cancel color="secondary" /> }
          </div>
        )
      }
    }
  }
]

const data = [
  { attacker: "quo", score: 10000, submittedOn: "2021-01-16", platform: "NTSC-J • N64", proofLink: "https://youtu.be/5QfAKkI1pq4", isVerified: true },
  { attacker: "aKaFuKu", score: 10000, submittedOn: "2017-01-30", platform: "NTSC-J • N64", proofLink: "https://s3.eu-west-2.amazonaws.com/cyberscoreproofs/Proofs/25450/1306266.jpg", isVerified: true },
  { attacker: "packattack", score: 10000, submittedOn: "2005-04-15", platform: "NTSC-U • N64", proofLink: null, isVerified: true },
  { attacker: "feketerigo", score: 10000, submittedOn: "2018-12-01", platform: "NTSC-U • N64", proofLink: "/proofs/32216/1478993.jpg", isVerified: true },
  { attacker: "reizu", score: 12000, submittedOn: "2021-03-06", platform: "NTSC-J • N64", proofLink: null, isVerified: false },
]

const options = {
  filter: true,
  filterType: "dropdown",
  responsive: "vertical",
  selectableRows: "none",
  sort: false,
  downloadCsv: false,
  pagination: false,
  print: false,
  serverSide: true,
  setRowProps: (row, dataIndex, rowIndex) => {
    return {
      style: rankBackgroundColor(rowIndex)
    }
  },
  setCellHeaderProps: () => ({ style: {display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: 'row-reverse', borderBottom: 'none'}}),
  fixedHeader: true,
  fixedSelectColumn: true
}

export class ChallengeLeaderboard extends React.Component {
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: "#CBC3E3"
          },
          paper: {
            boxShadow: "none"
          }
        }
      }
    })

  render() {
    return (
      <div style={{
      height:"100vh",
      backgroundColor: "#99CCFF",
      backgroundImage: `url(${background})`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"}}>
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={"Challenge Leaderboard"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
      </div>
    )
  }
}
