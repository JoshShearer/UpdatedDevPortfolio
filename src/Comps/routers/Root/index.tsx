import React, { useEffect, JSX } from "react";
import { Comps_layout_nav_header, Comps_layout_nav_footer } from "#src/Comps";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Comps_routers_Root = () => {
  return (
    <div className="Router_Render flex flex-col justify-between h-screen">
      <div className="Comps_layout_nav_header fixed top-0 left-0 right-0 z-50">
        <Comps_layout_nav_header />
      </div>
      <div className="React-Router-Outlet flex justify-center mt-20 md:mt-28 2xl-w-max=[75%]">
        <Outlet />
      </div>
      <Comps_layout_nav_footer />
    </div>
  );
};
