import styled from "@emotion/styled"

const MainComponentStyle = styled("div")({
  position: "relative",

  ".text-link": {
    color: "#f7f7f7",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "400",
    textAlign: "left",
    letterSpacing: ".5px",
    textDecoration: "none",
    textTransform: "uppercase",
  },

  ".text-link.text-link-margin": {
    display: "inline",
    marginRight: "5px",
    marginLeft: "5px",
  },

  ".text-link:hover,.hero-right:hover,hero-left:hover": {
    background: "linear-gradient(45deg, #F9D423, #FF4E50)",
    color: "transparent",
    backgroundClip: "text",
  },

  ".hero-right": {
    position: "fixed",
    zIndex: "100",
    right: "2%",
    top: "50%",
    bottom: "calc(50vh)",
    transform: "rotate(-90deg) translateX(50%)",
  },

  ".hero-left": {
    position: "fixed",
    zIndex: "100",
    left: "2%",
    top: "50%",
    bottom: "calc(50vh)",
    transform: "rotate(90deg) translateX(-50%)",
  },

  "@media screen and (max-width: 767px) ": {
    ".hero-right,.hero-left": {
      display: "none",
    },
  },
})

export default MainComponentStyle
