import styled from "@emotion/styled"

const HeroStyles = styled("div")({
  position: "relative",
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  padding: "115px 10% 160px",
  paddingTop: 0,
  paddingBottom: "45px",

  ".wrapper": {
    width: "100%",
  },

  ".subhead": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },

  ".subhead h4": {
    color: "#f7f7f7",
    fontSize: "16px",
    fontWeight: "400",
    letterSpacing: ".5px",
    textTransform: "uppercase",
    marginTop: "10px",
    marginBottom: "10px",
    fontFamily: "proxima-nova,sans-serif",
    lineHeight: "24px",
  },

  ".mainhead": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },

  ".mainhead h1": {
    color: "#f7f7f7",
    fontSize: "80px",
    lineHeight: "96px",
    letterSpacing: "-1px",
    marginTop: "20px",
    marginBottom: "10px",
    fontFamily: "NeueMachina,sans-serif",
    fontWeight: "300",
  },

  ".text-gradient": {
    background: "linear-gradient(45deg, #F9D423, #FF4E50)",
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
  },

  ".button-flex": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80px",
    textAlign: "center",
  },

  ".w-button": {
    background: "linear-gradient(45deg, #F9D423, #FF4E50)",
    border: "1px solid transparent",
    transition: "0ms all !important",
    color: "#111111",
  },

  ".button": {
    display: "inline-block",
    padding: "15px 30px 14px",
    borderRadius: "4px",
    backgroundColor: "#f9d423",
    WebkitTransition: ".2s",
    transition: ".2s",
    fontFamily: "proxima-nova,sans-serif",
    color: "#111",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  ".horizontal-divider": {
    width: "10px",
  },

  ".button-line": {
    border: ".5px solid #f7f7f7",
    borderRadius: "5px",
    backgroundColor: "transparent",
    color: "#f7f7f7",
  },

  " @media screen and (max-width: 991px)": {
    ".mainhead h1": {
      fontSize: "60px",
      lineHeight: "72px",
    },
  },
  " @media screen and (max-width: 767px)": {
    ".mainhead h1": {
      fontSize: "50px",
      lineHeight: "60px",
    },
  },
  " @media screen and (max-width: 479px)": {
    ".mainhead h1": {
      fontSize: "40px",
      lineHeight: "50px",
    },
    ".button-flex": {
      flexDirection: "column",
      marginTop: "40px",
    },
    ".horizontal-divider": {
      height: "20px",
    },
  },
})

export default HeroStyles
