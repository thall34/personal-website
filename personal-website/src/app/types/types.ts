export interface ProjectObjectLight {
    id: number;
    name: string;
    techStack: string;
    imageSrc: string;
    imageAlt: string;
}

export interface ProjectObject {
    id: number;
    url: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    imageHeight: number;
    imageWidth: number;
    description: string;
    techStack: string;
    learningOutcome: string;
};

export interface SkillObject {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt: string;
};