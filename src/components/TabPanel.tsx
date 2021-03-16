import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import {ReactNode} from "react"

interface TabPanelProps {
  children?: ReactNode
  index: any
  value: any
}

export const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
