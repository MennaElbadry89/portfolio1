import React from "react";
import { RiMessage2Line } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact(){
      const container = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }
  const item = {
    hidden : { opacity: 0 , y: 50},
    show: { opacity: 1 , y: 0},
  }
   return(
        <section id="contact" className="cardo-regular-italic mx-10 flex flex-col gap-5 px-0 pb-10 text-sm sm:px-10">
               <p className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-50 bg-clip-text text-2xl font-bold text-transparent md:text-4xl">Let‘s work together.</p>
          <div className="flex flex-col gap-5 sm:flex-row">
           
            <div className="flex w-full cursor-pointer flex-col gap-5 sm:w-1/2">
                <form className="flex w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-5 text-white">
                    <p className="sm:text-md my-2 indent-7 text-sm sm:my-0 md:text-xl">I’d be happy to discuss your project and explore how we can work together.</p>
                   
                    <div className="flex w-full gap-5">
                        <input type="text" placeholder="First Name" className="my-2 w-full rounded-lg border border-fuchsia-400 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-2 placeholder:text-sm placeholder:text-gray-200 hover:shadow-lg hover:shadow-fuchsia-100"/>
                        <input type="text" placeholder="Last Name" className="my-2 w-full rounded-lg border border-fuchsia-400 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-2 placeholder:text-sm placeholder:text-gray-200 hover:shadow-lg hover:shadow-fuchsia-100"/>
                        </div>
                    
                    <div className="flex w-full gap-5">
                        <input type="text" placeholder="E-mail" className="my-2 w-full rounded-lg border border-fuchsia-400 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-2 placeholder:text-sm placeholder:text-gray-200 hover:shadow-lg hover:shadow-fuchsia-100"/>
                        <input type="text" placeholder="Phone" className="my-2 w-full rounded-lg border border-fuchsia-400 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-2 placeholder:text-sm placeholder:text-gray-200 hover:shadow-lg hover:shadow-fuchsia-100"/>
                    </div>
                   
                    <textarea rows={5} name="message" id="" placeholder="Message" className="m-4 w-full rounded-lg border border-fuchsia-400 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-2 placeholder:text-sm placeholder:text-gray-200 hover:shadow-lg hover:shadow-fuchsia-100"></textarea>
                    <button className="cursor-pointer rounded bg-gradient-to-r from-fuchsia-900 to-fuchsia-400 p-2 text-sm text-gray-200 hover:shadow-lg hover:shadow-fuchsia-100">Send message</button>
                </form>
               
            </div>

        <div className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-0 shadow-lg sm:w-1/2">
                                
                 <motion.div className='contac flex w-full flex-col justify-center gap-5 bg-transparent p-5' 
                 variants={container}
                 initial="hidden"
                 animate="show">
                    
                     <motion.div className='location flex gap-2 rounded-lg border border-fuchsia-400 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-5 hover:shadow-lg hover:shadow-fuchsia-100' variants={item}>
                         <MdMyLocation className="text-2xl text-fuchsia-200"/>
                         <b className="pl-5 text-sm text-gray-200 hover:text-gray-100 md:text-lg">Egypt - Sharkia - Zagazig</b>
                     </motion.div>

                     <motion.div className='message flex gap-2 rounded-lg border border-fuchsia-400 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-5 hover:shadow-lg hover:shadow-fuchsia-100' variants={item}>
                         <FaRegMessage className="text-2xl text-fuchsia-200"/>
                         <b className="pl-5 text-sm text-gray-200 hover:text-gray-100 md:text-lg">mennaelbadry21@gmail.com</b>
                     </motion.div>

                        <motion.div className='phone flex gap-2 rounded-lg border border-fuchsia-400 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-5 hover:shadow-lg hover:shadow-fuchsia-100' variants={item}>
                         <FaPhoneAlt className="text-2xl text-fuchsia-200"/>
                         <b className="pl-5 text-sm text-gray-200 hover:text-gray-100 md:text-lg">01060321259</b>
                     </motion.div>

                     <motion.div className='phone flex items-center justify-center gap-5 rounded-lg border border-fuchsia-400 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400 p-5 hover:shadow-lg hover:shadow-fuchsia-100' variants={item}>
                       <a href="https://www.linkedin.com/in/menna-elbadry21/"> <FaLinkedin className="transform cursor-pointer text-2xl text-fuchsia-200 transition duration-75 hover:scale-150"/> </a> 
                       <a href="https://www.facebook.com/mennaelbadry21"> <FaFacebook className="transform cursor-pointer text-2xl text-fuchsia-200 transition duration-75 hover:scale-150"/> </a>
                       <a href="https://github.com/MennaElbadry89"> <FaGithub className="transform cursor-pointer text-2xl text-fuchsia-200 transition duration-75 hover:scale-150"/> </a>
                       <a href=""> <FaInstagram className="transform cursor-pointer text-2xl text-fuchsia-200 transition duration-75 hover:scale-150"/> </a>             
                    </motion.div>
                 </motion.div>
         </div> 
   </div>
   
        </section>
    )
}