/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";

// @mui/icons-material
import {
  Apps,
  Devices,
  LinkedIn,
  GitHub,
  Instagram,
  DeleteIcon,
} from "@mui/icons-material";

import MKTypography from "components/MKTypography";

export default function HeaderLinks(props) {
  return (
    <Stack direction="row" spacing={1} alignItems="flex-end">
      <Link to="/projects-page">
        <IconButton
          size="large"
          // color="transparent"
          // target="_blank"
          onClick={0}
          color="white"
        >
          <Devices />
          <MKTypography color="white" variant="h5">Projects</MKTypography>
        </IconButton>
      </Link>
      {/* </List>
      </List>
      <List item >
        {/*<Tooltip title="Delete">
          conButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
      <Tooltip
        id="instagram-github"
        title="Check out my Github"
        placement={window.innerWidth > 959 ? "top" : "left"}
      >
        <IconButton
          href="https://github.com/JoshShearer"
          target="_blank"
          size="large"
          color="white"
          // color="transparent"
        >
          <GitHub />
        </IconButton>
      </Tooltip>

      <Tooltip
        id="instagram-linkedin"
        title="My LinkedIn"
        size="large"
        placement={window.innerWidth > 959 ? "top" : "left"}
      >
        <IconButton
          // color="transparent"
          href="https://www.linkedin.com/in/joshshearer/"
          target="_blank"
          color="white"
        >
          <LinkedIn />
        </IconButton>
      </Tooltip>

      <Tooltip
        id="instagram-tooltip"
        title="Follow me on instagram"
        placement={window.innerWidth > 959 ? "top" : "left"}
      >
        <IconButton
          // color="transparent"
          href="https://www.instagram.com/j_shearer83"
          target="_blank"
          size="large"
          color="white"
        >
          <Instagram />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
