import { ThemeProvider } from "@mui/material/styles"
import { createClient } from "contentful"
import React, { useEffect, useState } from "react"
import MainComponent from "./components/MainComponent"
import CompanyContext from "./context"
import theme from "./theme"
import { Company, ContextObject } from "./types"

function App() {
  const [company, setCompany] = useState<ContextObject>({})

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID as string,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN as string,
    })

    const entries = async () => {
      const data = await client.getEntry<Company>(
        process.env.REACT_APP_ENTRY_ID as string,
        {
          content_type: "company",
          select: "fields",
        }
      )
      return data
    }

    entries().then((data) => {
      setCompany(data.fields)
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CompanyContext.Provider value={company}>
        <MainComponent />
      </CompanyContext.Provider>
    </ThemeProvider>
  )
}

export default App
