import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";


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