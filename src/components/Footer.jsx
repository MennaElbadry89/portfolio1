import React from "react";
import { FaGithub } from "react-icons/fa";


export default function Footer(){



    return(
        <section className="cardo-regular-italic flex items-center justify-center bg-fuchsia-950 py-3">

            <p className="flex gap-2 bg-gradient-to-r from-fuchsia-600 to-fuchsia-50 bg-clip-text text-sm font-bold text-transparent sm:text-xl"> © 2026 
                <a className="flex items-center justify-center gap-1" href="https://github.com/MennaElbadry89/"> Menna Elbadry <FaGithub className="text-white"/></a> — Built with React
            </p>
            





        </section>


    )
}