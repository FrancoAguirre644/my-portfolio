import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { MainLayout } from '../layouts/MainLayout';
import { skills } from '../data/skills';

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: 'secondary.main',
    fontWeight: 'medium',
};

const image = {
    height: 55,
    my: 4,
};

const SkillsPage: React.FC = () => {
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
                    <Typography variant="h4" marked="center" component="h2" sx={{ mb: 4 }}>
                        Skills
                    </Typography>
                    <div>
                        <Grid container spacing={5}>
                            {
                                skills.map((skill, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <Box sx={item}>
                                            <Box sx={number}>{skill.title}.</Box>
                                            <Box
                                                component="img"
                                                src={skill.url}
                                                alt="suitcase"
                                                sx={image}
                                            />
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                </Container>
            </Box>
        </MainLayout>
    );
}

export default SkillsPage;