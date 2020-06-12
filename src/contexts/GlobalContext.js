import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalProvider = props => {

  return (
    <GlobalContext.Provider value={{ baseUrl: "http://localhost:8080" }}>
      {props.children}
    </GlobalContext.Provider>
  )
}