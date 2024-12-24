import React from "react";
import { Comps_layout_nav_header, Comps_layout_nav_footer, Comps_misc_loading } from "#src/Comps";
import { Outlet, useNavigation } from "react-router-dom";

export const Comps_routers_Root = () => {

  const navigation = useNavigation();

  return (
    <div className="Router_Render flex flex-col justify-between h-screen">
      <div className="Comps_layout_nav_header fixed top-0 left-0 right-0 z-50">
        <Comps_layout_nav_header />
      </div>
      <div className="React-Router-Outlet flex justify-center overflow-y-auto bg-light-background dark:bg-dark-background md:mt-20 2xl-w-max=[75%]">
        {/* Show loader when navigating */}
        {navigation.state === "loading" ? (
          <Comps_misc_loading />
        ) : (
          <Outlet />
        )}
      </div>
      <Comps_layout_nav_footer />
    </div>
  );
};
