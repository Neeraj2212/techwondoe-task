import React, { useContext } from "react"
import CompanyContext from "context"
import { Company } from "types"

function MainComponent() {
  const company = useContext(CompanyContext) as Company
  return (
    <div>
      <h1>MainComponent</h1>
      <p>{company.title}</p>
      <img
        src={company.companyLogo.fields.file.url}
        alt="logo"
        style={{ backgroundColor: "black" }}
      />
    </div>
  )
}

export default MainComponent
