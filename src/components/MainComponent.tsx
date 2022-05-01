import React, { useContext } from "react"
import CompanyContext from "context"
import { Company } from "types"
import NavBar from "./NavBar"
import HeroComponent from "./HeroComponent"
import ServicesComponent from "./ServicesComponent"

function MainComponent() {
  const company = useContext(CompanyContext) as Company
  return (
    <div>
      <NavBar />
      <HeroComponent />
      <ServicesComponent />
    </div>
  )
}

export default MainComponent
