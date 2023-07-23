import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import DateProvider from './context/index.tsx'
import theme from './theme/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <DateProvider>
        <App />
      </DateProvider>
    </ChakraProvider>
  </React.StrictMode>
)
