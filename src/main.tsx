import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { createBrowserHistory } from "history";
import { FronteggProvider } from "@frontegg/react";

import { Root } from "./routes/root";
import { Settings } from "./routes/settings";

export const routes = createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="settings" element={<Settings />} />
  </Route>
);

const router = createBrowserRouter(routes);
const history = createBrowserHistory();

const fronteggOptions = {
  contextOptions: {
    baseUrl: "",
    clientId: "",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FronteggProvider history={history} {...fronteggOptions}>
      <RouterProvider router={router} />
    </FronteggProvider>
  </React.StrictMode>
);
