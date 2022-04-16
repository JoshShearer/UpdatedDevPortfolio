import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";

export default function InfoArea(props) {
  const { title, description, iconColor, sx, vertical } = props;

  return (
    <Grid
      item
      justifyContent="center"
      alignText="center"
      alignItems="center"
      mx="auto"
    >
      <props.icon fontSize="large" color={iconColor} sx={sx} />

      <MKTypography variant="h4" alignText="center">{title}</MKTypography>
      <MKTypography variant="body2">{description}</MKTypography>
    </Grid>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray",
};

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  vertical: PropTypes.bool,
};
