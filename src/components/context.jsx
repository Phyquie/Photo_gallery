import React, { createContext, useState } from 'react';

// Create a Context
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Initial Value");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
