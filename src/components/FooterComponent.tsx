import { Grid } from "@mui/material"
import CompanyContext from "context"
import React, { useContext } from "react"
import FooterStyles from "styles/footer-style"
import { Company } from "types"

function FooterComponent() {
  const { companyLogo } = useContext(CompanyContext) as Company
  return (
    <FooterStyles>
      <Grid container rowSpacing={5} className="container">
        <Grid item xs={12}>
          <div className="footer-logo">
            <img
              src={companyLogo?.fields.file.url}
              loading="lazy"
              alt=""
              width={200}
            />
          </div>
        </Grid>

        <Grid item sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
          <div className="div-block-2">
            <a href="/about" className="text-link text-link-margin">
              About Us
            </a>
            <a href="/case-studies" className="text-link text-link-margin">
              Case Studies
            </a>
            <a href="/blog" className="text-link text-link-margin">
              Blog
            </a>
            <a href="/contact" className="text-link text-link-margin">
              Contact Us
            </a>
          </div>
        </Grid>

        <Grid item sm={6} sx={{ textAlign: { xs: "center", sm: "right" } }}>
          <div className="align-right">
            <a
              href="https://www.linkedin.com/company/techwondoe"
              className="text-link text-link-margin"
            >
              LinkedIN
            </a>
            <a
              href="mailto:hello@techwondoe.com"
              className="text-link text-link-margin"
            >
              Hello@techwondoe.coM
            </a>
          </div>
        </Grid>
      </Grid>
    </FooterStyles>
  )
}

export default FooterComponent
