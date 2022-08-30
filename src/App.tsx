import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./router/Router"
import { theme } from "./theme/theme"
import { LoginUserProvider } from "./hooks/Providers/useLoginUserProvider"
import { SerchBlogProvider } from "./hooks/Providers/useSerchBlogProvider"

function App() {
  return (
  <LoginUserProvider>
    <SerchBlogProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </SerchBlogProvider>
  </LoginUserProvider>
  );
}

export default App;
