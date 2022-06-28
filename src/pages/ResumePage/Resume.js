import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import RenderSkills from "./Skills";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import {
  Grid,
  Card,
  Container,
  ButtonBase,
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";

import Footer from "layouts/sections/Footer/Footer";

import { ResumeDetails } from "pages/ResumePage/Details";
import profile from "assets/images/faces/Josh.png";
// Images
import bgImage from "assets/images/city-profile.jpg";

const Img = styled("img")({
  margin: "auto",
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
          <Grid container spacing={2}>
            <Grid item sx={{mx:'auto'}} xs={3}  >
              <ButtonBase sx={{ width: 200, height: 200 }}>
                <Img src={profile} />
              </ButtonBase>
              <br /><br />
              <MKTypography variant="h2" textAlign="center">
                Josh Shearer
              </MKTypography>
              <MKTypography variant="h4" fontWeight="light" textAlign="center" >
                Full Stack Blockchain Engineer
              </MKTypography>
              <MKTypography textAlign="center" >
              <LocationOnIcon />
                Seattle, WA
              </MKTypography>
              <br/>
              <MKTypography variant="h4" fontWeight="light" >
                360.461.3810
              </MKTypography>
              <br/>
              <MKTypography variant="h4">
                About Me
              </MKTypography>
              <MKTypography variant="body1">
                I enjoy building applications  that provide a great user experience and solve difficult problems in a reliable way. 
              </MKTypography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="left"
              sx={{ textAlign: "left", my: 6, mx: "auto", px: 0.75 }}
            >
              <MKTypography variant="h4" fontWeight="bold" textAlign="center">
                Work Experience
              </MKTypography>
              <br />
              {ResumeDetails.Experience.jobs.map((job, key) => (
                <div>
                  <MKTypography variant="h6" fontWeight="bold">
                    {job.Company + " - " + job.Title}
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    {job.StartDate + " - " + job.EndDate}
                  </MKTypography>
                  <MKTypography variant="body2" color="black">
                    {job.Overview}
                  </MKTypography>
                  <br />
                  <ul>
                    {job.Bullets.map((point) => (
                      <MKTypography
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
              <MKTypography variant="h4" fontWeight="bold" textAlign="center">
                Education
              </MKTypography>
              {ResumeDetails.Education.Degrees.map((degree) => (
                <div>
                  <MKTypography variant="h6" fontWeight="bold">
                    {degree[0]}
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    {degree[1]}
                  </MKTypography>
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
