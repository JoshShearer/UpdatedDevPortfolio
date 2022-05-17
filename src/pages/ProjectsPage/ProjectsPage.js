import React from "react";
import { Container, Grid, Card, Typography, Button} from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import SectionLinks from "./SectionLinks.js";
import { MyProjects } from "./MyProjects";
import ProjectOverlay from './ProjectOverlay';
// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";
import Footer from "layouts/sections/Footer/Footer";
import { styled, withStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

// Images
import bgImage from "assets/images/RioEvening.jpg";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const MyButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: grey[800],
    borderColor: '#0063cc',
    text:{
      primary:"#ffffff"
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: grey[900],
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

function ProjectsPage() {
  return (
    <>
     {/* <PageHeader /> */}
     <HeaderOne bgImage={bgImage} height='75vh' />
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
             <MKTypography variant="h2" fontWeight="bold" color="dark">
                Active Projects
              </MKTypography>
              <MKTypography variant="body1" color="dark">
                My interests have led me to study and work on many
                applications most recently web 3 and smart contracts based around Ethereum and Full Stack Web Development based around Java and packages like React, Nextjs, and Typescript.  Additionally, I have enjoyed learning and using the power of Python in applications focused on Machine Learning and WebScraping/Browser Automation.
              </MKTypography>
              <MyButton
                  href="/technical-page"
                  size="large"
                  variant="contained"
                //   color="palette.primary.light"
                //   className={classy.root}
                >
                  <WhiteTextTypography variant="h5" color="#ffffff">Technical Tools</WhiteTextTypography>
                </MyButton>
            </Grid>
          </Container>
        </MKBox>
        <MKBox sx={{ flexGrow: 1 }} justify="center">
          <Grid container spacing={2} justifyContent="center">
            {MyProjects.map((project, key) => (
              <Grid item xs md={4} key={key} >
                <ProjectOverlay {...project} />
              </Grid>
            ))}
            </Grid>
          </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default ProjectsPage;
