import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import axios from 'axios';


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
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [mail, setMail] = useState("");
  const [mess, setMess] = useState("");

  const handleChecked = () => setChecked(!checked);
  const sendEmail = () => {
    const reqString = `https://us-central1-mydevpage.cloudfunctions.net/email?to=${mail}&subject=${first+" " +last+" devpage inquiry"}&text=${mess}`
    console.log("🚀 ~ file: WorkSection.js ~ line 28 ~ sendEmail ~ reqString", reqString)
    const subject = `${first} ${last} devpage inquiry`
    axios
    // .get("http://joshshearer.org/", {mail, subject, mess})
    .get(reqString)
    .then(res =>(console.log("request success ", res), resolve(res)))
    .catch(err => (console.log("request failure ", err), reject(err)));
  }

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
                  <MKInput variant="standard" label="First Name" fullWidth onChange={(e) => setFirst(e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Last Name" fullWidth onChange={(e) => setLast(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    type="email"
                    label="Email Address"
                    onChange={(e) => setMail(e.target.value)}
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
                    onChange={(e) => setMess(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} alignItems="center" ml={-1}></Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton
                  type="submit"
                  variant="gradient"
                  color="dark"
                  fullWidth
                  onClick={sendEmail}
                >
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}
