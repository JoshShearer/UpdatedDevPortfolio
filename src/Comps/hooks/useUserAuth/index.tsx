import { FirestoreWS } from "#src/utils/AuthProvider/firebase";
import { getAuth } from "firebase/auth";
import { FirebaseAppWS } from "#src/utils/AuthProvider/firebase";

import { createStructuredSelector } from "#src/models/utils";
import { useSelector } from "#src/models/hooks";

const defaultProps = {
  idKey: "default",
} as {
  idKey?: string;
  children?: JSX.Element;
};
const selector = createStructuredSelector({
  isDark: (root) => root.models_UI.isDark,
});

const db = FirestoreWS;
console.log("🚀 ~ file: index.tsx:35 ~ db:", db)

export const Comps_hooks_useUserAuth = (_props?: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  const selected = useSelector(selector);

  const auth = FirebaseAppWS;
  const userAuth = getAuth();

  return {
    auth,
    userAuth,
  };
};
