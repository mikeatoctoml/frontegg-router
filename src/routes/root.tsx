import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <h1>This is the root.</h1>
      <Outlet />
    </div>
  );
};
