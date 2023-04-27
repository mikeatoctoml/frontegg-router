import { FC, useEffect } from 'react';
import { useLoginWithRedirect, useAuthUserOrNull, useIsAuthenticated } from "@frontegg/react";

const ProtectRoute: FC = (props) => {
  const user = useAuthUserOrNull();
  const isAuthenticated = useIsAuthenticated();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if(!isAuthenticated) {
      loginWithRedirect();
    }
  }, [loginWithRedirect, isAuthenticated])

  if (isAuthenticated && user)
    return <>{props.children}</>;
  return null;
};

export default ProtectRoute;
