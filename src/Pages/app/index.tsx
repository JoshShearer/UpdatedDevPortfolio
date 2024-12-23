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
  const selected = useSelector(selector);
  const { auth, userAuth } = Comps_hooks_useUserAuth();
  const [initialAuthCheckCompleted, setInitialAuthCheckCompleted] =
    useState(false);

  const applyUserTheme = Comps_hooks_useTheme();

  
  // Check Subscription status
  const fbAuth = getAuth(FirebaseAppWS);
  const [user, userLoading] = useAuthState(fbAuth);

  useEffect(() => {
    // dispatch.models_UI.setLoading(true);
    applyUserTheme();
    onAuthStateChanged(userAuth, (user: firebase.User) => {
      if (user) {
        user.getIdToken().then((token) => {
          // dispatch.models_userAuth.setUser(user);
          // dispatch.models_userAuth.setIsAuth(false);
          setInitialAuthCheckCompleted(true);
        });
      } else {
        console.log("user is null, credentials may not be valid");
        // dispatch.models_userAuth.setUser(null);
        // dispatch.models_userAuth.setIsAuth(false);
        setInitialAuthCheckCompleted(true);
      }
    });
    // dispatch.models_UI.setLoading(false);
  }, [initialAuthCheckCompleted]);

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
