import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { SocialMediaItem } from "../types";

interface SocialMediaProps {
    socialMediaItems: SocialMediaItem[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ socialMediaItems }) => {
    return (
        <Grid container>
            {socialMediaItems.map((item: SocialMediaItem) => (
                <Grid item key={item.name}>
                    <a href={item.url} target='_blank' rel="noopener noreferrer">
                        <IconButton size="large" color="primary">
                            <item.icon />
                        </IconButton>
                    </a>
                </Grid>
            ))}
        </Grid>
    )
}

export default SocialMedia;