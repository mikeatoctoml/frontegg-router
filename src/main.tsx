import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";
import { FronteggAppOptions, FronteggProvider } from "@frontegg/react";
import PublicRoutePage from "./routes/PublicRoutePage";
import PrivateRoutePage from "./routes/PrivateRoutePage";
import ProtectRoute from "./frontegg/ProtectRoute";
import { useAuthActions } from "@frontegg/react";

const fronteggOptions: FronteggAppOptions = {
  contextOptions: {
    baseUrl: "https://...",
    clientId: "...",
  },
  hostedLoginBox: true,
  authOptions: {
    keepSessionAlive: true,
  },
};

const App = () => {
  return (
    <FronteggProvider {...fronteggOptions}>
      <AuthInit />
      <Outlet />
    </FronteggProvider>
  );
}

const AuthInit = () => {
  const actions = useAuthActions();
  useEffect(() => {
    actions.initHostedLoginSilent();
  }, []);
  return null;
}

export const routes = createRoutesFromElements(
  <Route
    path='/*'
    element={ <App />}
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
