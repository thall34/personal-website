import ProjectCard from "./ProjectCard";
import ImageCarousel from "./ImageCarousel";
import mainProjects from "../data/mainProjects";

function Projects(): React.JSX.Element {
    return (
        <section className="projects">
            <h1>My Projects</h1>
            {mainProjects.map((project) => (
                project.id % 2 !== 0 ? (
                    <ProjectCard key={project.id} project={project} indentation='right' />   
                ) : (
                    <ProjectCard key={project.id} project={project} indentation='left' />
                )
            ))}
            <div className='line-break-project'/>
            <ImageCarousel height={400} />
        </section>
    )
}

export default Projects;