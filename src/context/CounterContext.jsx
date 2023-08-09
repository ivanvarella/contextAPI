// 1- Create a context object

import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2- Create provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(15);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};