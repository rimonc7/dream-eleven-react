import React, { useState } from 'react';
import './App.css'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Players from './components/players/Players'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Selected from './components/selected/Selected';
import Player from './components/player/Player';
import Footer from './components/footer/Footer';

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
    }
  }

  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handleSelected = (player) => {
    const selectedPlayerId = selectedPlayers.find(selectedPlayer => selectedPlayer.playerId === player.playerId);

    if (selectedPlayers.length >= 6) {
        toast.error("Can't Select More Than 6 Players");
    } else if (selectedPlayerId) {
        toast.error("Player is already selected!");
    } else if (coin < player.biddingPrice) {
        toast.error("Insufficient Balance!");
    } else {
        const newSelectedPlayers = [...selectedPlayers, player];
        setSelectedPlayers(newSelectedPlayers);
    }
};


  const handleDelete = id => {
    const remainingPlayer = selectedPlayers.filter(player => player.playerId !== id)
    setSelectedPlayers(remainingPlayer);
  }

  return (
    <>
      <Header coin={coin}></Header>
      <Hero handleCoin={handleCoin} ></Hero>
      <Players handleChoose={handleChoose} handleSelected={handleSelected}></Players>
      <Selected selectedPlayers={selectedPlayers} handleDelete={handleDelete}></Selected>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
      <Footer></Footer>
    </>
  )
}

export default App
