import React from "react";

export default function About(){

    return(
        <section className="@container flex flex-col mx-auto px-20 py-10 max-sm:px-10  max-sm:text-sm">
            <p className="  text-gray-200 hover:text-gray-50 text-2xl underline cardo-regular-italic">About me :</p>
            <p className="  text-gray-200 hover:text-gray-50 cardo-regular-italic text-xl indent-18 leading-[3rem] max-md:text-lg max-md:leading-5 ">I'm passionate web developer who enjoys turning ideas into functional and visually appealing websites. i have a solid foudation in HTML, CSS, JavaScript, and i'm learning modern frameworks like React and tools such as Bootstrap and TailwindCSS. My goal is to grow as a full-stack developer, collaborate on exiting projects, and create user-frindly experiences that make an impact.</p>
            
        </section>
    )
}