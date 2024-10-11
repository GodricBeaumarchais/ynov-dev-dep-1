import Image from "next/image";

import { FaArrowRightToBracket } from "react-icons/fa6";
const mainTitle = '../../public/main-title.svg';

export default function Header( {onFormOpen}: {onFormOpen: () => void} ) {

    
    
    return (
        <div className="flex flex-row items-center h-[80px]  ">
            <Image src={mainTitle} alt="logo" className="h-[80px] justify-start mr-auto 0 w-fit" />
            <button onClick={onFormOpen} className="flex flex-row items-center bg-gradient-to-r from-mainPurple to-mainBlue pr-7 pl-7 h-full hover:brightness-75 cursor-pointer transition-all duration-300">
                <p className="text-white text-2xl">Login</p>
                <FaArrowRightToBracket className="text-white  text-4xl " />
            </button>
        </div>
    )
}