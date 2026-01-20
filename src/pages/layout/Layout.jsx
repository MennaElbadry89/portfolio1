import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Home from "../home/Home";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../Contacts/Contact";
import About from "../about/About";


export default function Layout(){

    return(
        <section  className="min-h-screen bg-gradient-to-b from-fuchsia-900 to-fuchsia-400">

             <Navbar/>
             <Home/>
             <About/>
             <Skills/>
             <Projects/>
             <Contact/>
             <Footer/>

        </section>

    )
}