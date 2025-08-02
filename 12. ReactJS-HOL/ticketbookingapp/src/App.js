import React, { useState } from 'react';

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function UserGreeting() {
  return (
    <>
      <h1>Welcome back</h1>
    </>
  );
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {}
      <style>
        {`
          .App {
            text-align: center;
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          button {
            padding: 8px 12px;
            margin-top: 10px;
            cursor: pointer;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
        `}
      </style>
      <div className="App">
        {}
        <Greeting isLoggedIn={isLoggedIn} />
        
        {}
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogoutClick} />
        ) : (
          <LoginButton onClick={handleLoginClick} />
        )}
      </div>
    </>
  );
}

export default App;
