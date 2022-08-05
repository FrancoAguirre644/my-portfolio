export interface Skill {
    url: string,
    title: string,
    type: string,
}

export interface Project {
    url: string
    title: string
    description: string;
    width: string;
    stack: string[];
    urlProduction: string,
    urlGithub: string
}

export interface MenuItem {
    url: string,
    title: string,
}