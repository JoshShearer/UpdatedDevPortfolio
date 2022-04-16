import React from "react";
import { Link } from "react-router-dom";

// nodejs library to set properties for components
import PropTypes from "prop-types";
import makeStyles from "@mui/styles/makeStyles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
// @mui/icons-material
import Menu from "@mui/icons-material/Menu";
// core components
import HeaderLinks from "./HeaderLinks";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import { Container } from "@mui/material";

export default function PageHeader(props) {
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  // React.useEffect(() => {
  //   if (props.changeColorOnScroll) {
  //     window.addEventListener("scroll", headerColorChange);
  //   }
  //   return function cleanup() {
  //     if (props.changeColorOnScroll) {
  //       window.removeEventListener("scroll", headerColorChange);
  //     }
  //   };
  // });
  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };
  // const headerColorChange = () => {
  //   const { color, changeColorOnScroll } = props;
  //   const windowsScrollTop = window.pageYOffset;
  //   if (windowsScrollTop > changeColorOnScroll.height) {
  //     document.body
  //       .getElementsByTagName("header")[0]

  //       .getElementsByTagName("header")[0]

  //   } else {
  //     document.body
  //       .getElementsByTagName("header")[0]

  //       .getElementsByTagName("header")[0]

  //   }
  // };
  // const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;

  // const brandComponent = (
  //   <Button component={Link} to="/">
  //     {brand}
  //   </Button>
  // );
  return (
    <MKBox sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Link to="/">
            <IconButton
              // color="transparent"
              // target="_blank"
              onClick={0}
            >
              <MKTypography>Josh Shearer</MKTypography>
            </IconButton>
          </Link>
          <MKBox sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <HeaderLinks />
          </MKBox>
        </Container>
      </AppBar>
    </MKBox>
  );
}

// PageHeader.defaultProp = {
//   color: "white",
// };

// PageHeader.propTypes = {
//   color: PropTypes.oneOf([
//     "primary",
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "transparent",
//     "white",
//     "rose",
//     "dark",
//   ]),
//   rightLinks: PropTypes.node,
//   leftLinks: PropTypes.node,
//   brand: PropTypes.string,
//   fixed: PropTypes.bool,
//   absolute: PropTypes.bool,
//   // this will cause the sidebar to change the color from
//   // props.color (see above) to changeColorOnScroll.color
//   // when the window.pageYOffset is heigher or equal to
//   // changeColorOnScroll.height and then when it is smaller than
//   // changeColorOnScroll.height change it back to
//   // props.color (see above)
//   changeColorOnScroll: PropTypes.shape({
//     height: PropTypes.number.isRequired,
//     color: PropTypes.oneOf([
//       "primary",
//       "info",
//       "success",
//       "warning",
//       "danger",
//       "transparent",
//       "white",
//       "rose",
//       "dark",
//     ]).isRequired,
//   }),
// };
