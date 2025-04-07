import { StrictMode } from 'react'
import { ChakraProvider, color } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'




const styles = {
  global:(props) =>({
    body:{
      bg:mode('#f0e7db', '#000')(props),
      color:mode('#000', '#whiteAlpha.900')(props)
    }
  })
}
// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config,styles });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
