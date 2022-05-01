import styled from "@emotion/styled"
import { Grid } from "@mui/material"

const ServicesStyle = styled(Grid)({
  ".sub-small-title": {
    fontFamily: "proxima-nova,sans-serif",
    color: "#f7f7f7",
    fontSize: "16px",
    fontWeight: "400",
    letterSpacing: ".5px",
    textTransform: "uppercase",
  },

  ul: {
    marginTop: "0",
    marginBottom: "10px",
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingLeft: "0",
    fontFamily: "proxima-nova,sans-serif",
    fontSize: "20px",
    fontWeight: "300",
  },

  li: {
    position: "relative",
    marginBottom: "10px",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingLeft: "30px",
    color: "#f7f7f7",
    lineHeight: "30px",
    listStyleType: "none",
    whiteSpace: "normal",
  },

  "li:before": {
    content: '"↗"',
    position: "absolute",
    left: "0px",
    top: "-1px",
    fontFamily: '"NeueMachina"',
    fontSize: "26px",
    paddingRight: "20px",
    background: "linear-gradient(45deg, #F9D423, #FF4E50)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
  },

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
