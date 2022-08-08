import { MenuItem } from "../types";
import InfoIcon from "@mui/icons-material/InfoRounded";
import ProjectIcon from '@mui/icons-material/DynamicFeedOutlined';
import ContactIcon from '@mui/icons-material/MailOutlined';
import SkillIcon from '@mui/icons-material/IntegrationInstructionsOutlined';

export const menu: MenuItem[] = [
    {
        title: 'About Me',
        icon: InfoIcon,
        url: '/about'
    },
    {
        title: 'Skills',
        icon: SkillIcon,
        url: '/skills'
    },
    {
        title: 'Projects',
        icon: ProjectIcon,
        url: '/projects'
    },
    {
        title: 'Contact',
        icon: ContactIcon,
        url: '/contact'
    }
];