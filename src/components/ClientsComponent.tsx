import React, { useContext } from "react"
import CompanyContext from "context"
import { Company } from "types"
import { Grid } from "@mui/material"
import ClientStyles from "styles/client-style"

function ClientsComponent() {
  const { clients } = useContext(CompanyContext) as Company
  return (
    <ClientStyles>
      <h1 className="display-2">Our happy clients.</h1>
      <Grid
        container
        columnSpacing={3}
        rowSpacing={3}
        sx={{ marginTop: "20px" }}
      >
        {clients?.map((client) => (
          <Grid
            item
            xs={6}
            sm={3}
            key={client.fields.title}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={client.fields.file.url}
              alt={client.fields.title}
              style={{
                maxHeight: "60px",
                height: "auto",
                width: "auto",
                maxWidth: "100%",
                alignSelf: "center",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </ClientStyles>
  )
}

export default ClientsComponent
