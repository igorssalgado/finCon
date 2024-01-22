import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  // <React.StrictMode>

  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </Provider>
  </ChakraProvider>
  // </React.StrictMode>
);
