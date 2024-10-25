import { useEffect, useState } from "react";
import Player from "../player/Player";

const Players = ({ handleChoose, handleSelected }) => {
    const [players, SetPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => SetPlayers(data))
    }, [])



    return (
        <>
            <div className=" mx-4 lg:mx-36">
                <div className="flex justify-between my-10">
                    <h3 className="font-bold text-2xl">Available Players:{players.length}</h3>
                    <div>
                        <button className="bg-yellow-400 font-bold p-2 rounded-lg">Available</button>
                        <button className="p-2 rounded-lg">Selected</button>
                    </div>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {
                        players.map(player => <Player key={player.playerId} player={player} handleChoose={handleChoose} handleSelected={handleSelected}></Player>)
                    }
                </div>
            </div>
        </>
    );
};

export default Players;