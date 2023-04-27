import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";
import { FronteggProvider } from "@frontegg/react";
import PublicRoutePage from "./routes/PublicRoutePage";
import PrivateRoutePage from "./routes/PrivateRoutePage";
import ProtectRoute from "./frontegg/ProtectRoute";
import { useLoginWithRedirect, useAuth } from '@frontegg/react'

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

  const { isAuthenticated } = useAuth();

  const loginWithRedirect = useLoginWithRedirect();
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

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
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
