import "./hero.css"
import bannerMain from "../../assets/banner-main.png"

const Hero = ({handleCoin}) => {


    return (
        <div className=" bg-black mx-36 rounded-xl p-12 text-center hero">
            <img className="mx-auto" src={bannerMain} alt="" />
            <h1 className=" font-bold text-4xl text-white mt-5">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="font-semibold text-2xl text-gray-300 my-5">Beyond Boundaries Beyond Limits</p>
            <button onClick={handleCoin} className="border-4 border-[#E7FE29] rounded-2xl bg-[#E7FE29] p-4 m-2 font-bold">Claim Free Credit</button>
        </div>
    );
};

export default Hero;