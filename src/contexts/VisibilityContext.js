import React, { useState } from 'react'

export const VisibilityContext = React.createContext();

export function VisibilitySwitcher(props) {

  const [visible, setVisible] = useState(false);

  return (
    <VisibilityContext.Provider value={{ visible, setVisible }}>
      {props.children}
    </VisibilityContext.Provider>
  )
}
