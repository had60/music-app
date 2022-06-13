import React, { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";

import routers from "./router";
import { HashRouter } from "react-router-dom";

import HYAppHeader from "components/app-header";
import HYAppFooter from "components/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <HYAppHeader />
      {renderRoutes(routers)}
      <HYAppFooter />
    </HashRouter>
  );
});
