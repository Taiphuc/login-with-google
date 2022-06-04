import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { Spin } from "antd";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true)

  React.useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
      console.log("User: ", { user });
      if (user) {
        const { displayName, email, uid, photoUrl } = user;
        setUser({ displayName, email, uid, photoUrl });
        setIsLoading(false);
        history.push("/after");
        return;
      }

      setIsLoading(false);
      history.push('/login');
    });

    return () => {
      unsubcribed();
    };
  }, []);

  console.log("User", user);

  return <AuthContext.Provider value={{user}}>{isLoading ? <Spin/> : children}</AuthContext.Provider>;
}
