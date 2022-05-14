/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem, Tooltip, Stack, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

// @mui/icons-material
import { Devices, LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

import MKTypography from "components/MKTypography";

export default function HeaderLinks(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack direction="row" spacing={1} alignItems="flex-end">
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "inline", lg: "inline" },
          }}
        >
          <Link to="/projects-page">
            <IconButton size="large" onClick={0} color="white">
              <Devices />
              <MKTypography
                color="white"
                variant="h5"
                fontWeight="regular"
                marginLeft=".5rem"
              >
                Projects
              </MKTypography>
            </IconButton>
          </Link>

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
              href="https://www.instagram.com/j_shearer83"
              target="_blank"
              size="large"
              color="white"
            >
              <Instagram />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>

      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <IconButton
          size="large"
          color="white"
          onClick={handleClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MenuIcon />
        </IconButton>

        <Menu
        dense
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          justifyContent="center"
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/projects-page">
              <IconButton size="large" onClick={0} color="black">
                <Devices />
              </IconButton>
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Tooltip
              id="instagram-github"
              title="Check out my Github"
              placement={window.innerWidth > 959 ? "top" : "left"}
            >
              <IconButton
                href="https://github.com/JoshShearer"
                target="_blank"
                size="large"
                color="black"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Tooltip
              id="instagram-linkedin"
              title="My LinkedIn"
              size="large"
              placement={window.innerWidth > 959 ? "top" : "left"}
            >
              <IconButton
                href="https://www.linkedin.com/in/joshshearer/"
                target="_blank"
                color="black"
              >
                <LinkedIn />
              </IconButton>
            </Tooltip>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Tooltip
              id="instagram-tooltip"
              title="Follow me on instagram"
              placement={window.innerWidth > 959 ? "top" : "left"}
            >
              <IconButton
                href="https://www.instagram.com/j_shearer83"
                target="_blank"
                size="large"
                color="black"
              >
                <Instagram />
              </IconButton>
            </Tooltip>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}
