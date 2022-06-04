import AuthContext from "./AuthProvider";
import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { auth, db } from "./firebase/firebase";

function AfterLogin() {
  const user = useContext(AuthContext);
  const [redirect, setRedirect] = useState(null);
  console.log("login: ", user);

  useEffect(() => {
    if (!user) {
      setRedirect("/");
    }
  }, [user]);

  if (!redirect) {
    <Redirect to={redirect} />;
  }

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Log out successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Hello {user?.displayName}</p>
      <button onClick={logOut}>
        <span>Log out</span>
      </button>
    </div>
  );
}

export default AfterLogin;
