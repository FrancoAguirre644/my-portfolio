import { Project, Skill } from "../types";

export const projects: Project[] = [
    {
        url: '/images/projects/blog.jpg',
        title: 'Blog',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        width: '40%',
        stack: [
            'https://cdn.worldvectorlogo.com/logos/react-2.svg',
            'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
            'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
            'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'
        ],
        urlProduction: 'https://mern-blog-app-five.vercel.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/mern-blog-app'
    },
    {
        url: '/images/projects/ecommerce.jpg',
        title: 'E-commerce',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        width: '30%',
        stack: [
            'https://cdn.worldvectorlogo.com/logos/next-js.svg',
            'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
            'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'
        ],
        urlProduction: 'https://next-ecommerce-rho.vercel.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/next-ecommerce'
    },
    {
        url: '/images/projects/challenge.jpg',
        title: 'Challenge FullStack',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        width: '30%',
        stack: [
            'https://cdn.worldvectorlogo.com/logos/react-2.svg',
            'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
            'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
            'https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png'
        ],
        urlProduction: 'https://alkemy-challenge-fullstack.vercel.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/alkemy-challenge-fullstack'
    },
    {
        url: '/images/projects/chat.jpg',
        title: 'Chat',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        width: '38%',
        stack: [
            'https://upload.wikimedia.org/wikipedia/en/2/29/Quasar_Logo.png',
            'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
        ],
        urlProduction: 'https://quasar-chat.netlify.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/chat-app-quasar'
    },
    {
        url: 'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400',
        title: 'Gastronomy',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        width: '38%',
        stack: [
            'https://cdn.worldvectorlogo.com/logos/react-2.svg',
            'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
            'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg'
        ],
        urlProduction: 'https://mern-blog-app-five.vercel.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/mern-blog-app'
    },
    {
        url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400',
        title: 'Shopping',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        width: '24%',
        stack: [
            'https://cdn.worldvectorlogo.com/logos/react-2.svg',
            'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
            'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg'
        ],
        urlProduction: 'https://mern-blog-app-five.vercel.app/',
        urlGithub: 'https://github.com/FrancoAguirre644/mern-blog-app'
    }
];

export const skills: Skill[] = [
    {
        url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        title: 'React JS',
        type: 'frontend'
    },
    {
        url: 'https://coryrylan.com/assets/images/posts/types/vue-1280x960.png',
        title: 'Vue JS',
        type: 'frontend'
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
        title: 'Bootstrap',
        type: 'frontend'
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
        title: 'Material UI',
        type: 'frontend',
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg',
        title: 'Spring',
        type: 'backend',
    },
    {
        url: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
        title: 'Node JS',
        type: 'backend',
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/symfony.svg',
        title: 'Symfony',
        type: 'backend',
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
        title: 'MongoDB',
        type: 'backend',
    },
    {
        url: 'https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png',
        title: 'MySQL',
        type: 'backend',
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
        title: 'Visual Studio Code',
        type: 'tool',
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg',
        title: 'Linux',
        type: 'tool',
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
        title: 'Github/Gitlab',
        type: 'tool',
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
        title: 'Typescript',
        type: 'tool',
    },
    {
        url: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
        title: 'Firebase',
        type: 'tool',
    }
];

export const personalData = {
    description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Hic ratione asperiores dignissimos quis voluptates esse,
        laboriosam ab placeat in quasi eligendi consequatur id, animi ducimus.
        Itaque dolorum cum consequuntur unde ipsa voluptates est qui eligendi,
        illum quidem quod accusantium alias assumenda repellat repellendus
        facilis vero voluptate totam quaerat perspiciatis doloribus.
        illum quidem quod accusantium alias assumenda repellat repellendus
        facilis vero voluptate totam quaerat perspiciatis doloribus.
    `,
    photo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
}

