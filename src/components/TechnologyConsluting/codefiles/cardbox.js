import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, useMediaQuery, useTheme, Container } from '@mui/material';
import Technology from "../images/Technology-Consulting-2.png";
import softwareDevelopment from "../images/Software-Development-2.png";
import hireondemand from "../images/On-demand.png";
import business from "../images/Business-Intelligence-2.png";

const ImgMediaCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const cardData = [
        {
            title: 'Technology Consulting',
            imageSrc: Technology,
            description: 'Get access to our industry expertise to shape your tech strategy, digital transformation journey, and product/platform roadmaps.',
        },
        {
            title: 'Software Development',
            imageSrc: softwareDevelopment,
            description: 'Launch new digital products and applications with turnkey outsourcing to an experienced team while protecting your IP.',
        },
        {
            title: 'Hire On-demand Teams',
            imageSrc: hireondemand,
            description: 'Augment your existing teams with our skillful software and engineering talent to accelerate development or manage existing applications.',
        },
        {
            title: 'Business Intelligence',
            imageSrc: business,
            description: 'Surface data-driven insights for your business by leveraging our data science and analytics talent to build and run your BI stack.',
        },
    ];

    const animationStyle = {
        animation: `
            @keyframes moveBottomToTop {
                0% {
                    transform: translateY(100%);
                }
                100% {
                    transform: translateY(0);
                }
            }
            moveBottomToTop 1.5s ease-in-out`, // Apply the animation
        overflow: 'hidden', // Hide overflowing text during animation
    };

    return (
        <Box sx={{ backgroundColor: "#07071C" }}>
            <Container>
                <Grid container justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 4}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card sx={{
                                maxWidth: 290,
                                color: 'white',
                                paddingTop: "60px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: "20px",
                                backgroundColor: index % 2 === 0 ? '#121228' : '#B6388D',
                                ...animationStyle, // Apply animation style
                            }}>
                                <CardMedia
                                    component="img"
                                    alt={`logo-${index}`}
                                    image={card.imageSrc}
                                    sx={{
                                        width: isMobile ? '20%' : '20%', // Adjust image width for mobile/desktop
                                        height: 'auto',
                                        display: 'block',
                                        margin: 'auto',
                                    }}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                        {card.description}
                                    </Typography>
                                    <br />
                                    <br />
                                    <Button variant="contained" sx={{ borderRadius: "13px", backgroundColor: "white", color: "black", marginBottom: "60px" }}>Learn More</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default ImgMediaCard;
