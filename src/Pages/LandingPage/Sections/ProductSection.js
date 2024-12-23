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
        {products.map((product, prodKey) => 
          <Grid item xs={2} sm={2} md={3} key={prodKey}>         
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
        </Grid>
</MKBox>
  );
}
