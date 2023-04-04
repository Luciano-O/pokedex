import React from 'react';
import { createContext, useState } from "react";
import propTypes from 'prop-types';

export const Poke_data = createContext(null);

function Context({ children }) {
  const [search, setSearch] = useState('');
  const [allPokes, setAllPokes] = useState([]);
  const [displayPokes, setDisplayPokes] = useState([]);

  return (
    <Poke_data.Provider value={
      { 
        search, 
        setSearch,
        allPokes,
        setAllPokes,
        displayPokes,
        setDisplayPokes
      }
    }>
      {children}
    </Poke_data.Provider>
  );
}

Context.propTypes = {
  children: propTypes.shape({}).isRequired
}

export default Context;