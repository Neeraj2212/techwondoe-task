import React, { useContext } from "react"
import CompanyContext from "context"
import { Company } from "types"
import { Grid } from "@mui/material"
import ServicesStyle from "styles/services-style"

function ServicesComponent() {
  const { services, servicesGif } = useContext(CompanyContext) as Company
  return (
    <div style={{ margin: "auto 10%" }}>
      <Grid container spacing={2}>
        <ServicesStyle
          item
          xs={12}
          sm={4}
          sx={{
            alignSelf: "center",
          }}
        >
          <h4 className="sub-small-title">Our Services</h4>
          <h3 className="display-2 text-align-cenre-mobile">
            High quality <br />
            software<span className="text-gradient">.</span>
          </h3>
          <div className="margin-50px tet-align-centre-mobile margin-mobile-60">
            <ul>
              {services?.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <a
              href="/"
              target="_blank"
              className="button button-line margin-20px w-button"
            >
              learn more
            </a>
          </div>
        </ServicesStyle>
        <Grid item sm={8} sx={{ display: { xs: "none", sm: "block" } }}>
          <img
            src={servicesGif?.fields.file.url}
            alt="services-gif"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ServicesComponent
