import { createContext, useState } from "react";

export const Poke_data = createContext(null);

function Context({ children }) {
  const [search, setSearch] = useState('');
  const [allPokes, setAllPokes] = useState([]);

  return (
    <Poke_data.Provider value={
      { 
        search, 
        setSearch,
        allPokes,
        setAllPokes
      }
    }>
      {children}
    </Poke_data.Provider>
  );
}

export default Context;