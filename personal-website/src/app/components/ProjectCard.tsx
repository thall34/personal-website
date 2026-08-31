'use client'

import Link from 'next/link';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { ProjectObject } from '../types/types';

function ProjectCard({ project }: { project: ProjectObject }): React.JSX.Element {
    const cld = new Cloudinary({
        cloud: {
            cloudName: `${process.env.NEXT_PUBLIC_CLOUD_NAME}`
        }
    });

    const image = cld
        .image(project.imageSrc)
        .quality('auto')
        .format('auto');

    if (project.id % 2 === 0) {
        return (
            <div className='project-card fly-in-left'>
                <div className='project-card-header'>
                    <Link href={project.url} target='_blank' rel='noopener noreferrer'>
                        <h1>{project.title}</h1>
                    </Link>
                    <AdvancedImage
                        cldImg={image}
                        alt={project.imageAlt}
                        width={project.imageWidth}
                        height={project.imageHeight}
                    />
                </div>
                <div className='project-card-body'>
                    <p>{project.description}</p>
                    <p>{project.techStack}</p>
                    <p>{project.learningOutcome}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='project-card fly-in-right'>
            <div className='project-card-header'>
                <Link href={project.url} target='_blank' rel='noopener noreferrer'>
                    <h1>{project.title}</h1>
                </Link>
                <AdvancedImage
                    cldImg={image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                />
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