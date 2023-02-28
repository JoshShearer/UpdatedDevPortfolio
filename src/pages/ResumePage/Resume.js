import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import RenderSkills from "./Skills";

// @mui/icons-material
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Grid, Card, ButtonBase, IconButton, Tooltip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";

import Footer from "layouts/sections/Footer/Footer";

import { ResumeDetails } from "pages/ResumePage/Details";
import profile from "assets/images/faces/Josh.png";
// Images
import bgImage from "assets/images/city-profile.jpg";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Resume() {
  return (
    <>
      <HeaderOne
        bgImage={bgImage}
        title="Resume Page"
        subTitle="Relevant Experience"
        height="50vh"
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox component="section" my={6} py={6}>
          {/* <Container> */}
          <Grid
            container
            spacing={2}
            justify="center"
            justifyContent="center"
            display="flex"
          >
            {/* <Container> */}
              <Grid item sx={{ mx: "auto" }} xs={12} lg={3}>
                <Grid display="flex" flexDirection="row" justifyContent="center">
                  <ButtonBase sx={{ width: 200, height: 200, }} >
                    <Img src={profile} />
                  </ButtonBase>
                </Grid>
                <br />
                <br />
                <MKTypography
                  fontFamily="cambria"
                  variant="h2"
                  textAlign="center"
                  
                >
                  Josh Shearer
                </MKTypography>
                <MKTypography
                  fontFamily="cambria"
                  variant="h4"
                  fontWeight="light"
                  textAlign="center"
                >
                  Founder
                </MKTypography>
                <MKTypography
                  fontFamily="cambria"
                  variant="h4"
                  fontWeight="light"
                  textAlign="center"
                >
                  Lead Full Stack Developer
                </MKTypography>
                <MKTypography fontFamily="cambria" textAlign="center">
                  <LocationOnIcon />
                  Austin, TX
                </MKTypography>
                <br />
                <MKTypography
                  fontFamily="cambria"
                  variant="h4"
                  fontWeight="light"
                >
                  360.461.3810
                </MKTypography>
                <MKTypography
                  fontFamily="cambria"
                  variant="h4"
                  fontWeight="light"
                >
                  <a href="mailto:Josh.Shearer@Zenify.Dev">
                    Josh.Shearer@Zenify.Dev
                  </a>
                </MKTypography>
                <Tooltip
                  id="github"
                  title="Check out my Github"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                >
                  <IconButton
                    href="https://github.com/JoshShearer"
                    target="_blank"
                    size="large"
                    // color="secondary"
                  >
                    <GitHub />
                  </IconButton>
                </Tooltip>

                <Tooltip
                  id="linkedin"
                  title="My LinkedIn"
                  size="large"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                >
                  <IconButton
                    href="https://www.linkedin.com/in/joshshearer/"
                    target="_blank"
                    // color="secondary"
                  >
                    <LinkedIn />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  id="instagram-tooltip"
                  title="Follow me on instagram"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                >
                  <IconButton
                    href="https://www.instagram.com/j_shearer83"
                    target="_blank"
                    size="large"
                    // color="secondary"
                  >
                    <Instagram />
                  </IconButton>
                </Tooltip>
                <br />
                <br />
                <MKTypography fontFamily="cambria" variant="h4">
                  About Me
                </MKTypography>
                <br />
                <MKTypography fontFamily="cambria" variant="body1">
                  I enjoy building applications that provide a great user
                  experience and solve difficult problems without compromising
                  reliability or security.
                </MKTypography>
              </Grid>
            {/* </Container> */}
            <Grid
              item
              xs={10}
              lg={6}
              flexDirection="column"
              alignItems="left"
              sx={{ textAlign: "left", my: 6, mx: "auto", px: 1 }}
            >
              <MKTypography
                fontFamily="cambria"
                variant="h4"
                fontWeight="bold"
                textAlign="center"
              >
                Work Experience
              </MKTypography>
              <br />
              {ResumeDetails.Experience.jobs.map((job, key) => (
                <div>
                  <MKTypography
                    fontFamily="cambria"
                    variant="h5"
                    fontWeight="bold"
                  >
                    {job.Company + " - " + job.Title}
                  </MKTypography>
                  <MKTypography
                    fontFamily="cambria"
                    variant="h6"
                    color="text"
                    fontWeight="normal"
                    fontSize="16"
                    fontStyle="italic"
                  >
                    {job.StartDate + " - " + job.EndDate}
                  </MKTypography>
                  <MKTypography
                    fontFamily="cambria"
                    variant="body2"
                    color="black"
                  >
                    {job.Overview}
                  </MKTypography>
                  <br />
                  <ul>
                    {job.Bullets.map((point) => (
                      <MKTypography
                        fontFamily="cambria"
                        variant="body2"
                        color="black"
                        fontWeight="light"
                      >
                        <li>{point}</li>
                      </MKTypography>
                    ))}
                  </ul>
                  <br />
                </div>
              ))}
              <br />
              <RenderSkills Skills={ResumeDetails.Skills.Breakout} />
              <br />
              <MKTypography
                fontFamily="cambria"
                variant="h4"
                fontWeight="bold"
                textAlign="center"
              >
                Education
              </MKTypography>
              {ResumeDetails.Education.Degrees.map((degree) => (
                <div>
                  <MKTypography
                    fontFamily="cambria"
                    variant="h6"
                    fontWeight="bold"
                  >
                    {degree[0]}
                  </MKTypography>
                  <MKTypography
                    fontFamily="cambria"
                    variant="body2"
                    color="text"
                  >
                    {degree[1]}
                  </MKTypography>
                </div>
              ))}
            </Grid>
          </Grid>
          {/* </Container> */}
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default Resume;
