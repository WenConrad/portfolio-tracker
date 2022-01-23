import axios from "axios";

const { useState, createContext } = require("react");

export const authContext = createContext();

const AuthProvider = function (props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = function (credentials) {
    return axios
      .post("/users/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then((res) => {
        setUser(res.data.user.id);
        setAuth(true);
      });
  };

  const logout = function () {
    setAuth(false);
    setUser(null);
  };

  const providerData = { auth, user, login, logout };

  return (
    <authContext.Provider value={providerData}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthProvider;