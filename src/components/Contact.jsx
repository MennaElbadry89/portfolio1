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
        <section className="sm:flex max-sm:flex-col gap-5 px-10 mx-10 pb-10 cardo-regular-italic max-sm:px-0  max-sm:mx-10 max-sm:text-sm">
            <div className="flex flex-col gap-5 py-5 cursor-pointer max-sm:w-full w-1/2">
               <p className="text-4xl max-md:text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-fuchsia-50 bg-clip-text text-transparent">Let‘s work together.</p>
                <form className=" w-full flex flex-col items-center justify-center bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400 p-10 rounded-2xl text-white">
                    <p className="max-md:text-sm  text-xl my-2">I’d be happy to discuss your project and explore how we can work together.</p>
                    <div className="flex gap-5 w-full">
                        <input type="text" placeholder="First Name" className="w-full placeholder:text-gray-200 placeholder:text-lg border border-fuchsia-400 my-2 rounded-lg p-2 bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400  hover:shadow-lg hover:shadow-fuchsia-100"/>
                        <input type="text" placeholder="Last Name" className="w-full placeholder:text-gray-200 placeholder:text-lg border border-fuchsia-400 my-2 rounded-lg p-2 bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400  hover:shadow-lg hover:shadow-fuchsia-100"/>
                        </div>
                    <div className="flex gap-5 w-full">
                        <input type="text" placeholder="E-mail" className="w-full placeholder:text-gray-200 placeholder:text-lg border border-fuchsia-400 my-2 rounded-lg p-2 bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400  hover:shadow-lg hover:shadow-fuchsia-100"/>
                        <input type="text" placeholder="Phone" className="w-full placeholder:text-gray-200 placeholder:text-lg border border-fuchsia-400 my-2 rounded-lg p-2 bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400  hover:shadow-lg hover:shadow-fuchsia-100"/>
                    </div>
                    <textarea name="message" id="" placeholder="Message" className="w-full placeholder:text-gray-200 placeholder:text-lg border border-fuchsia-400 m-4 rounded-lg p-2 bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400  hover:shadow-lg hover:shadow-fuchsia-100"></textarea>
                    <button className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-400 p-2 rounded text-gray-200 text-xl hover:shadow-lg hover:shadow-fuchsia-100 cursor-pointer">Send message</button>
                </form>
               
            </div>

       {/* <div className="w-1/2 max-md:w-full h-102 mt-5 max-md:mr-0 mr-20 p-0 flex flex-col justify-center items-center bg-gradient-to-t from-pink-400 to-pink-800 shadow-lg border border-pink-400 rounded-2xl"> */}
                                
                 <motion.div className='contac w-1/2 max-md:w-full h-102 mt-15 flex flex-col justify-center gap-5 bg-transparent' 
                 variants={container}
                 initial="hidden"
                 animate="show">
                    
                     <motion.div className='location p-5   rounded-lg border border-fuchsia-400 flex gap-2 bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-100' variants={item}>
                         <MdMyLocation className="text-2xl text-fuchsia-200"/>
                         <b className="max-md:text-sm  pl-5 text-lg text-gray-200 hover:text-gray-100">Egypt - Sharkia - Zagazig</b>
                     </motion.div>

                     <motion.div className='message p-5  rounded-lg border border-fuchsia-400 flex gap-2 bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-100 ' variants={item}>
                         <FaRegMessage className="text-2xl text-fuchsia-200"/>
                         <b className="max-md:text-sm  pl-5 text-lg text-gray-200 hover:text-gray-100">mennaelbadry21@gmail.com</b>
                     </motion.div>

                        <motion.div className='phone p-5 rounded-lg border border-fuchsia-400 flex gap-2 bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-100 ' variants={item}>
                         <FaPhoneAlt className="text-2xl text-fuchsia-200"/>
                         <b className="max-md:text-sm  pl-5 text-lg text-gray-200 hover:text-gray-100">+201060321259</b>
                     </motion.div>

                     <motion.div className='phone p-5 rounded-lg border border-fuchsia-400 flex items-center justify-center gap-5 bg-gradient-to-b  from-fuchsia-900 to-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-100' variants={item}>
                       <a href="https://www.linkedin.com/in/menna-elbadry21/"> <FaLinkedin className="text-2xl transform transition duration-75 hover:scale-150 cursor-pointer text-fuchsia-200"/> </a> 
                       <a href="https://www.facebook.com/mennaelbadry21"> <FaFacebook className="text-2xl transform transition duration-75 hover:scale-150 cursor-pointer text-fuchsia-200"/> </a>
                       <a href="https://github.com/MennaElbadry89"> <FaGithub className="text-2xl transform transition duration-75 hover:scale-150 cursor-pointer text-fuchsia-200"/> </a>
                       <a href=""> <FaInstagram className="text-2xl transform transition duration-75 hover:scale-150 cursor-pointer text-fuchsia-200"/> </a>             
                    </motion.div>
                   </motion.div>
   {/* </div>  */}
   
        </section>
    )
}