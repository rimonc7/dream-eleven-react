import React, { useState } from 'react';
import './App.css'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Players from './components/players/Players'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Selected from './components/selected/Selected';
import Player from './components/player/Player';

function App() {

  const [coin, setCoin] = useState(0)

  const handleCoin = () => {
    const newCoin = coin + 500000000
    setCoin(newCoin)
  }

  const handleChoose = biddingPrice => {
    if (coin >= biddingPrice) {
      const remainingCoin = coin - biddingPrice;
      setCoin(remainingCoin);
      toast.success("Player Added")
    }
    else {
      toast.error("Insufficient Balance!")
    }
  }

  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handleSelected = player => {
    if (coin >= player.biddingPrice) {
      const newSelectedPlayer = [...selectedPlayers, player]
      setSelectedPlayers(newSelectedPlayer);
    }
  }

  const handleDelete = id => {
    const remainingPlayer = selectedPlayers.filter(player=> player.playerId !==id)
    setSelectedPlayers(remainingPlayer);
  }

  return (
    <>
      <Header coin={coin}></Header>
      <Hero handleCoin={handleCoin} ></Hero>
      <Players handleChoose={handleChoose} handleSelected={handleSelected}></Players>
      <Selected selectedPlayers={selectedPlayers} handleDelete={handleDelete}></Selected>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </>
  )
}

export default App
