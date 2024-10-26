import SelectedPlayer from "./SelectedPlayer";

const Selected = ({ selectedPlayers, handleDelete }) => {
    return (
        <div>
            <h1 className="ml-36 font-bold text-2xl">Selected: ({selectedPlayers.length}/6)</h1>
            <div>
                {selectedPlayers.map(player => (
                    <SelectedPlayer key={player.playerId} player={player} handleDelete={handleDelete} />
                ))}
                <div className="bg-white border-2 border-gray-400  p-2 w-fit rounded-xl ml-4 lg:mx-36 my-10">
                    <button className=" bg-[#E7FE29] p-3 rounded-lg" >Added More Player</button>
                </div>
            </div>
        </div>
    );
};

export default Selected;
