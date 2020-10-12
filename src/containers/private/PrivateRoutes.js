import React from "react";
import routeConfig from "../../configs/routes";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../pages/NotFound";

function PrivateRoutes({ role, setRole }) {
  const nowRole = role || "guest";

  const allowedRoutes = routeConfig[nowRole];

  return (
    <Switch>
      {allowedRoutes.map((route) => (
        <Route key={route.url} exact path={route.url}>
          <route.page setRole={setRole} />
        </Route>
      ))}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default PrivateRoutes;
