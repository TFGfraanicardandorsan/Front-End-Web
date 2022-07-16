import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import  { ChakraProvider } from '@chakra-ui/react';
import {App} from './App'
import './index.css'
import { ContextProvider } from './contents/ContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
      </BrowserRouter>   
    </ChakraProvider>  
  </React.StrictMode>,
  document.getElementById('root')
)
