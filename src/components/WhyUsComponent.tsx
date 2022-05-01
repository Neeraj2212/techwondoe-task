import React, { useContext } from "react"
import CompanyContext from "context"
import { Company } from "types"
import { Grid } from "@mui/material"
import WhyUsStyles from "styles/whyus-styles"

function WhyUsComponent() {
  const { speciality } = useContext(CompanyContext) as Company
  return (
    <WhyUsStyles>
      <h4 className="sub-small-title text-align-centre-mobile">why us?</h4>
      <Grid container columnSpacing={2} rowSpacing={3}>
        {speciality?.map((item) => (
          <>
            <Grid item xs={12} sm={6}>
              <h3 className="display-2">{item.header}</h3>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ul>
                {item.properties?.map((property) => (
                  <li key={property}>{property}</li>
                ))}
              </ul>
            </Grid>
          </>
        ))}
      </Grid>
    </WhyUsStyles>
  )
}

export default WhyUsComponent
