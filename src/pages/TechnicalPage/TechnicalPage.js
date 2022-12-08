import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
// import SectionLinks from "./SectionLinks.js";
import SkillSection from "./SkillSection.js";

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";

import Footer from "layouts/sections/Footer/Footer";

// Images
import bgImage from "assets/images/IguassuSunset.jpg";

function TechnicalPage() {
  return (
    <>
      {/* <PageHeader /> */}
      <HeaderOne bgImage={bgImage} height="65vh" />
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
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="left"
              sx={{ textAlign: "left", my: 6, mx: "auto", px: 0.75 }}
            >
              <MKTypography variant="h2" fontWeight="bold">
                Active Projects
              </MKTypography>
              <MKTypography variant="body1" color="text">
                My interests have led me to study and work on Machine Learning
                applications with Python, Front-End Web Development with React, Back-End Web Development with Node.js, MongoDB, and Express, and iOS/Android Mobile Development with React Native. I am currently working on a project bring automation and control to the masses via Automation As A Service (AaaS) for financially constrained manufacturing applications.
              </MKTypography>
            </Grid>
            <SkillSection />
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default TechnicalPage;
