import styled from "@emotion/styled"

const TestimonialStyles = styled("div")({
  margin: "10% 10% auto 10%",

  ".sub-small-title,.centered-display": {
    textAlign: "center",
  },

  ".centered-display": { fontSize: "50px", lineHeight: "60px" },

  ".testimonial-wrapper": {
    position: "relative",
    maxWidth: "80%",
    marginTop: "55px",
    marginRight: "auto",
    marginLeft: "auto",
    overflow: "hidden",
  },

  ".all-cards": {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
  },

  ".testimonial-photo": {
    width: "140px",
    height: "140px",
    marginRight: "auto",
    marginBottom: "20px",
    marginLeft: "0",
    borderRadius: "100%",
  },

  ".testimonials-name": {
    marginBottom: "5px",
    fontFamily: "NeueMachina,sans-serif",
    color: "#f7f7f7",
    fontSize: "26px",
    fontWeight: "400",
    textAlign: "left",
  },

  ".testimonials-company": {
    marginBottom: "40px",
    fontFamily: "proxima-nova,sans-serif",
    textAlign: "left",
    letterSpacing: ".5px",
    textTransform: "uppercase",
  },

  ".testimonials-text": {
    marginRight: "auto",
    marginBottom: "60px",
    marginLeft: "0",
    fontFamily: "proxima-nova,sans-serif",
    fontSize: "26px",
    lineHeight: "32px",
    fontWeight: "400",
    textAlign: "left",
    maxWidth: "870px",
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

  ".w-slider-dot": {
    marginLeft: "5px",
    marginRight: "5px",
    position: "relative",
    display: "inline-block",
    width: "1em",
    height: "1em",
    backgroundColor: "rgba(255,255,255,.4)",
    cursor: "pointer",
    margin: "0 3px .5em",
    transition: "background-color .1s,color .1s",
    borderRadius: "100%",
  },

  ".w-active": {
    backgroundColor: "#fff",
  },

  ".slide-nav": {
    position: "absolute",
    zIndex: 1,
    top: "150px",
    right: "auto",
    bottom: "auto",
    width: "140px",
    marginTop: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    fontFamily: "proxima-nova,sans-serif",
    fontSize: "9px",
    display: "flex",
    justifyContent: "center",
  },
})

export default TestimonialStyles
