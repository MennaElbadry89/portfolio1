import React from "react";
import menna from "/images/menna.jpg"
import {  useNavigate } from "react-router-dom";
export default function Home(){
    
   


    return(
        <section id="home" className="cardo-regular-italic flex flex-col items-center justify-center gap-0 pt-10 text-sm sm:flex-row sm:gap-5">
        
        <div className="mx-0 w-full px-0 sm:mx-20 sm:w-1/2 sm:px-10 md:px-20">
          
              <div className="flex flex-col items-center justify-center">
               <h2  className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-50 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-start">Hi, I'm Menna</h2>    
               <b   className="animate-typing bg-gradient-to-r from-fuchsia-600 to-fuchsia-50 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-start">Frontend developer</b> 
             </div>
         
             <div className="mt-5 flex flex-col items-center justify-center gap-5 sm:flex-row">
               <button className="w-1/2 cursor-pointer rounded bg-gradient-to-r from-fuchsia-900 to-fuchsia-400 p-2 text-lg text-gray-200 hover:shadow-lg hover:shadow-fuchsia-100 sm:text-2xl"><a href="https://www.linkedin.com/in/menna-elbadry21/">CV</a></button>
               <button className="w-1/2 cursor-pointer rounded bg-gradient-to-r from-fuchsia-900 to-fuchsia-400 p-2 text-lg text-gray-200 hover:shadow-lg hover:shadow-fuchsia-100 sm:text-2xl"><a href="#project">Projects</a></button>
             </div>
         
         </div>
         
         <div className="move mx-0 w-full px-0 sm:w-1/2">
             <div className="mx-auto mt-10 flex h-48 w-48 items-center justify-center rounded-full border hover:shadow-lg hover:shadow-fuchsia-100 sm:mt-0">
                 <img src={menna} className="object-fit h-full w-full rounded-full border" alt="" />
             </div>
         </div>



        </section>


    )
}