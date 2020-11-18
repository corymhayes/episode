import React, { createContext, useState } from "react";

const DataContext = createContext(undefined)
const DataDispatchContext = createContext(undefined)

const DataProvider = ({ children }) => {
  const [ data, setData ] = useState({})

  return (
    <DataContext.Provider value={data}>
      <DataDispatchContext.Provider value={setData}>
        { children }
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  )
}

export { DataProvider, DataContext, DataDispatchContext }