import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";

import Footer from "layouts/sections/Footer/Footer";


// Images
import bgImage from "assets/images/city-profile.jpg";

function Resume() {
  return (
    <>
      {/* <PageHeader /> */}
      <HeaderOne
        bgImage={bgImage}
        title="Resume Page"
        subTitle="Work Experience"
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
          <Container>
            <Grid
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="left"
              sx={{ textAlign: "left", my: 6, mx: "auto", px: 0.75 }}
            >
              <MKTypography variant="h2" fontWeight="bold">
                A passion for challenging projects
              </MKTypography>
              <MKTypography variant="body1" color="text">
                Welcome. Check out some of the projects that I am working on. I
                enjoy web development and machine learning. In my free time I
                like to invest and automate the process of decision making.
                Click below to learn more.
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default Resume;
