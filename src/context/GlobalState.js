import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initalState = {
  color:"#0eb761" 
};

export const ColorContext = createContext(initalState);

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  

  


  return <ColorContext.Provider value={{color: state.color, dispatch}}>
    {children}
  </ColorContext.Provider>;
};

export default GlobalProvider;