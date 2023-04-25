import React, { VFC } from 'react'
import { useAuthUser } from '@frontegg/react'
import fronteggLogo from "../frontegg/logo.svg";

const PrivateRoutePage: VFC = () => {
  const user = useAuthUser()
  console.log("PRIVATE");

  return  <div className="App">
    <header className="App-header">

      <div className="App-logo-container">
        <img src={fronteggLogo} className="Frontegg-logo-small" alt="logo"/>
      </div>

      <h2>Hello, {user.name}</h2>
      <h5>
        Private route page can be visited only by authorized users
      </h5>

    </header>
  </div>
}


export default PrivateRoutePage
