import { PersonalData, Project, Skill } from "../types";
import GithubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from '@mui/icons-material/MailOutlined';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const projects: Project[] = [
    {
        title: 'Blog',
        description: `
            MERN Stack Build a blog app using MERN + Typescript + Redux + Bootstrap 5 + ReactQuill + Socket.io + Twilio.
            Register, login with Email or Phone number.
            Create new blog with React quill.
            Comment realtime with Socket.io
            Pagination, search with autocomplete Mongodb.
        `,
        width: '40%',
        stack: [
            '/images/skills/react.svg',
            '/images/skills/nodejs.png',
            '/images/skills/bootstrap.svg',
            '/images/skills/mongodb.svg'
        ],
        urlImg: '/images/projects/blog.jpg',
        //urlProduction: 'https://mern-blog-app-five.vercel.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/mern-blog-app'
    },
    {
        title: 'E-commerce',
        description: 'Build a E-commerce Full Stack with Nextjs + Mongodb + React Hook + Bootstrap 4.',
        width: '30%',
        stack: [
            '/images/skills/next-js.svg',
            '/images/skills/bootstrap.svg',
            '/images/skills/mongodb.svg'
        ],
        urlImg: '/images/projects/ecommerce.jpg',
        //urlProduction: 'https://next-ecommerce-rho.vercel.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/next-ecommerce'
    },
    {
        title: 'Challenge FullStack',
        description: 'Fullstack challenge (MERN) with Typescript proposed by Alkemy.',
        width: '30%',
        stack: [
            '/images/skills/react.svg',
            '/images/skills/nodejs.png',
            '/images/skills/material-ui.svg',
            '/images/skills/mysql.png'
        ],
        urlImg: '/images/projects/challenge.jpg',
        //urlProduction: 'https://alkemy-challenge-fullstack.vercel.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/alkemy-challenge-fullstack'
    },
    {
        title: 'Chat',
        description: 'Build Realtime chat using Vue 3, Quasar Framework, Realtime Database Firebase.',
        width: '30%',
        stack: [
            '/images/skills/quasar.png',
            '/images/skills/firebase.svg',
        ],
        urlImg: '/images/projects/chat.jpg',
        urlProduction: 'https://quasar-chat.netlify.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/chat-app-quasar'
    },
    {
        title: 'My portfolio',
        description: 'My personal portfolio using React, Material UI and Typescript.',
        width: '30%',
        stack: [
            '/images/skills/react.svg',
            '/images/skills/material-ui.svg',
            '/images/skills/typescript.svg',
        ],
        urlImg: '/images/projects/portfolio.jpg',
        urlProduction: 'https://my-portfolio-red-seven.vercel.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/my-portfolio'
    },
    {
        title: 'Food order',
        description: 'Online Food Order App on React Native using Typescript.',
        width: '40%',
        stack: [
            '/images/skills/react.svg',
            '/images/skills/typescript.svg',
        ],
        urlImg: '/images/projects/orderFood.jpg',
        urlGithub: 'https://github.com/FrancoAguirre644/mern-blog-app'
    }
];

export const skills: Skill[] = [
    {
        title: 'React JS',
        url: '/images/skills/react.svg',
        type: 'frontend'
    },
    {
        title: 'Vue JS',
        url: '/images/skills/vue.png',
        type: 'frontend'
    },
    {
        title: 'Bootstrap',
        url: '/images/skills/bootstrap.svg',
        type: 'frontend'
    },
    {
        title: 'Material UI',
        url: '/images/skills/material-ui.svg',
        type: 'frontend',
    },
    {
        title: 'Spring',
        url: '/images/skills/spring.svg',
        type: 'backend',
    },
    {
        title: 'Node JS',
        url: '/images/skills/nodejs.png',
        type: 'backend',
    },
    {
        title: 'Symfony',
        url: '/images/skills/symfony.svg',
        type: 'backend',
    },
    {
        title: 'MongoDB',
        url: '/images/skills/mongodb.svg',
        type: 'backend',
    },
    {
        title: 'MySQL',
        url: '/images/skills/mysql.png',
        type: 'backend',
    },
    {
        title: 'Visual Studio Code',
        url: '/images/skills/vscode.svg',
        type: 'tool',
    },
    {
        title: 'Linux',
        url: '/images/skills/linux.svg',
        type: 'tool',
    },
    {
        title: 'Github/Gitlab',
        url: '/images/skills/github.svg',
        type: 'tool',
    },
    {
        title: 'Typescript',
        url: '/images/skills/typescript.svg',
        type: 'tool',
    },
    {
        title: 'Firebase',
        url: '/images/skills/firebase.svg',
        type: 'tool',
    }
];

export const personalData: PersonalData = {
    description: `
        I'm a software developer from Buenos Aires, Argentina. 
        Currently studying a degree in systems in UNLa. I really enjoy both designing user interfaces and 
        developing server-side code. 
        Lately I'm entering the mobile world while perfecting myself in web development.
        When I'm not coding, i do other activities like playing guitar and drawing.
    `,
    photo: '/images/profile/my_photo.jpeg',
    socialMedia: [
        {
            name: "github",
            icon: GithubIcon,
            url: "https://github.com/FrancoAguirre644",
        },
        {
            name: "whatsapp",
            icon: WhatsAppIcon,
            url: "https://api.whatsapp.com/send?phone=541139418118&text=Hi%20Franco!%20%F0%9F%91%8B",
        },
        {
            name: "email",
            icon: MailIcon,
            url: "mailto:francoaguirre644@gmail.com",
        },
        {
            name: "linkedin",
            icon: LinkedInIcon,
            url: "https://www.linkedin.com/in/franco-aguirre-6b5739194/",
        },
    ]
}

