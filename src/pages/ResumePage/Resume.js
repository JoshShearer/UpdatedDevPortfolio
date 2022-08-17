import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import RenderSkills from "./Skills";

// @mui/icons-material
import {
  LinkedIn,
  GitHub,
  Instagram,
} from "@mui/icons-material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { Grid, Card, ButtonBase, Typography, IconButton, Tooltip, } from "@mui/material";
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
          <Grid
            container
            spacing={2}
            justify="center"
            justifyContent="center"
            display="flex"
          >
            <Grid item sx={{ mx: "auto" }} xs={3}>
              <ButtonBase sx={{ width: 200, height: 200, left: "25%" }}>
                <Img src={profile} />
              </ButtonBase>
              <br />
              <br />
              <Typography fontFamily="cambria" variant="h2" textAlign="center">
                Josh Shearer
              </Typography>
              <Typography
                fontFamily="cambria"
                variant="h4"
                fontWeight="light"
                textAlign="center"
              >
                Full Stack Developer
              </Typography>
              <Typography fontFamily="cambria" textAlign="center">
                <LocationOnIcon />
                Seattle, WA
              </Typography>
              <br />
              <Typography fontFamily="cambria" variant="h4" fontWeight="light">
                360.461.3810
              </Typography>
              <Typography fontFamily="cambria" variant="h4" fontWeight="light">
                <a href="mailto:ShearerJosh@hotmail.com">
                  SheareJosh@hotmail.com
                </a>
              </Typography>
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
              <Typography fontFamily="cambria" variant="h4">
                About Me
              </Typography>
              <br />
              <Typography fontFamily="cambria" variant="body1">
                I enjoy building applications that provide a great user
                experience and solve difficult problems without compromising
                reliability or security.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="left"
              sx={{ textAlign: "left", my: 6, mx: "auto", px: 0.75 }}
            >
              <Typography
                fontFamily="cambria"
                variant="h4"
                fontWeight="bold"
                textAlign="center"
              >
                Work Experience
              </Typography>
              <br />
              {ResumeDetails.Experience.jobs.map((job, key) => (
                <div>
                  <Typography
                    fontFamily="cambria"
                    variant="h5"
                    fontWeight="bold"
                  >
                    {job.Company + " - " + job.Title}
                  </Typography>
                  <Typography
                    fontFamily="cambria"
                    variant="h6"
                    color="text"
                    fontWeight="normal"
                    fontSize="16"
                    fontStyle="italic"
                  >
                    {job.StartDate + " - " + job.EndDate}
                  </Typography>
                  <Typography
                    fontFamily="cambria"
                    variant="body2"
                    color="black"
                  >
                    {job.Overview}
                  </Typography>
                  <br />
                  <ul>
                    {job.Bullets.map((point) => (
                      <Typography
                        fontFamily="cambria"
                        variant="body2"
                        color="black"
                        fontWeight="light"
                      >
                        <li>{point}</li>
                      </Typography>
                    ))}
                  </ul>
                  <br />
                </div>
              ))}
              <br />
              <RenderSkills Skills={ResumeDetails.Skills.Breakout} />
              <br />
              <Typography
                fontFamily="cambria"
                variant="h4"
                fontWeight="bold"
                textAlign="center"
              >
                Education
              </Typography>
              {ResumeDetails.Education.Degrees.map((degree) => (
                <div>
                  <Typography
                    fontFamily="cambria"
                    variant="h6"
                    fontWeight="bold"
                  >
                    {degree[0]}
                  </Typography>
                  <Typography fontFamily="cambria" variant="body2" color="text">
                    {degree[1]}
                  </Typography>
                </div>
              ))}
            </Grid>
          </Grid>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default Resume;
