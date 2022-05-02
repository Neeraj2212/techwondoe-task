import styled from "@emotion/styled"

export const BlogStyles = styled("div")({
  ".blog-image": {
    width: "100%",
    borderRadius: "5px",
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    WebkitTransition: ".3s",
    transition: ".3s",
  },

  ".blog-content": {
    display: "flex",
    minHeight: "200px",
    padding: "20px 20px 0 0",
    flexDirection: "column",
    alignItems: "flex-start",
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px",
    backgroundColor: "transparent",
  },
  ".card-meta-content": {
    display: "flex",
    width: "100%",
    paddingBottom: "15px",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "space-between",
    flex: "0 auto",
  },

  ".category-tag": {
    background: "linear-gradient(45deg, #F9D423, #FF4E50)",
    border: "1px solid transparent",
    transition: "0ms all !important",
    color: "#111111",
    display: "flex",
    padding: "5px 10px",
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: "5px",
    backgroundColor: "#ff4e50",
    fontSize: "12px",
    lineHeight: "12px",
    fontWeight: "700",
    textDecoration: "none",
    textTransform: "uppercase",
  },

  ".card-meta-date": {
    fontFamily: "proxima-nova,sans-serif",
    fontSize: "12px",
    lineHeight: "12px",
    textTransform: "uppercase",
  },

  ".link-block": {
    textDecoration: "none",
    color: "#f7f7f7",
  },

  ".link-block a": {
    marginBottom: "15px",
  },

  ".link.text-link-red": {
    marginTop: "10px",
    fontSize: "17px",
    lineHeight: "24px",
  },

  ".link": { color: "#ff4e50", fontWeight: "700", textDecoration: "none" },

  "@media screen and (max-width: 767px)": {
    ".blog-content": {
      marginBottom: "40px",
    },
  },
})

export const BlogsStyles = styled("div")({
  margin: "10%",

  ".sub-small-title": {
    textAlign: "center",
  },
  ".centered-display": {
    fontSize: "50px",
    lineHeight: "60px",
    textAlign: "center",
  },
  ".container": {
    maxWidth: "80%",
    marginTop: "5%",
    marginRight: "auto",
    marginLeft: "auto",
  },
})
