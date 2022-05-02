import MainComponentStyle from "styles/main-style"
import React from "react"
import BlogsComponent from "./BlogsComponent"
import ClientsComponent from "./ClientsComponent"
import ContactComponent from "./ContactComponent"
import FooterComponent from "./FooterComponent"
import HeroComponent from "./HeroComponent"
import NavBar from "./NavBar"
import ServicesComponent from "./ServicesComponent"
import TestimonialComponent from "./TestimonialComponent"
import WhyUsComponent from "./WhyUsComponent"

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
