import { useEffect, useState } from "react";
import Player from "../player/Player";
import PropTypes from 'prop-types';


const Players = ({ handleChoose, handleSelected}) => {
    const [players, SetPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => SetPlayers(data))
    }, [])



    return (
        <>
            <div className=" mx-4 lg:mx-36">
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

Players.propTypes = {
    handleChoose: PropTypes.func.isRequired,
    handleSelected: PropTypes.func.isRequired
}