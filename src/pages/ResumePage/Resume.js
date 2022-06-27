import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Line } from "rc-progress";
import SwipeableViews from "react-swipeable-views";
import { styled } from "@mui/material/styles";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import {
  AppBar,
  Tabs,
  Tab,
  createTheme,
  useTheme,
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
        <MKBox sx={{ p: 1 }}>
          <MKTypography>{children}</MKTypography>
        </MKBox>
      )}
    </div>
  );
}

function Resume() {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
          <Grid container spacing={2}>
            <Grid item sx={{mx:'auto'}}>
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
                I enjoy 
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
              <MKTypography variant="h4" fontWeight="bold" textAlign="center">
                Skills
              </MKTypography>
              <br />

              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  selectionFollowsFocus
                  // sx={{ height: 120 }}
                >
                  {Object.keys(ResumeDetails.Skills.Breakout).map(
                    (skill, sKey) => {
                      return <Tab label={skill} key={sKey} />;
                    }
                  )}
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                {Object.keys(ResumeDetails.Skills.Breakout).map(
                  (skills, sKey) => {
                    return (
                      <TabPanel
                        value={value}
                        dir={theme.direction}
                        index={sKey}
                      >
                        {ResumeDetails.Skills.Breakout[skills].map(
                          (skill, tabKey) => {
                            return (
                              <div>
                                <MKTypography variant="h5" fontWeight="bold">
                                  {skill[0]}
                                </MKTypography>
                                <Line
                                  percent={skill[1]}
                                  strokeWidth={3}
                                  strokeColor={skill[2]}
                                />
                              </div>
                            );
                          }
                        )}
                      </TabPanel>
                    );
                  }
                )}
              </SwipeableViews>

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
