import * as React from "react";

export const UserContext = React.createContext();

const userData = {
  correo: "",
  status: false,
  token: "",
};

export const UserProvider = (props) => {
  // Initial Provider State
  const [user, setUser] = React.useState(userData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
