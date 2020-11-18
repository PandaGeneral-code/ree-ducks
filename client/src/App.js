import React from "react";

import { useAppHooks } from "./AppHooks";

const App = () => {
  const { login, logout, profile, setProfile, user } = useAppHooks();

  return (
    <div>
      <button disabled={user} onClick={() => login("Sasha")}>
        LOGIN SASHA
      </button>
      <button disabled={!user} onClick={() => logout()}>
        LOGOUT
      </button>
      <button onClick={() => setProfile("new profile")}>SET NEW PROFILE</button>
      <pre>{JSON.stringify({ profile, user }, null, 2)}</pre>
    </div>
  );
};

export default App;
