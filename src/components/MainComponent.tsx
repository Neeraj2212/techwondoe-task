import React, { useContext } from "react"
import CompanyContext from "context"
import { Company } from "types"
import MainComponentStyle from "styles/main-style"
import NavBar from "./NavBar"
import HeroComponent from "./HeroComponent"
import ServicesComponent from "./ServicesComponent"
import ClientsComponent from "./ClientsComponent"
import WhyUsComponent from "./WhyUsComponent"
import TestimonialComponent from "./TestimonialComponent"
import ContactComponent from "./ContactComponent"
import BlogsComponent from "./BlogsComponent"
import FooterComponent from "./FooterComponent"

function MainComponent() {
  return (
    <MainComponentStyle>
      <NavBar />
      <HeroComponent />
      <ServicesComponent />
      <ClientsComponent />
      <WhyUsComponent />
      <TestimonialComponent />
      <ContactComponent />
      <BlogsComponent />
      <FooterComponent />
      <div className="hero-left">
        <a href="/" className="text-link">
          Enquire Now
        </a>
      </div>

      <div className="hero-right">
        <a
          href="https://www.linkedin.com/company/techwondoe"
          className="text-link text-link-margin"
        >
          LinkedIn
        </a>
      </div>
    </MainComponentStyle>
  )
}

export default MainComponent
