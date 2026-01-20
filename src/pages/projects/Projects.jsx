import React , {useState} from "react";
import ProjectCard from "../../components/ProjectCard";
import { Transition } from "@headlessui/react";

export default function Projects() {
 const data = [
        {
        id: 1 ,  
         title: "Movie Website",  
         img: '/images/movi.png' ,      
         url:'https://mennaelbadry89.github.io/CSS' ,           
         github: "https://github.com/mennaelbadry89/CSS",   
         type: "Desgin",  
         desc: "HTML - CSS" 
        },
        {
        id: 2 ,  
         title: "pharmcy Website",  
         img: '/images/pharmcy.png' ,   
         url: 'https://mennaelbadry89.github.io/e-pharmacy' ,   
         github: "https://github.com/mennaelbadry89/CSS",   
         type: "Desgin",  
         desc: "HTML - CSS - JS - CRUD" 
        },
        {
        id: 3 ,  
         title: "Food Store Website",  
         img: '/images/food.png' ,      
         url: 'https://mennaelbadry89.github.io/foodstore/' ,   
         github: "https://github.com/mennaelbadry89/CSS",   
         type: "Desgin",  
         desc: "HTML - CSS - JS - CRUD" 
        },
        {
        id: 4 ,  
         title: "Universty Website",  
         img: '/images/uni.png' ,       
         url: 'https://mennaelbadry89.github.io/universty/',    
         github: "https://github.com/mennaelbadry89/CSS",   
         type: "Desgin",  
         desc: "HTML - CSS - JS - jQuery" 
        },
        {
        id: 5 ,  
         title: "E-commerce Website",  
         img: '/images/mem.png' ,       
         url: 'https://mennaelbadry89.github.io/meme/',         
         github: "https://github.com/mennaelbadry89/CSS",   
         type: "React",   
         desc: "React.JS - bootstrap5 - context - json.db-Api - firebase - validation - CRUD "  
        },
        {
        id: 6 ,  
         title: "Courses platform Website",  
         img: '/images/eduu.png' ,      
         url: 'https://acad-ashen.vercel.app/',                 
         github: "https://github.com/mennaelbadry89/CSS",   
         type: "React",   
         desc: "React.JS - TailwindCSS - context - firebase - validation - json.db-Api - CRUD" 
        },
       {
        id: 7 ,  
         title: "Online Book store Website",  
         img: '/images/boo.png' ,       
         url: 'https://bookstore89.vercel.app/' ,               
         github: "https://github.com/mennaelbadry89/CSS",   
         type: "React",   
         desc: "React.JS - TailwindCSS - context - firebase - validation - json.db-Api - CRUD" 
        },
       {
        id: 8 ,  
         title: "portfolio Website",  
         img: '/images/portfolio.png' , 
         url: 'https://portfolio-wine-theta-98.vercel.app/',    
         github: "https://github.com/mennaelbadry89/CSS",   
         type: "React",   
         desc: "React.JS - TailwindCSS" 
        },
        {
        id: 9 ,  
         title: "E-commerce Website",  
         img: '/images/memetail.png' ,  
         url: 'https://memestore-e4fi.vercel.app/',             
         github: "https://github.com/mennaelbadry89/CSS",   
         type: "React",   
         desc: "React.JS - TailwindCSS - redux - reduxtoolkit - firebase - validation - json.db-Api CRUD" 
        },
        {
        id: 10 ,  
        title: "Gem Website",  
        img: '/images/gem1.png' ,      
        url: 'https://mennaelbadry89.github.io/gem/',           
        github: "https://github.com/mennaelbadry89/CSS",   
        type: "Desgin",  
        desc: "HTML - CSS - JS - TailwindCSS" 
        },
        {
        id: 11 ,  
        title: "Nersary Website",  
        img: '/images/babycare.png' ,  
        url: 'https://mennaelbadry89.github.io/babycare/',      
        github: "https://github.com/mennaelbadry89/CSS",   
        type: "Desgin",  
        desc: "HTML - CSS - JS - bootstrap5" 
        },
        {
        id: 12 ,  
        title: "Archetichture  Website",  
        img: '/images/arch.png' ,      
        url: 'https://mennaelbadry89.github.io/Arch-Agency/',   
        github: "https://github.com/mennaelbadry89/CSS",   
        type: "Desgin",  
        desc: "HTML - CSS - JS - TailwindCSS" 
        },
    ]
   
   const [selectedProject, setSelectedProject] = useState(null);


    
    const [filterData , setFilterData] = useState(data)
    
    const handleFilter = (type) =>{
        const filtered = data.filter((item) => item.type === type);
        setFilterData(filtered);
    }

    const handleAll = () =>{
        setFilterData(data);
    }

    return (
        <section id="project" className="@container cardo-regular-italic flex flex-col gap-5 px-10 pb-10 max-sm:text-sm sm:px-20">
            <h1 className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-50 bg-clip-text text-4xl text-transparent max-md:text-2xl">Projects :</h1>

            <div className="grid gap-5 transition-all duration-500 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filterData.map((project) => (
                    <div key={project.id}
                      className="rounded-lg border border-fuchsia-400 p-1 shadow transition hover:cursor-pointer hover:shadow-lg"
                      onClick={() => setSelectedProject(project)}>
                     <ProjectCard key={project.id} project={project} />
                   </div>                    
                    ))}
            </div>                    
                                 {/*  Modal */}
      <Transition show={!!selectedProject}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-fuchsia-800 bg-opacity-20">
          <Transition.Child
            enter="transition transform duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition transform duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90" >
                
            <div className="relative mx-2 w-full max-w-xl rounded-lg bg-fuchsia-100 p-6">
              <button  onClick={() => setSelectedProject(null)}
                className="absolute right-2 top-2 text-2xl font-bold text-fuchsia-800">
                &times;
              </button>
              {selectedProject && (
                <>
                  <img src={selectedProject.img} alt={selectedProject.type} className="mb-4 h-48 w-full rounded object-cover"/>
                  <h2 className="mb-2 text-xl font-bold text-fuchsia-900">{selectedProject.type}</h2>
                  <p className="mb-2 font-bold text-fuchsia-800">{selectedProject.desc}</p>
                  <a href={selectedProject.url} target="_blank"
                    className="font-bold text-fuchsia-800 hover:underline" >
                    Visit Project
                  </a>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Transition> 
      
            <div className="mx-auto flex items-center gap-2">
                <button onClick={handleAll} className="cursor-pointer rounded-md bg-gradient-to-r from-fuchsia-800 to-fuchsia-200 p-2 text-white hover:scale-110 hover:shadow-lg hover:shadow-white">all</button>
                <button onClick={()=>handleFilter("Desgin")} className="cursor-pointer rounded-md bg-gradient-to-r from-fuchsia-800 to-fuchsia-200 p-2 text-white hover:scale-110 hover:shadow-lg hover:shadow-white">design</button>
                <button onClick={()=>handleFilter("React")} className="cursor-pointer rounded-md bg-gradient-to-r from-fuchsia-800 to-fuchsia-200 p-2 text-white hover:scale-110 hover:shadow-lg hover:shadow-white">React</button>
            </div>
            
            
        </section>
    );
}