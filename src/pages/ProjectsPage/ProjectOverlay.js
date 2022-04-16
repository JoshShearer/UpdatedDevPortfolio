import React, { useState, forwardRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Close from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    backgroundColor: grey[800],
    color: grey[600],
    borderRadius: "10px"
  },
  media: {
    height: 280
  },
  avatar: {
    marginLeft: "auto"
  }
});
// const myUseStyles = makeStyles(styles);

export default function ProjectOverlay(props) {
  const [classicModal, setClassicModal] = useState(false);

  const classes = useStyles();
//   const classy = myUseStyles();
  const navImageClasses = classNames(
    classes.media,
    // props.className,
    // classy.Card
  );

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={() => setClassicModal(true)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
          </Grid>
          <CardMedia className={navImageClasses} image={props.imageLink} />
          <CardContent>
            <Typography variant="h5" gutterBottom component="div" color="#ffffff">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={classicModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setClassicModal(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle id="classic-modal-slide-title" className={classes.modalHeader}>
            {/* <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => setClassicModal(false)}
              justify="right"
            >
              <Close className={classes.modalClose} />
            </IconButton> */}
            <Typography variant="h4" className={classes.modalTitle} color="#000000">
              <strong>{props.title} Project</strong>
            </Typography>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <Typography variant="body2" color="#000000">
              <strong>Skills: </strong>
              {props.skills}
            </Typography>
            <Typography variant="body2" color="#000000">
              <strong>ToolSets Utilized: </strong>
              {props.toolset}
            </Typography>
            <Typography variant="body2" color="#000000">
              <strong>Notable Libraries: </strong>
              {props.notableLibraries}
            </Typography>
            <br />
            <Typography variant="body2" color="#000000">
              <strong>Project Overview</strong>
            </Typography>
            <Typography variant="p" color="#000000">{props.projectOverview}</Typography>
            <Typography variant="body2" color="#000000">
            <br />
              <strong>Key Lessons Learned</strong>
            </Typography>
            <Typography variant="p" color="#000000">{props.keyLessons}</Typography>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => setClassicModal(false)}
              // color="#ffffff"
              // simple
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <CardActions>
          <Button
            href={props.demoLink}
            size="large"
            target="_blank"
            // color="inherit"
            className={classes.avatar}
          >
            Demo
          </Button>
          <Button
            href={props.githubLink}
            size="large"
            target="_blank"
            // color="text.secondary"
          >
            Code
          </Button>
        </CardActions>
      </Card>
      <br />
    </div>
  );
}
