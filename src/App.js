import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";

import Home from "./pages/Home/Home";
import LandingPage from "pages/LandingPage/LandingPage";
import TechnicalPage from "pages/TechnicalPage/TechnicalPage";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import ProjectsPage from "pages/ProjectsPage/ProjectsPage";
import routes from "routes";


export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // const getRoutes = (allRoutes) =>
  // allRoutes.map((route) => {
  //   if (route.collapse) {
  //     return getRoutes(route.collapse);
  //   }

  //   if (route.route) {
  //     return <Route exact path={route.route} element={route.component} key={route.key} />;
  //   }

  //   return null;
  // });

return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
      {/* {getRoutes(routes)} */}
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/projects-page" element={<ProjectsPage />} />
      <Route path="/technical-page" element={<TechnicalPage />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </ThemeProvider>
);
}
