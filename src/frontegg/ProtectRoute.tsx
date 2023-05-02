import { FC, useEffect } from 'react';
import { useLoginWithRedirect, useIsAuthenticated } from "@frontegg/react";

const ProtectRoute: FC = (props) => {
  const isAuthenticated = useIsAuthenticated();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if(!isAuthenticated) {
      loginWithRedirect();
    }
  }, [loginWithRedirect, isAuthenticated])

  if (isAuthenticated)
    return <>{props.children}</>;
  return null;
};

export default ProtectRoute;
