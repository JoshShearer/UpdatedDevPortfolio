import React, { useState, forwardRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import {
  CardActionArea,
  Slide,
  Typography,
  IconButton,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  Grid,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { grey } from "@mui/material/colors";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.primary",
  width: "5rem",
  height: "5rem",
};

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    backgroundColor: grey[800],
    color: grey[600],
    borderRadius: "10px",
  },
  media: {
    height: 280,
  },
  avatar: {
    marginLeft: "auto",
  },
});
// const myUseStyles = makeStyles(styles);

export default function ProjectOverlay(props) {
  const [classicModal, setClassicModal] = useState(false);

  const classes = useStyles();
  const navImageClasses = classNames(
    classes.media
  );

  return (
    <div>
      <Card
        className={classes.root}
        sx={{
          "&:hover": {
            // ...commonStyles,
            border: 1,
            borderRadius: 2,
            borderColor: "white",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <CardActionArea onClick={() => setClassicModal(true)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
          </Grid>
          <CardMedia className={navImageClasses} image={props.imageLink} />
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              color="#ffffff"
            >
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal,
          }}
          open={classicModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setClassicModal(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            className={classes.modalHeader}
          >
            <Typography
              variant="h4"
              className={classes.modalTitle}
              color="#000000"
            >
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
            <Typography variant="p" color="#000000">
              {props.projectOverview}
            </Typography>
            <Typography variant="body2" color="#000000">
              <br />
              <strong>Key Lessons Learned</strong>
            </Typography>
            <Typography variant="p" color="#000000">
              {props.keyLessons}
            </Typography>
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
        {props.demoLink && 
          <Button
            href={props.demoLink}
            size="large"
            target="_blank"
            // color="inherit"
            className={classes.avatar}
          >
            Demo
          </Button>}
          <Button
            href={props.githubLink}
            size="large"
            target="_blank"
            sx={{marginLeft:"auto"}}
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
