import React from "react";
import menna from "/images/me.jpg"
import {  useNavigate } from "react-router-dom";
export default function Home(){
    
   


    return(
        <section className=" cardo-regular-italic  pt-10 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-0
          sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-0 gap-50 max-sm:px-  max-sm:text-sm">
        <div className=" max-sm:w-full max-sm:mx-0 max-sm:px-0 px-20 mx-20 w-1/2">
          <div className="flex flex-col items-center justify-center">
          {/* <h1  className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-fuchsia-50 bg-clip-text text-transparent text-start max-sm:items-center  max-sm:text-center">Hello,</h1>        */}
          <h2  className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-fuchsia-50 bg-clip-text text-transparent text-start max-sm:items-center  max-sm:text-center">Hi, I'm Menna</h2>    
          <b   className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-fuchsia-50 bg-clip-text text-transparent text-start max-sm:items-center  max-sm:text-center animate-typing ">Frontend developer</b> 
         </div>
         <div className="mt-5 max-sm:flex max-sm:flex-col gap-5 sm:flex sm:flex-raw  items-center justify-center  ">
          <button className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-400 p-2 rounded text-gray-200 text-2xl w-1/2 hover:shadow-lg hover:shadow-fuchsia-100 cursor-pointer"><a href="https://www.linkedin.com/in/menna-elbadry21/">CV</a></button>
          <button className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-400 p-2 rounded text-gray-200 text-2xl w-1/2 hover:shadow-lg hover:shadow-fuchsia-100 cursor-pointer"><a href="#project">Projects</a></button>
         </div>
         </div>
         <div className=" max-sm:w-full max-sm:mx-0 max-sm:px-0 w-1/2 move">
         <div className="w-50 h-50 border rounded-full flex items-center justify-center max-sm:mx-auto max-sm:mt-20 hover:shadow-lg hover:shadow-fuchsia-100">
            <img src={menna} className="w-full h-full border rounded-full object-fill" alt="" />
         </div>
         </div>



        </section>


    )
}