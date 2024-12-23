import React, { useState } from "react";
import { AppBar, Tabs, Tab, useTheme, ThemeProvider, Box, Typography } from "@mui/material";

import SwipeableViews from "react-swipeable-views";
import { Line } from "rc-progress";

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
        <Box sx={{ p: 1 }}>
          <Typography fontFamily="cambria">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function CaptureSkills(Skills) {
  if ("All" in Skills) {
    return Skills;
  }
  const rawSkills = [];
  Object.keys(Skills).forEach((key) => {
    return rawSkills.push(...Skills[key]);
  });
  const All = {
    All: [...rawSkills],
  };
  return Object.assign(Skills, All);
}

const RenderSkills = (props) => {
  const Skills = props.Skills;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const theme = useTheme();

  return (
    <div>
      <Typography fontFamily="cambria" variant="h4" fontWeight="bold" textAlign="center">
        Skills
      </Typography>
      <br />

      <AppBar position="sticky"  >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          // indicatorColor="primary"
          // textColor="inherit"
          // variant="fullWidth"
          aria-label="full width tabs example"
          selectionFollowsFocus
          // variant="scrollable"
          allowScrollButtonsMobile
          // orientation="vertical"
          // scrollButtons
          sx={{ height: 60, fontFamily:'cambria', fontWeight:'bold', mx:'10', px:'10', '&:hover':{color:"#cccccc"}, background: 'white'}}
        >
          {Object.keys(CaptureSkills(Skills)).map((skill, sKey) => {
            return <Tab label={skill} key={sKey} sx={{mx:'10', px:'10',}} />;
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {Object.keys(Skills).map((skills, sKey) => {
          return (
            <TabPanel value={value} dir={theme.direction} index={sKey}>
              {Skills[skills].map((skill, tabKey) => {
                return (
                  <div>
                    <Typography fontFamily="cambria" variant="h5" fontWeight="bold" >
                      {skill[0]}
                    </Typography>
                    <Line
                      percent={skill[1]}
                      strokeWidth={3}
                      strokeColor={skill[2]}
                    />
                  </div>
                );
              })}
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </div>
  );
};

export default RenderSkills;
