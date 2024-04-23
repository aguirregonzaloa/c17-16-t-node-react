import * as React from "react";

export const UserContext = React.createContext();

const userData = {
  correo: "",
  name: "",
  status: false,
  token: "",
  isLoggin: false,
  pets: [
    { id: 1, type: "cat", name: "lolo" },
    { id: 1, type: "dog", name: "Dodo" },
  ],
  reservations: [
    { id: 1, date: "29/05/24", careName: "Leandro" },
    { id: 1, date: "29/05/24", careName: "Leandro" },
    { id: 1, date: "29/05/24", careName: "Leandro" },
  ],
};

//------------CAREGIVERS------------//
//La agenda de cuidadores para el usuario
//Se deberia poder agregar en /cuidadores
//se deberia sacar en el perfile del usuario

//----------MASCOTAS----------////
//agregar y quitar mascotas en el perfil del usuario

export const UserProvider = (props) => {
  // Initial Provider State
  const [user, setUser] = React.useState(userData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
