import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

const socialItems = [
    { icon: GithubIcon, url: "https://github.com/FrancoAguirre644", name: "github" },
    { icon: WhatsAppIcon, url: "https://api.whatsapp.com/send?phone=541139418118&text=Hi%20Franco!%20%F0%9F%91%8B", name: "whatsapp" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/in/franco-aguirre-6b5739194/", name: "linkedin" },
];

const SocialMedia: React.FC = () => {
    return (
        <Grid container>
            {socialItems.map((item) => (
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