

import React from "react";

export default function Projects() {
 const data = [
    {id: 1 , img: '/images/movi.png' , url:'https://mennaelbadry89.github.io/CSS' , desc: "HTML - CSS" },
    {id: 2 , img: '/images/pharmcy.png' , url: 'https://mennaelbadry89.github.io/e-pharmacy' , desc: "HTML - CSS - JS" },
    {id: 3 , img: '/images/food.png' , url: 'https://mennaelbadry89.github.io/foodstore/' , desc: "HTML - CSS - JS" },
    {id: 4 , img: '/images/uni.png' , url: 'https://mennaelbadry89.github.io/universty/', desc: "HTML - CSS - JS - jQuery" },
    {id: 5 , img: '/images/meme.png' , url: 'https://mennaelbadry89.github.io/meme/', desc: "React.JS - bootstrap - json.db - firebase - validation - Api " },
    {id: 6 , img: '/images/academy.png' , url: 'https://academy-gec2.vercel.app/', desc: "React.JS - TailwindCSS - firebase - validation - Api " },
    {id: 7 , img: '/images/book.png' , url: 'https://bookstore21.vercel.app/' , desc: " React.JS - TailwindCSS - firebase - validation - Api " },
    {id: 8 , img: '/images/portfolio.png' , url: '', desc: " React.JS - TailwindCSS" },

    ]
    return (
        <section id="project" className="@container flex flex-col gap-5 pb-20 px-50 cardo-regular-italic max-sm:px-4 max-sm:text-sm">
            <h1 className="text-gray-300 hover:text-gray-100 text-2xl underline">Projects :</h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
                
            {
                data.map((item)=>(
                  <div key={item.id} className="flex flex-col items-center border border-fuchsia-400 hover:border-fuchsia-200 rounded p-4
                  transition-transform duration-200  hover:skew-y-2  hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-100">
                    <div>
                        <img src={item.img} className="w-48 h-24" alt="" />
                    </div>
                    <a href={item.url} className="text-fuchsia-200 ">Link</a>
                    <p className="font-bold bg-gradient-to-r from-fuchsia-400 to-fuchsia-50 bg-clip-text text-transparent text-center w-full">
                        {item.desc} 
                    </p>
                </div>

                ))
            }

            
 
            </div>
        </section>
    );
}