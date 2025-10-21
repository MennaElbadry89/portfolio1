import React from "react";
import { FaGithub } from "react-icons/fa";


export default function Footer(){



    return(
        <section className="bg-fuchsia-950 py-3 flex items-center justify-center cardo-regular-italic">

            <div className="max-md:text-sm   flex gap-2 text-xl font-bold bg-gradient-to-r from-fuchsia-600 to-fuchsia-50 bg-clip-text text-transparent">© 2025 All Rights Reserved By 
                <a className="flex items-center justify-center gap-3" href="https://github.com/MennaElbadry89/"> Menna Elbadry <FaGithub/></a>
            </div>
            





        </section>


    )
}