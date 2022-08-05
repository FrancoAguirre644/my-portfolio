import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { MainLayout } from "../layouts/MainLayout";
import { projects } from '../data/index';
import { Grow } from '@mui/material';
import ProjectDialog from '../components/ProjectDialog';

const ProjectsPage: React.FC = () => {
    return (
        <MainLayout>
            <Container component="section" sx={{ p: 4 }}>
                <Typography variant="h4" marked="center" align="center" component="h2">
                    Projects
                </Typography>
                <Grow in>
                    <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap' }}>
                        {
                            projects.map((project) => (
                                <ProjectDialog key={project.title} title="Project #1" project={project} />
                            ))
                        }
                    </Box>
                </Grow>
            </Container>
        </MainLayout>
    )
}

export default ProjectsPage;