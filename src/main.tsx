import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";
import { FronteggProvider } from "@frontegg/react";
import PublicRoutePage from "./routes/PublicRoutePage";
import PrivateRoutePage from "./routes/PrivateRoutePage";
import ProtectRoute from "./frontegg/ProtectRoute";

const fronteggOptions = {
  contextOptions: {
    baseUrl: "https://...",
    clientId: "...",
  },
  authOptions: {
    keepSessionAlive: true,
  }
};

const App = () => {
  return (<Outlet/>);
};

const history = createBrowserHistory();

export const routes = createRoutesFromElements(
  <Route
    path='/*'
    element={
      <FronteggProvider history={history} hostedLoginBox={true} {...fronteggOptions}>
        <App />
      </FronteggProvider>
    }
  >
    <Route path="" element={<PublicRoutePage/>}/>
    <Route path="private-route" element={<ProtectRoute><PrivateRoutePage/></ProtectRoute>}/>
  </Route>
);

const router = createBrowserRouter(routes);

console.log("ROUTES", JSON.stringify(routes));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
