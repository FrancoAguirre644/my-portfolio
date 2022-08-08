import React from 'react';
import { Avatar, AvatarGroup, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { Project } from '../types';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

interface ProjectCardProps {
    project: Project;
    closeDialog: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, closeDialog }) => (
    <Card>
        <CardHeader
            avatar={
                <AvatarGroup total={project.stack.length}>
                    {
                        project.stack.map((stack, index) => (
                            <Avatar key={index} alt="stack" src={stack} />
                        ))
                    }
                </AvatarGroup>
            }
            action={
                <IconButton onClick={() => closeDialog()}>
                    <CloseIcon />
                </IconButton>
            }
            title={project.title}
        />
        <CardMedia
            component="img"
            height="194"
            src={project.urlImg}
            alt="project"
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
            {
                project.urlProduction && (
                    <a href={project.urlProduction} target='_blank' rel="noopener noreferrer">
                        <IconButton aria-label="share">
                            <TerminalIcon />
                        </IconButton>
                    </a>
                )
            }

        </CardActions>
    </Card>
);

export default ProjectCard;