import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const [status, setStatus] = useState(false);
  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("session", session);
      setStatus(true);
    });
  }, []);
  return (
    <div>
      <div>{!status ? <h1>Please login</h1> : <h1>You are logged in</h1>}</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Status;
