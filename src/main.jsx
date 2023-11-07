import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  ChakraProvider,
} from '@chakra-ui/react'
import Header from './header/header'
import Allcards from './main/allcards'
import Footer from './footer/footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Header />
    <Allcards />
    <Footer />
  </ChakraProvider>,
)
