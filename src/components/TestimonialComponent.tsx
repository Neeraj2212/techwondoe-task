import React, { useContext, useEffect, useRef, useState } from "react"
import CompanyContext from "context"
import { Company } from "types"
import { Grid } from "@mui/material"
import TestimonialStyles from "styles/testimonial-styles"

function TestimonialComponent() {
  const { testimonials } = useContext(CompanyContext) as Company
  const [currentIndex, setCurrentIndex] = useState(0)
  const allSlides = useRef<HTMLDivElement>()

  useEffect(() => {
    if (allSlides.current) {
      allSlides.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  return (
    <TestimonialStyles>
      <h4 className="sub-small-title">testimonials</h4>
      <h3 className="centered-display">
        What they&apos;re saying about us
        <span className="text-gradient">.</span>
      </h3>

      <div className="testimonial-wrapper">
        <div className="slide-nav w-slider-nav w-round">
          <div
            className={`w-slider-dot ${currentIndex === 0 && "w-active"}`}
            data-wf-ignore=""
            aria-label="Show slide 1 of 3"
            aria-pressed="false"
            aria-hidden="true"
            role="button"
            onClick={() => setCurrentIndex(0)}
          />
          <div
            className={`w-slider-dot ${currentIndex === 1 && "w-active"}`}
            data-wf-ignore=""
            aria-label="Show slide 2 of 3"
            aria-pressed="false"
            aria-hidden="true"
            role="button"
            onClick={() => setCurrentIndex(1)}
          />
          <div
            className={`w-slider-dot ${currentIndex === 2 && "w-active"}`}
            data-wf-ignore=""
            aria-label="Show slide 3 of 3"
            aria-pressed="true"
            aria-hidden="true"
            role="button"
            onClick={() => setCurrentIndex(2)}
          />
        </div>
        <div
          className="all-cards"
          ref={allSlides as React.LegacyRef<HTMLDivElement>}
        >
          {testimonials?.map((testimonial) => {
            const text: string =
              testimonial.fields?.thought?.content?.[0].content?.[0].value || ""

            return (
              <Grid
                container
                columnSpacing={3}
                sx={{
                  marginLeft: "0px",
                  marginRight: "0px",
                  flex: " 0 0 100%",
                }}
              >
                <Grid
                  xs={12}
                  md={3}
                  sx={{
                    display: { xs: "flex" },
                    justifyContent: { xs: "center" },
                  }}
                >
                  <img
                    src={testimonial.fields.avatar.fields.file.url}
                    alt={testimonial.fields.name}
                    className="testimonial-photo"
                  />
                </Grid>
                <Grid md={9} className="about-aut">
                  <div className="testimonials-name text-align-centre-mobile">
                    <br />
                    {testimonial.fields.name}, {testimonial.fields.designation}
                  </div>
                  <div className="testimonials-company text-align-centre-mobile">
                    {testimonial.fields.companyName}
                  </div>
                  <div className="testimonials-text text-align-centre-mobile">
                    {text}
                  </div>

                  <div>
                    <a href="/" className="button w-button">
                      view case study
                    </a>
                  </div>
                </Grid>
              </Grid>
            )
          })}
        </div>
      </div>
    </TestimonialStyles>
  )
}

export default TestimonialComponent
