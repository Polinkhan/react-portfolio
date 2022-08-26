import { useContext, createContext, useState } from "react";

const ColourContext = createContext();
export const useColourContext = () => useContext(ColourContext);

function ColourContextProvider(props) {
  const [bgColour, setBgColour] = useState("aliceblue");

  const value = { bgColour, setBgColour };

  return (
    <ColourContext.Provider value={value}>
      {props.children}
    </ColourContext.Provider>
  );
}

export default ColourContextProvider;
