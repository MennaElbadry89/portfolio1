import React, { useState } from "react";
import logo from '../../public/images/tailwindlogo.png'
import { FaBars } from "react-icons/fa";


export default function Navbar(){

    const [isOpen , setIsOpen] = useState(false)


    return(
        <section className="shadow-lg bg-fuchsia-950  m-0 px-10 py-3 cardo-regular-italic">

        <div className="flex items-center justify-around ">
            <div>
               <a href="/"> <h1 className="font-bold text-2xl bg-gradient-to-r from-fuchsia-600 to-fuchsia-50 bg-clip-text text-transparent hover:text-gray-200">Menna Ebadry</h1></a>
            </div>
            <ul className={` ${isOpen ?  "flex" : "hidden" } max-sm:flex-col  max-sm:absolute max-sm:top-14 max-sm:right-0 bg-fuchsia-900 hover:shadow-lg hover:shadow-fuchsia-100 w-full rounded-2xl p-2 text-2xl
                 sm:flex sm:static sm:flex-row sm:w-2/3  sm:gap-1 items-center justify-around gap-10 md:w-1/2 md-text-2xl `} >

                <li><a  className="text-gray-300 hover:text-gray-50" href="#home">Home</a></li>
                <li><a  className="text-gray-300 hover:text-gray-50" href="#about">About</a></li>
                <li><a  className="text-gray-300 hover:text-gray-50" href="#contact">Contact</a></li>
                <li><a  className="text-gray-300 hover:text-gray-50" href="#project">Projects</a></li>
                <li><a  className="text-gray-300 hover:text-gray-50" href="#skills">Skills</a></li>
            </ul>
            <div className="hidden max-sm:flex text-gray-400 hover:text-gray-200 text-2xl cursor-pointer">
                <FaBars onClick={()=>setIsOpen(!isOpen)}/>                    
            </div>
            </div>



        </section>


    )
}