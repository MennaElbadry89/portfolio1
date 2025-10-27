import React from "react";
import html from '/images/HTML.svg'
import css from '/images/css.png'
import js from '/images/js.png'
import react from '/images/React.svg'
import vite from '/images/Vitejs-logo.svg.png'
import tailwind from '/images/tailwind.svg'
import npm from '/images/npmjs.svg'
import github from '/images/github.svg'
import jquery from '/images/jquery.svg'
import bootstrap from '/images/Bootstrap.svg'
import firebase from '/images/Firebase.png'
import php from '/images/php.png'
import mySQL from '/images/mysql.png'

import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation , Autoplay } from 'swiper/modules'


export default function Skills(){

    const data = [
        {id: 1 , name: 'html', imag: html},
        {id: 2 , name: 'css', imag: css},
        {id: 3 , name: 'js', imag: js},
        {id: 4 , name: 'react', imag: react},
        {id: 5 , name: 'vite', imag: vite},
        {id: 6 , name: 'npm', imag: npm},
        {id: 7 , name: 'github', imag: github},
        {id: 8 , name: 'jquery', imag: jquery},
        {id: 9 , name: 'bootstrap', imag: bootstrap},
        {id: 10 , name: 'firebase', imag: firebase},
        {id: 11 , name: 'tailwind', imag: tailwind},
        {id: 12 , name: 'mySQL', imag: mySQL},
        {id: 13 , name: 'php', imag: php},
    ]

    return(
        <section className=" py-10 mx-auto max-sm:mx-0 max-sm:px-10 max-sm:text-sm  text-left">
            <b className=" text-4xl max-md:text-2xl ml-20 cardo-regular-italic bg-gradient-to-r from-fuchsia-400 to-fuchsia-50 bg-clip-text text-transparent block max-sm:ml-0 max-sm:px-0">Skills :</b>
         <div className="max-sm:mx-0 max-sm:px-0  mx-10 px-10">
         <Swiper 
         modules={[Navigation, Autoplay]}
         spaceBetween={5}
         slidesPerView={2}
        //  navigation
         autoplay = {{delay: 200 , disableOnInteraction: false}}
         loop 
        breakpoints={{
             640: { slidesPerView: 3 },
             1024: { slidesPerView: 6 }
           }}
         >
            { data.map((item)=>(
                <SwiperSlide key={item.id}>
                    <div className="flex flex-col items-center p-5 ">
                    <div className='flex items-center justify-center '>
                        {item.name} <img src={item.imag} className="max-md:w-12 max-md:12  w-18 h-18" alt="" />                        
                    </div>
                        <b className="font-bold text-2xl max-md:text-xl bg-gradient-to-r from-fuchsia-400 to-fuchsia-50 bg-clip-text text-transparent ">{item.name}</b>
                    </div>

                </SwiperSlide>
            ))}
         </Swiper>

           </div> 
        </section>
    )
}