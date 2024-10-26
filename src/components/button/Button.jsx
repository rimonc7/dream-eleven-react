
const Button = ({ handleConditionButton, isActive }) => {
    return (
        <div>
            <div className="flex justify-between my-10 mx-36">
                <div>
                    <h3 className={`font-bold text-2xl ${isActive ? "flex" : "hidden"}`}>Available Players:</h3>
                    <h3 className={`font-bold text-2xl ${isActive? "hidden" : "flex"}`}>Selected: (/6)</h3>
                </div>
                <div>
                    <button onClick={() => handleConditionButton(true)} className={`p-2 rounded-lg font-bold ${isActive ? "bg-yellow-400" : ""}`}>Available</button>
                    <button onClick={() => handleConditionButton(false)} className={`p-2 rounded-lg font-bold ${!isActive ? "bg-yellow-400" : ""}`}>Selected</button>
                </div>
            </div>
        </div>
    );
};

export default Button;