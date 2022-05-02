import React, { useContext, useEffect, useRef, useState } from "react"
import CompanyContext from "context"
import { Company } from "types"
import { Grid } from "@mui/material"
import ContactStyles from "styles/contact-styles"

function CustomCheckbox({ domain }: { domain: string }) {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <label
      className="w-checkbox checkbox-field"
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <div
        className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox ${
          isChecked ? "w--redirected-checked" : ""
        }`}
        aria-hidden="true"
        onClick={() => setIsChecked(!isChecked)}
      />

      <input
        type="checkbox"
        id={domain}
        name={domain}
        data-name={domain}
        style={{
          opacity: 0,
          position: "absolute",
          zIndex: -1,
        }}
        checked={isChecked}
      />
      <span className="checkbox-select w-form-label">{domain}</span>
    </label>
  )
}

function ContactComponent() {
  const { domains } = useContext(CompanyContext) as Company
  return (
    <ContactStyles>
      <div className="container">
        <h4 className="sub-small-title">Contact</h4>
        <h3 className="display-2 text-align-cenre-mobile">
          Let&apos;s start
          <br />
          your project<span className="text-gradient">.</span>
        </h3>

        <Grid container spacing={5}>
          <Grid item sm={4} sx={{ display: { xs: "none", lg: "block" } }} />
          <Grid item xs={12} md={6} lg={4}>
            <div>
              <label htmlFor="Name-2" className="field-label-form">
                Name
              </label>
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                name="Name-2"
                data-name="Name 2"
                placeholder=""
                id="Name-2"
              />
              <label htmlFor="Email-3" className="field-label-form">
                Email Address
              </label>
              <input
                type="email"
                className="text-field w-input"
                maxLength={256}
                name="Email-2"
                data-name="Email 2"
                placeholder=""
                id="Email-2"
              />
              <label htmlFor="Text-Area-3" className="field-label-form">
                message
              </label>
              <textarea
                name="Text-Area-2"
                maxLength={5000}
                id="Text-Area-2"
                data-name="Text Area 2"
                placeholder=""
                className="text-field area w-input"
                spellCheck="false"
                defaultValue=""
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="div-block">
              <div className="checkbox-container">
                <label htmlFor="Text-Area-3" className="field-label-form">
                  what are you looking for
                </label>
                <div className="checkbox-flex">
                  {domains?.map((domain) => (
                    <CustomCheckbox domain={domain} />
                  ))}
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  style={{ width: "100%", marginTop: "20px" }}
                  defaultValue="Send Request"
                  data-wait="Please wait..."
                  className="button button-form w-button"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </ContactStyles>
  )
}

export default ContactComponent
