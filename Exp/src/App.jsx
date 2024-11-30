import React from 'react'
import Selection from './Section/Slection'
import Header from './Component/Header'
import Content from './Component/Content'
import Footer from './Component/Footer'
import './index.css';
export default function App() {
  return (
    <>
    <Selection>
      <Header />
      <Content />
      <Footer />
    </Selection>

    </>
  )
}
