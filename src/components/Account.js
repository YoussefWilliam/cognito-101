import React, { createContext } from "react";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

import Pool from "../UserPool";

const AccountContext = createContext();

const Account = ({ children }) => {
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((error, session) => {
          if (error) reject(error);
          resolve(session);
        });
      } else {
        reject();
      }
    });
  };

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });
      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });
      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("success", data);
          resolve(data);
        },
        onFailure: (err) => {
          console.log("error", err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("new pass", data);
          resolve(data);
        },
      });
    });
  };

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };
  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
