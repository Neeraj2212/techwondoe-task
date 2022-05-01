import styled from "@emotion/styled"

export const MenuPart = styled("div")({
  position: "absolute",
  left: "2%",
  top: "0",
  right: "auto",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  order: "-1",
  cursor: "pointer",

  " @media screen and (max-width: 767px)": {
    left: "5%",
  },
})

export const Hamburger = styled("div")({
  position: "relative",
  display: "flex",
  overflow: "hidden",
  width: "45px",
  height: "50px",
  alignItems: "center",

  ".line-1, .line-2": {
    position: "absolute",
    left: "0",
    right: "0",
    display: "block",
    width: "100%",
    height: "2px",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "hsla(0,0%,100%,.4)",
    transition: "all 0.3s cubic-bezier(.12,-0.6,.57,1.57)",
  },

  ".line-1-true": {
    zIndex: "2",
    transform:
      "translate3d(0px, -6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  },

  ".line-2-true": {
    transform:
      "translate3d(0px, 6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  },

  ".line-2-false": {
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  },

  ".line-1-false": {
    zIndex: "2",
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  },
})

export const MenuTextWrapper = styled("div")({
  position: "relative",
  overflow: "hidden",
  minWidth: "100px",
  marginLeft: "15px",
  paddingRight: "5px",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "700",
  letterSpacing: "5px",
  textTransform: "uppercase",

  ".menu-text": {
    position: "relative",
    zIndex: "2",
    fontFamily: "proxima-nova,sans-serif",
    color: "#fff",
    letterSpacing: "1px",
    transition: "all 0.3s cubic-bezier(.12,-0.6,.57,1.57)",
  },

  ".menu-text-true": {
    transform:
      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  },

  ".menu-text-false": {
    transform:
      "translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
    transformStyle: "preserve-3d",
  },

  ".close-text": {
    position: "absolute",
    left: "0",
    top: "0",
    right: "auto",
    bottom: "auto",
    zIndex: "1",
    transition: "all 0.3s cubic-bezier(.12,-0.6,.57,1.57)",
  },

  ".close-text-true": {
    transform:
      "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  },

  ".close-text-false": {
    transform:
      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
    transformStyle: "preserve-3d",
  },

  " @media screen and (max-width: 767px)": {
    ".menu-text , .close-text": {
      display: "none",
    },
  },
})

export const Navigation = styled("div")(({ show }: { show: boolean }) => ({
  position: "fixed",
  left: "0",
  right: "0",
  top: "0",
  bottom: "0",
  display: "flex",
  backgroundColor: "#111",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "5%",
  paddingLeft: "5%",
  height: "100vh",
  transition: "all 0.5s ease-in-out",
  opacity: show ? 1 : 0,
  zIndex: "1",
  visibility: show ? "visible" : "hidden",

  ".nav": {
    // display: "none",
    width: "100%",
    maxWidth: "1600px",
    transition: "all 0.5s ease-in-out",
  },

  ".nav-false": {
    transform:
      "translate3d(0px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
    transformStyle: "preserve-3d",
    opacity: "0",
    visibility: "hidden",
  },

  ".nav-true": {
    display: "block",
    visibility: "visible",
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
    transformStyle: "preserve-3d",
    opacity: 1,
  },

  ".nav > .nav-link": {
    fontSize: "60px",
    lineHeight: "60px",
    textAlign: "center",
    fontFamily: "NeueMachina,sans-serif",
    fontWeight: "300",
    color: "#fff",
    padding: "6px 0",
    transition: "all .3s",
  },

  ".nav > .nav-link:hover": {
    paddingLeft: "15px",
    backgroundImage: "linear-gradient(45deg, #F9D423, #FF4E50)",
    color: "transparent",
    backgroundClip: "text",
  },

  " @media screen and (max-width: 991px)": {
    ".nav > .nav-link": {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },
}))
