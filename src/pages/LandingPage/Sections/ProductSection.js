import React from "react";
import makeStyles from '@mui/styles/makeStyles';

// @mui/icons-material
import VPNKey from "@mui/icons-material/VpnKey";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Fingerprint from "@mui/icons-material/Fingerprint";
import FlightTakeoff from "@mui/icons-material/FlightTakeoff";
import SentimentVerySatisfied from "@mui/icons-material/SentimentVerySatisfied";
import TrendingUp from "@mui/icons-material/TrendingUp";
// core components
import Grid from "@mui/material/Grid";
import InfoArea from "./InfoArea.js";
import { Typography } from "@mui/material";
import MKBox from "components/MKBox/index.js";
import { products } from "./Products.js";

export default function ProductSection() {
  const iconComps = { VPNKey, VerifiedUser, Fingerprint, FlightTakeoff, SentimentVerySatisfied, TrendingUp };
  return (
    <MKBox sx={{ flexGrow: 1 }} >
        <Grid container spacing={{ xs: 10, md: 10 }} columns={{ xs: 10, sm: 8, md: 10 }} justifyContent="space-evenly" justifyItems="center" alignText="center" mx="auto">
        {products.map((product) => 
          <Grid item xs={2} sm={4} md={3} >         
            <InfoArea
              title={product.title}
              description={product.description}
              icon={iconComps[product.icon]}              
              iconColor={product.iconColor}
              sx={product.sx}
              vertical
            />              
          </Grid>
          )}
          {/* <Grid item xs={2} sm={4} md={3} >
            <InfoArea
              title="High Speed"
              description="We optimize the front end on the same technology used to makes websites and apps like facebook ultra fast despite the large datasets present."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </Grid>
          <Grid item xs={2} sm={4} md={3} >
            <InfoArea
              title="Scalable"
              description="We focus on the future of your business. From websites to apps to customer relationships.  We build solutions that are built to remain lighting fast requiring minimal upkeep as your business grows by magnitudes"
              icon={Fingerprint}
              // iconColor="danger"
              sx={{color: "#e53935"}}
              vertical
            />
          </Grid>
          <Grid item xs={2} sm={4} md={3} >
            <InfoArea
              title="Data Driven"
              description="We can help you put your data to use in a way that helps to grow your business.  Most data is collected but never completely utilized to drive improved sales and customer support."
              icon={TrendingUp}
              // iconColor="danger"
              sx={{color: "#e53935"}}
              vertical
            />
          </Grid>
          <Grid item xs={2} sm={4} md={3} >
            <InfoArea
              title="Deep Learning"
              description="You would be surprised what happens when you put your existing dataset to good use."
              icon={FlightTakeoff}
              // iconColor="danger"
              sx={{color: "#e53935"}}
              vertical
            />
          </Grid>
          <Grid item xs={2} sm={4} md={3} >
            <InfoArea
              title="Friends and Partners"
              description="We focus our business on helping our customers grow."
              icon={SentimentVerySatisfied}
              // iconColor="danger"
              sx={{color: "#e53935"}}
              vertical
            />
          </Grid> */}
        </Grid>
</MKBox>
  );
}
