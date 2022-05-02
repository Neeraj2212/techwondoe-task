import styled from "@emotion/styled"
import { Grid } from "@mui/material"

const ServicesStyle = styled(Grid)({
  ".button": {
    display: "inline-block",
    padding: "15px 30px 14px",
    borderRadius: "4px",
    WebkitTransition: ".2s",
    transition: ".2s",
    fontFamily: "proxima-nova,sans-serif",
    color: "#111",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  ".button-line": {
    border: ".5px solid #f7f7f7",
    borderRadius: "5px",
    backgroundColor: "transparent",
    color: "#f7f7f7",
  },

  " @media screen and (max-width: 479px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ".button": {
      width: "100%",
      textAlign: "center",
    },
  },
})

export default ServicesStyle
