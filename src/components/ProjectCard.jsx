


export default function ProjectCard({ project }) {
  
  
    return (
    <div
      className="group flex flex-col gap-3 rounded-xl border border-fuchsia-400 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-200">
 
       <div className="relative h-28 overflow-hidden rounded">
        <img src={project.img} alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"/>

        <span className="absolute left-2 top-2 rounded bg-fuchsia-700 px-2 py-0.5 text-xs text-white">
          {project.type}
        </span>
      </div>

      <h3 className="text-center text-lg font-bold text-white"> {project.title} </h3>

      <p className="text-center text-sm text-fuchsia-200"> {project.desc}</p>

      <div className="mt-auto flex justify-center gap-3">
        <a href={project.url}  target="_blank"
          className="rounded bg-fuchsia-600 px-3 py-1 text-sm text-white hover:bg-fuchsia-500">
          Live
        </a>

        <a href={project.github}  target="_blank"
            className="rounded border border-fuchsia-400 px-3 py-1 text-sm text-fuchsia-200 hover:bg-fuchsia-900">
            Code
        </a>

      </div>
    </div>
  );
}
