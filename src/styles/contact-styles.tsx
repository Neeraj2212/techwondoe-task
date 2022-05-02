import styled from "@emotion/styled"

const ContactStyles = styled("div")({
  marginTop: "10%",
  marginRight: "0",
  marginLeft: "0",
  paddingRight: "10%",
  paddingLeft: "10%",
  borderTop: "1px solid #f7f7f7",
  borderBottom: "1px solid #f7f7f7",

  ".container": {
    display: "block",
    maxWidth: "1600px",
    marginRight: "auto",
    marginLeft: "auto",
    order: "-1",
    flex: "1",
    margin: "5% auto",
  },

  ".field-label-form": {
    fontFamily: "proxima-nova,sans-serif",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    textAlign: "left",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },

  label: {
    display: "block",
    marginBottom: "5px",
  },
  ".w-input, .w-select": {
    display: "block",
    width: "100%",
    height: "38px",
    padding: "8px 12px",
    marginBottom: "10px",
    fontSize: "14px",
    lineHeight: "1.42857143",
    color: "#333",
    verticalAlign: "middle",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
  },

  ".text-field": {
    height: "52px",
    marginBottom: "40px",
    paddingTop: "10px",
    border: ".5px solid #f7f7f7",
    borderRadius: "5px",
    backgroundColor: "transparent",
    fontFamily: "proxima-nova,sans-serif",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
  },

  ".text-field.area": {
    marginBottom: "0",
    paddingBottom: "55px",
    borderWidth: ".5px",
    height: "auto",
  },

  ".checkbox-flex": {
    display: "flex",
    marginTop: "10px",
    flexWrap: "wrap",
    textAlign: "left",
  },

  ".w-checkbox": { display: "block", marginBottom: "5px", paddingLeft: "20px" },
  ".checkbox-field": {
    width: "100%",
    marginTop: "5px",
    marginRight: "15px",
    marginBottom: "10px",
  },

  ".checkbox": {
    width: "16px",
    height: "16px",
    marginRight: "7px",
    borderRadius: "4px",
    backgroundColor: "#fff",
  },

  ".checkbox-select": {
    position: "relative",
    top: "2px",
    marginLeft: "15px",
    fontFamily: "proxima-nova,sans-serif",
    color: "#f7f7f7",
    fontSize: "15px",
    fontWeight: "400",
    textAlign: "left",
  },

  ".w--redirected-checked": {
    borderStyle: "none",
    borderColor: "#ff4e50",
    backgroundColor: "#20222e",
    backgroundSize: "5px",
    color: "#111",
  },
  ".w-checkbox-input--inputType-custom.w--redirected-checked": {
    backgroundImage:
      "url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg)",
    backgroundPosition: "50% 50%",
    backgroundSize: "10px",
    backgroundRepeat: "no-repeat",
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

  " @media screen and (max-width: 479px)": {
    ".sub-small-title": {
      textAlign: "center",
      margin: "50px 0",
    },
  },
})

export default ContactStyles
