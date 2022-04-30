import React, { useEffect, useState } from "react"
import { createClient } from "contentful"
import MainComponent from "./components/MainComponent"
import { Blog, Company, ContextObject, Testimonial } from "./types"
import CompanyContext from "./context"

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
    <CompanyContext.Provider value={company}>
      <MainComponent />
    </CompanyContext.Provider>
  )
}

export default App
