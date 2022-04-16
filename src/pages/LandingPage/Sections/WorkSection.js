import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";

// @mui/icons-material

// core components
import { Container, Grid, Switch } from "@mui/material";
import Button from "@mui/material/Button";
// import Button from "components/CustomButtons/Button.js";
import Input from "@mui/material/Input";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

export default function WorkSection() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={10}
          lg={7}
          mx="auto"
          textAlign="center"
        >
          <MKTypography variant="h3" mb={1}>
            Work with Me
          </MKTypography>
          <MKTypography variant="body1">
            If you would like more information please enter your contact
            information below and we will get back to you within 24 hours.
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="First Name" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Last Name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    type="email"
                    label="Email Address"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="Your Message"
                    multiline
                    fullWidth
                    rows={6}
                  />
                </Grid>
                <Grid item xs={12} alignItems="center" ml={-1}>
                  {/* <Switch checked={checked} onChange={handleChecked} /> */}
                  {/* <MKTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    ml={-1}
                    sx={{ cursor: "pointer", userSelect: "none" }}
                    onClick={handleChecked}
                  >
                    &nbsp;&nbsp;I agree the&nbsp;
                  </MKTypography> */}
                  {/* <MKTypography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="regular"
                    color="dark"
                  >
                    Terms and Conditions
                  </MKTypography> */}
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton
                  type="submit"
                  variant="gradient"
                  color="dark"
                  fullWidth
                >
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
    // <div >
    //   <Grid container justify="center">
    //     <Grid item cs={12} sm={12} md={8}>
    //       <Typography variat="h2" >Work with me</Typography>
    //       <Typography variant="h4" >
    //         If you would like more information please enter your contact information below and we will get back to you within 24 hours.
    //       </Typography>
    //       <form>
    //         <Grid container spacing={4}>
    //           <Grid item xs={12} sm={12} md={6}>
    //             <Input
    //               labelText="Your Name"
    //               id="name"
    //               formControlProps={{
    //                 fullWidth: true
    //               }}
    //             />
    //           </Grid>
    //           <Grid item xs={12} sm={12} md={6}>
    //             <Input
    //               labelText="Your Email"
    //               id="email"
    //               formControlProps={{
    //                 fullWidth: true
    //               }}
    //             />
    //           </Grid>
    //           <Input
    //             labelText="Your Message"
    //             id="message"
    //             formControlProps={{
    //               fullWidth: true,

    //             }}
    //             inputProps={{
    //               multiline: true,
    //               rows: 5
    //             }}
    //           />
    //           <Grid container justify="center">
    //             <Grid item xs={12} sm={12} md={4} >
    //               <Button color="primary">Send Message</Button>
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //       </form>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}
