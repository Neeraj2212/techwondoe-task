import React, { useContext } from "react"
import CompanyContext from "context"
import { Company } from "types"
import NavBar from "./NavBar"

function MainComponent() {
  const company = useContext(CompanyContext) as Company
  return (
    <div>
      <NavBar />
      <h1
        style={{
          fontSize: "5rem",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "400px",
        }}
      >
        Kickass Development
      </h1>
    </div>
  )
}

export default MainComponent
