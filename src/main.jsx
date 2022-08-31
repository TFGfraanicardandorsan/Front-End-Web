import React from 'react'
import { createRoot } from 'react-dom/client';
import {StrictMode} from 'react';
import { BrowserRouter } from "react-router-dom";
import  { ChakraProvider } from '@chakra-ui/react';
import {App} from './App'
import './index.css'
import { ContextProvider } from './contents/ContextProvider'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
<StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
      </BrowserRouter>   
    </ChakraProvider>  
  </StrictMode>
);
