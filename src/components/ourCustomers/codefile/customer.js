import React from "react";
import Marquee from "react-fast-marquee";
import Accenture from "../images/Accenture.png";
import ConocoPhilips from "../images/ConocoPhilips.png";
import KWARTS from "../images/KWARTS.png";
import M from "../images/M.png";
import Staples from "../images/Staples.png";
import Veeve from "../images/Veeve.png";
import MSC from "../images/MSC.png";
import { Box, Typography, Container, useMediaQuery, useTheme, Button } from "@mui/material";
import AnimatedVideo from "../Videos/animatedvideo.mp4";

const marqueeStyle = {
    backgroundColor: "#07071C", // Background color
    padding: "10px", // Padding to control spacing
};

const marqueeItemStyle = {
    marginRight: "30px", // Adjust the gap between items as needed
};

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "100px",
};

function CustomerApp() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div style={{ backgroundColor: "#07071C" }}>
            <Container style={containerStyle}>
                <Typography
                    sx={{
                        fontSize: isMobile ? "16px" : "20px",
                        color: "white",
                        marginTop: "120px",
                        fontWeight: "bold",
                        marginLeft: isMobile ? "none" : "-86%",
                        paddingBottom: "20px", // Add spacing between title and marquee
                    }}
                >
                    OUR CUSTOMERS
                </Typography>
                <Marquee style={marqueeStyle} speed={isMobile ? 10 : 20}>
                    <div style={marqueeItemStyle}>
                        <Accenturefun />
                    </div>
                    <div style={marqueeItemStyle}>
                        <ConocoPhilipsfun />
                    </div>
                    <div style={marqueeItemStyle}>
                        <Staplesfun />
                    </div>
                    <div style={marqueeItemStyle}>
                        <KWARTSfun />
                    </div>
                    <div style={marqueeItemStyle}>
                        <Mfun />
                    </div>
                    <div style={marqueeItemStyle}>
                        <Veevefun />
                    </div>
                    <div style={marqueeItemStyle}>
                        <MSCfun />
                    </div>
                </Marquee>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        paddingTop: isMobile ? "100px" : "200px",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: "white",
                            }}
                        >
                            How we Help
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: isMobile ? "20px" : "36px",
                                color: "white",
                            }}
                        >
                            Deliver Digital Experiences Better Than Anyone!
                        </Typography>
                        <br />
                        <Typography
                            sx={{
                                fontSize: isMobile ? "13px" : "16px",
                                color: "white",
                            }}
                        >
                            VisionX is your one-stop bespoke software shop. We align with your
                            priorities, move fast, and deliver quality software that
                            significantly grows your brand. Start with us anywhere in your
                            product lifecycle journey.
                        </Typography>
                        <br />
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "19px",
                                backgroundColor: "white",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: isMobile ? "13px " : "16px",
                                marginBottom: isMobile ? "20px" : "none",
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                    <Box>
                        <video width="100%" controls>
                            <source src={AnimatedVideo} type="video/mp4" />
                        </video>
                    </Box>
                </Box>

                <Box
                    sx={{
                        marginTop: "100px",
                        backgroundColor: "#121228",
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "120px",
                    }}
                >
                    <Box
                        sx={{
                            marginTop: "100px",
                            marginLeft: "60px",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "white",
                            }}
                        >
                            SERVICES
                        </Typography>

                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "36px",
                                fontWeight: "bold",
                            }}
                        >
                            We Work With Foundational and Emerging Tech Stacks
                        </Typography>
                    </Box>

                    <Box sx={{ marginTop: "70px", width: "80%" }}>
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "30px",
                                fontWeight: "bold",
                            }}
                        >
                            Computer Vision
                        </Typography>
                        <br />
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "19px",
                            }}
                        >
                            We specialize in extracting valuable insights from visual streams,
                            images according to industry and use cases.
                        </Typography>
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "30px",
                                fontWeight: "bold",
                                marginTop: "30%",
                            }}
                        >
                            AR/VR
                        </Typography>
                        <br />
                        <Typography
                            sx={{
                                color: "white",
                            }}
                        >
                            OUR AR/VR unit is always thinking ahead is pushing boundaries on
                            the existing form factors by creating photorealistic 3D assets and
                            scenes for rendering across smartphones, web, and VR headsets.
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: "45px", width: "80%" }}>
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "30px",
                                fontWeight: "bold",
                            }}
                        >
                            OCR/NLP
                        </Typography>
                        <br />
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "19px",
                            }}
                        >
                            We enable extracting of data from digital images, docs, and speech
                            to contextualize understand semantics.
                        </Typography>
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "30px",
                                fontWeight: "bold",
                                marginTop: "30%",
                            }}
                        >
                            Blockchain
                        </Typography>
                        <br />
                        <Typography
                            sx={{
                                color: "white",
                            }}
                        >
                            We continue to research and test practical use cases of Blockchain
                            and NFTs and partner with like-minded business to unlock value
                            behind the future of blockchain.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
function Accenturefun() {
    return <img src={Accenture} alt="Accenture" />;
}
function ConocoPhilipsfun() {
    return <img src={ConocoPhilips} alt="ConocoPhilips" />;
}
function KWARTSfun() {
    return <img src={KWARTS} alt="KWARTS" />;
}
function Mfun() {
    return <img src={M} alt="M" />;
}
function Staplesfun() {
    return <img src={Staples} alt="Staples" />;
}
function Veevefun() {
    return <img src={Veeve} alt="Veeve" />;
}
function MSCfun() {
    return <img src={MSC} alt="MSC" />;
}
export default CustomerApp;
