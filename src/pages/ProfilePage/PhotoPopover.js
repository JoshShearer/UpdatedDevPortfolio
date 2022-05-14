import * as React from "react";
import {
  Grid,
  Typography,
  Slide,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Paper,
  createTheme,
  ThemeProvider,
  styled as muiStyled,
} from "@mui/material";
import styled from "styled-components";

const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function PhotoPopover(props) {
  const [classicModal, setClassicModal] = React.useState(false);

  const Image = styled.img`
    border-radius: 10px;
    max-width: 100%;
    max-height: 200px;
    &:hover {
        border: 1;
        border-color: "white";
        opacity: 0.5;
        }
  `

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  Transition.displayName = "Transition";

  const handleOpen = () => setClassicModal(true);
  const handleClose = () => {
      setClassicModal(false);
    //   window.location.reload();
  }

  return (
    <Grid item xs={12} sm={12} md={6} key={props.photoKey}>
      <Image
        src={props.src}
        onClick={handleOpen}
        key={props.photoKey}
      />
      <ThemeProvider theme={darkTheme}>
        <Dialog
          open={classicModal}
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle id="classic-modal-slide-title">
            <>
              <Typography variant="h5" color="#ffffff">
                <strong>Additional Information </strong>
              </Typography>
              <br />
            </>
          </DialogTitle>
          <DialogContent id="classic-modal-slide-description">
            {Object.entries(props.comment).map(([key, value]) => (
              <>
                <Typography variant="body2" color="#ffffff">
                  <strong>{key}: </strong>
                  {value}
                </Typography>
                {/* <br /> */}
              </>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </Grid>
  );
}
