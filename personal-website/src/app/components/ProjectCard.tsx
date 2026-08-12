import Image from 'next/image';
import Link from 'next/link';
import { ProjectObject } from '../types/types';

function ProjectCard({ project, indentation }: { project: ProjectObject, indentation: string }): React.JSX.Element {
    if (indentation === 'right') {
        return (
            <div className={`project-card ${indentation} custom-background`}>
                <div className='project-card-body'>
                    <p>{project.description}</p>
                    <p>{project.techStack}</p>
                    <p>{project.learningOutcome}</p>
                </div>
                <div className='project-card-header'>
                    <Link href={project.url} target='_blank' rel='noopener noreferrer'>
                        <h1>{project.title}</h1>
                    </Link>
                    <Image src={project.imageSrc} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} />
                </div>
            </div>
        )
    };

    return (
        <div className={`project-card ${indentation} custom-background`}>
            <div className='project-card-header'>
                <Link href={project.url} target='_blank' rel='noopener noreferrer'>
                    <h1>{project.title}</h1>
                </Link>
                <Image src={project.imageSrc} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} />
            </div>
            <div className='project-card-body'>
                <p>{project.description}</p>
                <p>{project.techStack}</p>
                <p>{project.learningOutcome}</p>
            </div>
        </div>
    )
};

export default ProjectCard;