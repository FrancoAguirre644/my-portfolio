export interface Skill {
    title: string,
    url: string,
    type: string,
}

export interface SocialMediaItem {
    name: string;
    icon: any,
    url: string,
}

export interface Project {
    title: string
    description: string;
    width: string;
    stack: string[];
    urlImg: string
    urlProduction: string,
    urlGithub: string
}

export interface PersonalData {
    description: string;
    photo: string;
    socialMedia: SocialMediaItem[];
}

export interface MenuItem {
    title: string,
    url: string,
}