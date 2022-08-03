import React from 'react';
import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import { Skill } from '../types';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
    <Card sx={{ height: '100%' }}>
        <CardContent>
            <Grid
                container
                spacing={3}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                    >
                        {skill.title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            height: 56,
                            width: 56,
                        }}
                        src={skill.url}
                    >
                        <MoneyIcon />
                    </Avatar>
                </Grid>
            </Grid>
            <Box
                sx={{
                    pt: 2,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={50} color="secondary" />
                </Box>
            </Box>
        </CardContent>
    </Card>
);

export default SkillCard;