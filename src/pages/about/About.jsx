import React from "react";

export default function About(){

    return(
        <section id="about" className="@container cardo-regular-italic sm:text-md mx-auto flex flex-col px-10 text-sm sm:px-20 sm:py-10">
            <p className="mb-5 bg-gradient-to-r from-fuchsia-400 to-fuchsia-50 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">About me :</p>
            
            <div className="items-center gap-2">
            <p className="text-md px-0 indent-10 leading-5 text-gray-200 hover:text-gray-50 sm:px-0 sm:text-xl sm:leading-[3rem]">
               Frontend & Junior Full-Stack Developer with a strong focus on React for building modern, responsive user interfaces, and Laravel for developing clean, scalable backend solutions. Experienced in integrating RESTful APIs, working with MySQL, and building full-stack web applications. Passionate about clean code, performance, and continuous learning. 
               {/* <a href="#project"
                 className="m-2 rounded bg-gradient-to-r from-fuchsia-900 to-fuchsia-400 p-1 text-center text-sm text-gray-200 hover:shadow-lg hover:shadow-fuchsia-200 sm:p-2" >
                    View My Projects
               </a> */}
            </p>
            </div>
             <a href="#project"
                 className="mt-4 w-1/2 rounded bg-gradient-to-r from-fuchsia-900 to-fuchsia-400 p-1 text-center text-sm text-gray-200 hover:shadow-lg hover:shadow-fuchsia-200 sm:w-1/4 sm:p-2 sm:text-xl" >
                    View My Projects
               </a>
            <span className="text-md mt-4 px-0 leading-5 text-gray-200 hover:text-gray-50 sm:px-0 sm:text-xl"> - Open to React / Laravel opportunities.</span>
            <span className="text-md mt-4 px-0 leading-5 text-gray-200 hover:text-gray-50 sm:px-0 sm:text-xl"> - Available for freelance & full-time roles.</span>
            


            
        </section>
    )
}