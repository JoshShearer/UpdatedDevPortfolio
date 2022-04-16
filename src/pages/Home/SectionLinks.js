import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
// @mui/icons-material

// core components
import { Grid } from "@mui/material";

import landing from "assets/images/landing.jpg";
import profile from "assets/images/profile.jpg";
import LargeCard from "components/Cards/LargeCard";
import MKTypography from "components/MKTypography";

// const useStyles = makeStyles(styles);

export default function SectionExamples() {
  // const classes = useStyles();
  return (
    <Grid container justify="center" spacing={4}>
      <Grid item xs={12} sm={12} md={6}>
      <Link to="landing-page" display="grid" minHeight="auto">
        <LargeCard image={landing} display="grid" minHeight="auto" />        
          <MKTypography align="center" >
            Work with me
          </MKTypography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
      <Link to="profile-page" display="grid" minHeight="auto">
        <LargeCard image={profile} display="grid" minHeight="auto" />        
          <MKTypography align="center">
            Learn More about Me
          </MKTypography>
        </Link>
      </Grid>
    </Grid>
  );
}
