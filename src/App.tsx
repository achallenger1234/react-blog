import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./router/Router"
import { theme } from "./theme/theme"
import { LoginUserProvider } from "./hooks/Providers/useLoginUserProvider"

function App() {
  return (
  <LoginUserProvider>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  </LoginUserProvider>
  );
}

export default App;
