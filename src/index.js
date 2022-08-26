import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ColourContextProvider from "./Contexts/ColourContext";
import DataContextProvider from "./Contexts/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <DataContextProvider>
        <ColourContextProvider>
          <App />
        </ColourContextProvider>
      </DataContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
