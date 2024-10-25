import SelectedPlayer from "./SelectedPlayer";

const Selected = ({ selectedPlayers, handleDelete }) => {
    return (
        <div>
            <h1>Selected: {selectedPlayers.length}</h1>
            <div>
                {selectedPlayers.map(player => (
                    <SelectedPlayer key={player.playerId} player={player} handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Selected;
