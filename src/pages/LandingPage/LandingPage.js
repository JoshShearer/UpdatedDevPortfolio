import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";

import Footer from "layouts/sections/Footer/Footer";

import ProductSection from "./Sections/ProductSection.js";
import WorkSection from "./Sections/WorkSection.js";

// Images
import bgImage from "assets/images/Sunrise.jpg";

function LandingPage() {
  return (
    <>
      <HeaderOne
        bgImage={bgImage}
        height="75vh"
        title="Your Story Start's Here"
        subTitle="Big Ideas need Big Solutions.  We are here to help make sure that your new
                your new marketplace is built to grow with your
                business. We will utilize cutting edge technologies to unlock the 
                true potential of your business."
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
        <MKBox component="section" my={6} py={12}>
          <Container>
            <Grid
              container
              flexDirection="column"
              alignItems="left"
              sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
            >
              <MKTypography variant="h2">Let{"'"}s Talk Projects</MKTypography>
              <MKTypography variant="body1" color="text">
                We provide custom development solutions. Our focus in on small
                business and startup's that need to develop a scalable web
                presence in one or more of the following: eCommerce/Online
                shopping, iPhone/Android app development (React), data analysis
                and machine learning.
              </MKTypography>
              {/* <br /> */}
            </Grid>
          </Container>
          {/* <ProductSection /> */}
          <WorkSection />
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default LandingPage;
