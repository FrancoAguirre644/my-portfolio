import * as React from 'react';
import { Box, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from './Typography';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

interface ProjectDialogProps {
    project: Project;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ImageIconButton
                key={project.title}
                style={{
                    width: project.width,
                }}
                onClick={() => handleClickOpen()}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                        backgroundImage: `url(${project.urlImg})`,
                    }}
                />
                <ImageBackdrop />
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'common.white',
                    }}
                >
                    <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        className="imageTitle"
                    >
                        {project.title}
                        <div className="imageMarked" />
                    </Typography>
                </Box>
            </ImageIconButton>
            <BootstrapDialog
                onClose={handleClose}
                open={open}
            >
                <DialogContent>
                    <ProjectCard project={project} closeDialog={handleClose} />
                </DialogContent>
            </BootstrapDialog>
        </>
    );
}

export default ProjectDialog;