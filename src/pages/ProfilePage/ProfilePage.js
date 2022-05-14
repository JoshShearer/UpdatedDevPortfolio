import * as React from "react";
import {
  Container,
  Grid,
  Card,
  useTheme,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Paper,
  createTheme,
  styled as muiStyled,
} from "@mui/material";

import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";

import {
  Camera,
  Favorite,
  Palette,
  TwoWheeler,
} from "@mui/icons-material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar/index";
import PhotoPopover from "./PhotoPopover";

import HeaderOne from "layouts/sections/navigation/HeaderOne/HeaderOne";

import Footer from "layouts/sections/Footer/Footer";

import styled from "styled-components";
// Images
import bgImage from "assets/images/IpanemaSunset.avif";
import avatar from "assets/images/profile-bg.jpg";
import profile from "assets/images/faces/Josh.png";
import { myTabs } from "./MyPhotos";

type TabPanelProps = {
  children?: React.ReactNode,
  dir?: string,
  index: number,
  value: number,
};

function TabPanel(props) {
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

const Item = muiStyled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

function ProfilePage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const Image = styled.img`
    border-radius: 8px;
    max-width: 100%;
    max-height: 200px;
  `;

  const iconComps = { Camera, Favorite, Palette, TwoWheeler };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <HeaderOne bgImage={bgImage} height="65vh" />
      <Card
        position="absolute"
        zIndex={0}
        marginLeft="auto"
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid container justifyContent="center" position="absolute">
          <MKAvatar src={profile} alt="Avatar" size="xxl" />
        </Grid>
        <MKBox component="section" my={6} py={6}>
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
                sx={{ bgcolor: "background.paper", width: 800, mx: "auto" }}
                justifyContent="center"
              >
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    selectionFollowsFocus
                    sx={{ height: 120 }}
                  >
                    {myTabs.map((tab, key) => {
                      const Icon = iconComps[tab.tabIcon];
                      return (
                        <Tab
                          iconPosition="bottom"
                          label={tab.tabButton}
                          icon={<Icon fontSize="large" />}
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
                  {myTabs.map((tab, tabKey) => {
                    return (
                      <TabPanel
                        value={value}
                        dir={theme.direction}
                        index={tabKey}
                      >
                        <Grid container spacing={2} key={tabKey}>
                          {tab.photos.map((photo, key) => (                            
                              <PhotoPopover {...photo} photoKey={key} />                          
                          ))}
                        </Grid>
                        <Typography variant="h6" gutterBottom component="div">
                          <br />
                          {tab.comment}
                        </Typography>
                      </TabPanel>
                    );
                  })}
                </SwipeableViews>
              </Box>
            </Grid>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default ProfilePage;
