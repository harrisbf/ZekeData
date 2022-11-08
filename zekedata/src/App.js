import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import './App.css';

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      {isLoading && <div>Loading....</div>}
      {isAuthenticated && 
        <div>
          <p>{user.email}</p>
        </div>
      }
    </div>
  );
}

export default App;
