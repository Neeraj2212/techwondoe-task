import styled from "@emotion/styled"
import { Grid } from "@mui/material"

const WhyUsStyles = styled(Grid)({
  textAlign: "left",
  margin: "10% 10% 0 10%",

  " @media screen and (max-width: 479px)": {
    ".sub-small-title": {
      textAlign: "center",
      margin: "50px 0",
    },
  },
})

export default WhyUsStyles
