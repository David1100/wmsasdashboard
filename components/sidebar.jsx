"use client"
import Image from "next/image";
import { useState } from "react";
import { RiBaseStationFill, RiCloseLine, RiMenu2Fill } from "react-icons/ri";

export default function Sidebar() {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className={`fixed bg-principal lg:w-64 w-72 h-full top-0 py-7 lg:left-0 px-3 transition-all duration-500 ${showMenu ? "left-0" : "-left-full"}`}>
            <div className="w-full flex justify-center mb-7">
                <Image src={'/logos/p_logo.svg'} width={150} height={10} alt="Logo principal" />
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-gray-500 font-semibold text-sm">PROYECTOS</p>
                <ul className="flex flex-col gap-2">
                    <li className="hover:bg-[#33333367] p-2 rounded-lg pl-6 flex gap-2 items-center cursor-pointer">
                        <RiBaseStationFill className="text-lg" /> Autogeneradores
                    </li>
                </ul>
            </div>
            <button className="lg:hidden bg-principal transition-all text-white fixed bottom-8 right-6 p-2 text-lg rounded-full z-50" onClick={toggleMenu}>
                {showMenu ? <RiCloseLine /> : <RiMenu2Fill />}
            </button>
        </div>
    )
}