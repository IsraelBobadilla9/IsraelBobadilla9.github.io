import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 4,
        title:"Buscador de bebidas",
        description:"Website specialized in cocktails, allows you to enter any alcoholic beverage and using a specific category allows you to search for all recipes related to the selected categories.",
        image:"/projects/buscador.png",
        tags: ["React","TailwindCSS"],
        demoUrl:"https://jade-gumption-04034e.netlify.app/",
        githubUrl:"#"
    },
    {
        id: 5,
        title:"Contador de calorias",
        description:"Project carried out in react to be able to count the calories that a person has consumed daily, in addition to being able to record activities that burn said calories, this allows people to keep their diet in balance",
        image:"/projects/contador.png",
        tags: ["React","TailwindCSS"],
        demoUrl:"https://lovely-naiad-d4eab0.netlify.app/",
        githubUrl:"#"
    },
    {
        id: 6,
        title:"Agenda Universal",
        description:"This project was created while I was in college. It's built with PHP for the backend and purely with JS and SASS for the frontend. It allows users to schedule events to remind them of them, as well as real-time notifications so they can be aware of upcoming activities. Note: The backend could not be uploaded due to the need to host a server.",
        image:"/projects/agenda.png",
        tags: ["PHP","Javascript","MySQL","SASS"],
        demoUrl:"https://eager-goldstine-91342c.netlify.app/",
        githubUrl:"https://github.com/danbobadilla9/IngenieriaSoftware"
    }
]


export const ProjectsSection = () =>{
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-1xl mx-auto ">
                    here are some of my recent projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project,key) => (
                            <div 
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className=" border px-2 py-1 text-sm font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                <h3 className="text-xl font-semibold bm-2">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a target="_blank" href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                        </a>
                                        <a target="_blank" href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="text-center mt-12">
                        <a target="_blank"  href="github.com" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                            Check My Github <ArrowRight size={16}/>
                        </a>
                </div>
            </div>
        </section>
    )
}