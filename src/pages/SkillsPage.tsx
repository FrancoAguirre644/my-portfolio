import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { MainLayout } from '../layouts/MainLayout';
import { skills } from '../data/index';
import SkillCard from '../components/SkillCard';
import Button from '../components/Button';
import { ButtonGroup } from '@mui/material';

const SkillsPage: React.FC = () => {

    const [typeFilter, setTypeFilter] = React.useState<string>("frontend");

    const buttons = [
        <Button
            key="frontend"
            variant={typeFilter === "frontend" ? "contained" : "outlined"}
            onClick={() => setTypeFilter("frontend")}
            size="small"

        >
            Frontend
        </Button>,
        <Button
            key="backend"
            variant={typeFilter === "backend" ? "contained" : "outlined"}
            onClick={() => setTypeFilter("backend")}
            size="small"

        >
            Backend
        </Button>,
        <Button
            key="tool"
            variant={typeFilter === "tool" ? "contained" : "outlined"}
            onClick={() => setTypeFilter("tool")}
            size="small"
        >
            Tools
        </Button>
    ];

    return (
        <MainLayout>
            <Box
                component="section"
                sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
            >
                <Container
                    sx={{
                        mt: 4,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="https://gitlab.create-ion.at/lt/material-ui/-/raw/v4.0.2/static/themes/onepirate/productCurvyLines.png"
                        alt="curvy lines"
                        sx={{
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: -180,
                            opacity: 0.7,
                        }}
                    />
                    <Typography variant="h4" marked="center" component="h2" sx={{ mb: 2 }}>
                        Skills
                    </Typography>
                    <ButtonGroup size="small" color="secondary" sx={{ mb: 3 }}>
                        {buttons}
                    </ButtonGroup>
                    <Grid container spacing={5} mb={7} justifyContent={'center'}>
                        {
                            skills.filter(skill => skill.type === typeFilter).map((filteredSkill, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <SkillCard skill={filteredSkill} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    );
}

export default SkillsPage;