export interface ProjectObjectLight {
    id: number,
    name: string,
    techStack: string,
    imageSrc: string,
    imageAlt: string,
}

export interface ProjectObject {
    id: number,
    url: string,
    title: string,
    imageSrc: string,
    imageAlt: string,
    imageHeight: number,
    imageWidth: number,
    description: string,
    techStack: string,
    learningOutcome: string,
};

export interface SkillObject {
    id: number,
    name: string,
    imageSrc: string,
    imageAlt: string,
};

export interface CloudImage {
    imageSrc: string,
    altText: string,
}

export interface BlogObject {
    id: number,
    name: string,
    text: string,
    publishDate: string,
    images: CloudImage[],
}

export interface SiteObject {
    id: number,
    name: string,
    url: string,
    image: CloudImage,
}