import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  LinkedIn,
  GitHub,
  Instagram,
  Camera,
  Favorite,
  Palette,
  TwoWheeler,
} from "@mui/icons-material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKAvatar from "components/MKAvatar/index";
// import SectionLinks from "./SectionLinks.js";

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageHeader from "layouts/sections/navigation/Header/PageHeader";
import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";
import SimpleFooter from "examples/Footers/SimpleFooter";
import Footer from "layouts/sections/Footer/Footer";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
import styled from "styled-components";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/IpanemaSunset.jpg";
import avatar from "assets/images/profile-bg.jpg";
import profile from "assets/images/faces/Josh.png";
import { myTabs } from "./MyPhotos";

function ProfilePage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const Image = styled.img`
    border-radius: 8px;
    max-width: 100%;
    max-height: 200px;
  `;

  const iconComps = { Camera, Favorite, Palette, TwoWheeler };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      {/* <PageHeader /> */}
      <HeaderOne bgImage={bgImage} height="65vh" />
      <Card
        position="absolute"
        zIndex={0}
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
        <Grid container justifyContent="center" position="absolute" zIndex={7}>
          <MKAvatar src={profile} alt="Avatar" size="xxl" />
        </Grid>
        <MKBox component="section" my={6} py={6}>
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="left"
              sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
            >
              <MKTypography variant="h3" fontWeight="bold" alignItems="center">
                Josh Shearer
              </MKTypography>
              <br />
              <MKTypography variant="h7" alignItems="center">
                DESIGNER, ENGINEER, DEVELOPER, TRAVELER, PHOTOGRAPHER
              </MKTypography>
              <br />
              {/* <MKSocialButton
                      iconOnly
                      circular
                      href="https://www.flickr.com/photos/badshearer"
                      target="_blank"
                    >
                      <GitHub />
                    </MKSocialButton>
                    <MKSocialButton
                      iconOnly
                      circular
                      href="https://www.instagram.com/j_shearer83"
                      target="_blank"
                    >
                      <LinkedIn />
                    </MKSocialButton>
                    <MKSocialButton
                      iconOnly
                      circular
                      href="https://www.linkedin.com/in/joshshearer/"
                      target="_blank"
                    >
                      <Instagram />
                    </MKSocialButton> */}
              <MKTypography variant="body2" color="text">
                A lifelong engineer with experience in fields ranging from
                product development to sales and industries involved with
                technology, manufacturing and marketing. I focus on working to
                design innovative, creative solutions for clients in various
                roles and industries.
              </MKTypography>
              <br />

              <Typography variant="body2" textAlign="left">
                “The small wisdom is like water in a glass: clear, transparent,
                pure. The great wisdom is like the water in the sea: dark,
                mysterious, impenetrable.”
              </Typography>
              <Typography variant="body2" textAlign="right" fontWeight="bold">
                -Rabindranath Tagore
              </Typography>
              <br />
              <br />
              <Box
                sx={{ bgcolor: "background.paper", width: 500 }}
                alignContent="center"
              >
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    {myTabs.map((tab, key) => {
                      const Icon = iconComps[tab.tabIcon];
                      return (
                        <Tab
                          label={tab.tabButton}
                          icon={<Icon fontSize="large" />}
                          // icon={<Camera fontSize="large" />}
                          // iconPosition="top"
                          key={key}
                        />
                      );
                    })}
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  {myTabs.map((tab, key) => {
                    return;
                    <TabPanel value={value} dir={theme.direction} index={key}>
                      {/* <Grid item xs={12} sm={12} md={4} key={key}> */}
                      {tab.photos.map((photo) => {
                        return (
                          <Image {...photo} src={photo.src} alt={photo.alt} />
                        );
                      })}
                      {/* </Grid> */}
                    </TabPanel>;
                  })}
                </SwipeableViews>
              </Box>
            </Grid>
          </Container>
        </MKBox>
        {myTabs.map((tab, key) => {
          return;
          {
            tab.photos.map((photo) => {
              <Image src={photo.src} alt={photo.alt} />;
            });
          }
        })}
        {/* <Grid container justify="center">
              <Grid item xs={12} sm={12} md={12} className={classes.navWrapper}>
                {Tabs.map((tab, key) => 
                
                )}
                      
              </Grid>
            </Grid> */}
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
                  <i twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i pinterest" />
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

export default ProfilePage;
