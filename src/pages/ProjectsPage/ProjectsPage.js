import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
// import SectionLinks from "./SectionLinks.js";
import { MyProjects } from "./MyProjects";
import ProjectOverlay from './ProjectOverlay';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageHeader from 'layouts/sections/navigation/Header/PageHeader';
import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";
import SimpleFooter from "examples/Footers/SimpleFooter";
import Footer from "layouts/sections/Footer/Footer";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import { Button } from "@mui/material";
import { styled } from "@mui/styles";
import { grey } from "@mui/material/colors";

// Images
import bgImage from "assets/images/RioEvening.jpg";

const MyButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: grey[800],
    borderColor: '#0063cc',
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

// const myUseStyles = makeStyles(theme => ({
//     root: {
//       backgroundColor: grey[800],
//       color: grey[100],
//       left: "30%",
//       // right: "50%"
//     },
//     paper: {
//       padding: theme.spacing(1),
//       textAlign: "center",
//       color: theme.palette.text.secondary
//     }
//   }));
//   const useStyles = makeStyles(styles);
//   const classy = myUseStyles();


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
                  applications from Machine Learning with Python to Full Stack
                  Web Development based around Java and packages like React, Nextjs, and Typescript.
              </MKTypography>
              <MyButton
                  href="/technical-page"
                  size="large"
                  variant="contained"
                //   color="palette.primary.light"
                //   className={classy.root}
                >
                  <MKTypography variant="h5" color="#ffffff">Technical Tools</MKTypography>
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
        {/* <SectionLinks/> */}
        {/* <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>*/}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default ProjectsPage;
