import React, { useContext } from "react"
import CompanyContext from "context"
import { Company } from "types"
import HeroStyle from "styles/hero-style"

function HeroComponent() {
  return (
    <HeroStyle>
      <div className="wrapper">
        <div className="subhead">
          <h4>WE’RE EXPERIENCED SOFTWARE PRODUCT BUILDERS</h4>
        </div>
        <div className="mainhead">
          <h1>
            Kickass software
            <br />
            development<span className="text-gradient">.</span>
          </h1>
        </div>
        <div className="button-flex">
          <a href="/" className="button w-button">
            ENQUIRE NOW
          </a>
          <div className="horizontal-divider" />
          <a href="/" className="button button-line">
            view case studies
          </a>
        </div>
      </div>
    </HeroStyle>
  )
}

export default HeroComponent
