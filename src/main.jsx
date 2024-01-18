import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  // <React.StrictMode>
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
  // </React.StrictMode>
);
