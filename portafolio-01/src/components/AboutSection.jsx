import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () =>{
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Developer passionate about new technologies
                    </h3>
                    <p className="text-muted-foreground">
                        {" "}
                       With over three years of experience as a full-stack developer, focused on creating systems that require high availability, as well as process optimization and automation, all with cutting-edge technologies.
                    </p>
                    <p className="text-muted-foreground">
                        {" "}
                        I am a person who likes to research topics that I don't know about in order to increase my knowledge and offer new solutions that are more optimal, precise and concise. I like to work in a team and be able to express my ideas to contribute new functionality to projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primaryd text-primary hover:bg-primary/10  transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 ">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Full-Stack developer
                                </h4>
                                <p className="text-muted-foreground">{" "} 
Creating complex systems using microservices and brokers, all focused on Kubernetes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Computer Systems Engineer
                                </h4>
                                <p className="text-muted-foreground">{" "} Instituto Politecnico Nacional Escuela Superior de computo 2019-2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Full stack developer in mobile concept
                                </h4>
                                <p className="text-muted-foreground">{" "} 2024 - Current</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </section>)
}