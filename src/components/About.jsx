import React from "react";

export default function About(){

    return(
        <section id="about" className="@container flex flex-col mx-auto px-20 py-10 max-sm:px-10  max-sm:text-sm">
            <p className="  font-bold text-4xl max-md:text-2xl bg-gradient-to-r from-fuchsia-400 to-fuchsia-50 bg-clip-text text-transparent cardo-regular-italic">About me :</p>
            <p className="  text-gray-200 hover:text-gray-50 cardo-regular-italic text-xl indent-10 leading-[3rem] px-20  max-md:text-lg max-md:leading-5 max-md:px-0">Frontend Developer skilled in React, TailwindCSS v4, and Bootstrap5, with growing experience in PHP, MySQL, … Passionate about building responsive and user-friendly web applications.</p>
            
        </section>
    )
}