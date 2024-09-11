import React, { createContext, useEffect, useState } from 'react';

export const SearchContext = createContext();



export const SearchProvider = ({ children }) => {

    const [nav,setNav] = useState("")



    return (
      <SearchContext.Provider value={{ nav,setNav }}>
        {children}
      </SearchContext.Provider>
    );
  };
