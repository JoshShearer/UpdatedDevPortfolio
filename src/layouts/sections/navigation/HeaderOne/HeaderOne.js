// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import HeaderLinks from "../Header/HeaderLinks";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import { Devices } from "@mui/icons-material";

// Images

function HeaderOne(props) {
  return (
    <MKBox component="header" position="relative">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" spacing={3}>
            <Grid item xs>
              <Link to="/">
                <MKTypography
                  variant="h4"
                  color="white"
                  fontWeight="regular"
                  py={0.8125}
                  mr={2}
                >
                  Josh Shearer
                </MKTypography>
                <MKButton
                  variant="outlined"
                  color="white"
                  sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
                >
                  <MKBox component="i" color="white" className="fas fa-bars" />
                </MKButton>
              </Link>
            </Grid>
            <MKBox
              component="ul"
              display={{ xs: "6", lg: "flex" }}
              alignItems="right"
              p={0}
              m={0}
              sx={{ listStyle: "none" }}
            >
              <HeaderLinks />
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight={props.height}
        sx={{
          backgroundImage: `url(${props.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
          >
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {props.title}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              pr={6}
              mr={6}
            >
              {props.subTitle}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default HeaderOne;
