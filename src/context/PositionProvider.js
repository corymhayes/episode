import React, { createContext, useState } from "react";

const PositionContext = createContext(undefined)
const PositionDispatchContext = createContext(undefined)

const PositionProvider = ({ children }) => {
  const [ position, setPosition ] = useState({
    x: 0
  })

  return (
    <PositionContext.Provider value={position}>
      <PositionDispatchContext.Provider value={setPosition}>
        { children }
      </PositionDispatchContext.Provider>
    </PositionContext.Provider>
  )
}

export { PositionProvider, PositionContext, PositionDispatchContext }