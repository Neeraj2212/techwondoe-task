import styled from "@emotion/styled"

const FooterStyles = styled("div")({
  padding: "80px 5%",
  borderStyle: "solid none none",
  borderWidth: "1px",
  borderColor: "#f7f7f7",
  borderRadius: ".5px",
  backgroundColor: "#000",

  ".container": {
    maxWidth: "1600px",
    marginRight: "auto",
    marginLeft: "auto",
  },

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
})

export default FooterStyles
