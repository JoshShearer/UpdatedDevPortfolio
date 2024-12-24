import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Pages_app } from "#src/Pages/app";
import { Comps_misc_loading } from "#src/Comps";

import "#src/index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

const AppContent = () => (
  <React.StrictMode>
    <Pages_app />
  </React.StrictMode>
);

if (rootElement?.hasChildNodes()) {
  hydrateRoot(rootElement, <AppContent />);
} else {
  root.render(<AppContent />);
}
