import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalProvider = props => {

  return (
    <GlobalContext.Provider value={{ baseUrl: "" }}>
      {props.children}
    </GlobalContext.Provider>
  )
}