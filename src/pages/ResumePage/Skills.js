import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  useTheme,
} from "@mui/material";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

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
        <MKBox sx={{ p: 1 }}>
          <MKTypography>{children}</MKTypography>
        </MKBox>
      )}
    </div>
  );
}

function CaptureSkills(Skills) {
    if ('All' in Skills){
        return Skills
    }
    const rawSkills = []
    Object.keys(Skills).forEach((key) => {
      return (rawSkills.push(...Skills[key]));
    })
    const All = {
      All: [...rawSkills]
    };
    return (Object.assign(Skills, All))
  }

const RenderSkills = (props) => {
    const Skills = props.Skills
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
          sx={{ height: 50 }}
        >
          {Object.keys(CaptureSkills(Skills)).map(
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
        {Object.keys(Skills).map((skills, sKey) => {
          return (
            <TabPanel value={value} dir={theme.direction} index={sKey}>
              {Skills[skills].map((skill, tabKey) => {
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
              })}
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </div>
  );
};

export default RenderSkills;