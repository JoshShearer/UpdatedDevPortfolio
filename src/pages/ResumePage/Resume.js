import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { styled } from '@mui/material/styles';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";

import Footer from "layouts/sections/Footer/Footer";

import { ResumeDetails } from "pages/ResumePage/Details";

// Images
import bgImage from "assets/images/city-profile.jpg";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function Resume() {
  return (
    <>
      {/* <PageHeader /> */}
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
          <Container>
            <Grid
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="left"
              sx={{ textAlign: "left", my: 6, mx: "auto", px: 0.75 }}
            >
            {ResumeDetails.Education.Degrees.map((degree) => 
            <div>
              <MKTypography variant="h2" fontWeight="bold">
                {degree[0]}
              </MKTypography>
              <MKTypography variant="body1" color="text"> 
              ` {degree[1]}
              </MKTypography>
              <BorderLinearProgress variant="determinate" value={50} />
              <LinearProgress variant="determinate" value={25} />
              </div>
              )
            }
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
