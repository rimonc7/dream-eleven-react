import { useState } from 'react';
import logo from '../../assets/logo.png';
import { BsCoin } from "react-icons/bs";


const Header = ({coin}) => {

    return (
        <div className='flex justify-between my-6 mx-36'>
            <img src={logo} alt="" />
            <div className='flex items-center'>
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className='ml-4'>
                    <button className='flex items-center gap-1 border-2 p-4 rounded-xl'>
                        <span>{coin}</span> Coin <BsCoin />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Header;