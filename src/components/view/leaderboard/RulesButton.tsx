import {TabPanel} from "@components/TabPanel"
import {a11yProps} from "@helpers/props"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Typography from "@material-ui/core/Typography"
import {Styles} from "@utils/styles"
import React, {useState} from "react"

interface RulesButtonProps {
  generalRules: string[] | undefined
  allCategoryRules: string[] | undefined
}

export const RulesButton = ({generalRules, allCategoryRules}: RulesButtonProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [tabIndex, setTabIndex] = useState<number>(0)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleTabChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => setTabIndex(newTabIndex)

  return (
    <>
      <Button variant="contained" size="small" style={Styles.rulesButton} color="primary" onClick={handleClickOpen}>Rules</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Rules"}</DialogTitle>
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label="simple tabs example">
          <Tab label="General Rules" {...a11yProps(0)} />
          <Tab label="Category Rules" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          {generalRules?.map(rule => <Typography gutterBottom>{rule}</Typography>)}
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          {allCategoryRules?.map(rule => <Typography gutterBottom>{rule}</Typography>)}
        </TabPanel>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
