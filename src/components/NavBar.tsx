import React, { useContext, useRef, useState, useEffect } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import CompanyContext from "context"
import { Company } from "types"
import {
  Hamburger,
  MenuPart,
  MenuTextWrapper,
  Navigation,
} from "styles/navbar-style"

export default function NavBar() {
  const { companyLogo } = useContext(CompanyContext) as Company
  const [close, setClose] = useState(true)
  const NavigationBar = useRef<HTMLDivElement>(null)
  const toggleMenu = () => {
    setClose(!close)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ position: "relative", zIndex: 50 }}>
        <Toolbar style={{ padding: "10px 2% 10px 2%", minHeight: "90px" }}>
          <MenuPart onClick={toggleMenu}>
            <Hamburger>
              <div className={`line-1 line-1-${close}`} />
              <div className={`line-2 line-2-${close}`} />
            </Hamburger>
            <MenuTextWrapper>
              <div className={`menu-text menu-text-${close}`}>Menu</div>
              <div className={`close-text close-text-${close}`}>Close</div>
            </MenuTextWrapper>
          </MenuPart>
          <img
            src={companyLogo?.fields.file.url}
            alt="Company Logo"
            style={{
              width: "200px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
        </Toolbar>
      </AppBar>

      <Navigation show={!close} ref={NavigationBar}>
        <nav className={`nav nav-${!close}`}>
          <div className="nav-link">Home</div>
          <div className="nav-link">About</div>
          <div className="nav-link">Case Studies</div>
          <div className="nav-link">Blog</div>
          <div className="nav-link">Contact</div>
        </nav>
      </Navigation>
    </Box>
  )
}
