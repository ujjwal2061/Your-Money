import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
import Footer from './Component/Footer'
import './index.css';
import ToogleProvider from './Section/Slection';
export default function App() {
  return (
    <>
     <ToogleProvider>
       <Header />
       <Content />
       <Footer />
     </ToogleProvider>
    </>
  )
}
