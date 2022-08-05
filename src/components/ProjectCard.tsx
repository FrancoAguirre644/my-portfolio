import React from 'react';
import { Avatar, AvatarGroup, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { Project } from '../types';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <Card>
        <CardHeader
            avatar={
                <AvatarGroup total={project.stack.length}>
                    {
                        project.stack.map(stack => (
                            <Avatar alt="Remy Sharp" src={stack} />
                        ))
                    }
                </AvatarGroup>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title={project.title}
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="194"
            src={project.url}
            alt="Paella dish"
        />
        <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
                {project.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
            <a href={project.urlGithub} target='_blank' rel="noopener noreferrer">
                <IconButton aria-label="add to favorites">
                    <GitHubIcon />
                </IconButton>
            </a>
            <a href={project.urlProduction} target='_blank' rel="noopener noreferrer">
                <IconButton aria-label="share">
                    <TerminalIcon />
                </IconButton>
            </a>
        </CardActions>
    </Card>
);

export default ProjectCard;