import React, { useState } from 'react';
import './App.css'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Players from './components/players/Players'

function App() {

  const [coin, setCoin] = useState(0)

  const handleCoin = () => {
    const newCoin = coin + 500000000
    setCoin(newCoin)
  }

  return (
    <>
      <Header coin={coin}></Header>
      <Hero handleCoin={handleCoin} ></Hero>
      <Players></Players>
    </>
  )
}

export default App
