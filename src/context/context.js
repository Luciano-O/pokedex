import { createContext, useState } from "react";

export const Poke_data = createContext(null);

function Context({ children }) {
  const [search, setSearch] = useState();

  return (
    <Poke_data.Provider value={{ search, setSearch }}>
      {children}
    </Poke_data.Provider>
  );
}

export default Context;