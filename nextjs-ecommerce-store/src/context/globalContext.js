
import  { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [state, setState] = useState(false);
    const [openModal, setOpenModal] = useState(false);


  return (
    <AppContext.Provider
      value={{ state, setState,openModal, setOpenModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
