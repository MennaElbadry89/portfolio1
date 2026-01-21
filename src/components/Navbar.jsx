import React, { useState } from "react";
import logo from '../../public/images/tailwindlogo.png'
import { FaBars } from "react-icons/fa";
import clsx from "clsx";


export default function Navbar(){

    const [isOpen , setIsOpen] = useState(false)


    return(
        <section className="cardo-regular-italic m-0 bg-fuchsia-950 px-10 py-3 shadow-lg">

        <div className="flex items-center justify-around">
            <div className="gap- flex items-center">
               <a href="/"> <h1 className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-50 bg-clip-text text-2xl font-bold text-transparent hover:text-gray-200">Menna Ebadry</h1></a>
               <span className="ml-3 rounded-full bg-fuchsia-600/20 px-3 py-1 text-sm text-fuchsia-300">
                React & Laravel
               </span>

            </div>
            <ul className={clsx(
                     isOpen ? "flex" : "hidden",
                     "w-full items-center justify-around gap-10 rounded-2xl bg-fuchsia-900 p-2 text-2xl hover:shadow-lg hover:shadow-fuchsia-100",
                     "absolute right-0 top-14 flex-col z-50",
                     "sm:static sm:flex sm:w-2/3 sm:flex-row sm:gap-1",
                     "md:w-1/2 md:text-2xl"
                 )}>
                <li><a  className="text-gray-300 hover:text-gray-50" href="#home">Home</a></li>
                <li><a  className="text-gray-300 hover:text-gray-50" href="#about">About</a></li>
                <li><a  className="text-gray-300 hover:text-gray-50" href="#contact">Contact</a></li>
                <li><a  className="text-gray-300 hover:text-gray-50" href="#project">Projects</a></li>
                <li><a  className="text-gray-300 hover:text-gray-50" href="#skills">Skills</a></li>
            </ul>
            <div className="hidden cursor-pointer text-2xl text-gray-400 hover:text-gray-200 max-sm:flex">
                <FaBars onClick={()=>setIsOpen(!isOpen)}/>                    
            </div>
            </div>



        </section>


    )
}