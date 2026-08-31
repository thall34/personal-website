import ProjectCard from "./ProjectCard";
import ImageCarousel from "./ImageCarousel";
import mainProjects from "../data/mainProjects";

function Projects(): React.JSX.Element {
    return (
        <section id="projects">
            <h1><span>Selected</span> <span className="highlight-text">Projects</span></h1>
            {mainProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />   
            ))}
            <div className='line-break-project'/>
            <ImageCarousel />
        </section>
    )
}

export default Projects;