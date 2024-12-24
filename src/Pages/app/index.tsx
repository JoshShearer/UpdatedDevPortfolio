import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import {
  Comps_routers_Primary,
} from "#src/Comps/routers/Primary";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  Comps_misc_loading,
} from "#src/Comps";

import firebase from "firebase/compat/app";

export const Pages_app = () => {
  const [initialAuthCheckCompleted, setInitialAuthCheckCompleted] =
    useState(true);

  function renderContent() {
    if (!initialAuthCheckCompleted) {
      return <Comps_misc_loading />;
    }
    return (
      <main id="scrollableDiv" className="App">
          <RouterProvider router={Comps_routers_Primary} />
      </main>
    );
  }

  return renderContent();
};
