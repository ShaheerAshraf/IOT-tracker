import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import About from "../assets/aboutBanner.jpg"
import { Divider } from "@mui/material";
import Capture from "../assets/Capture.PNG"
import ResponsiveAppBar from "./Appbar";

const AboutBanner = () => {
    return (
        <Box>
            <ResponsiveAppBar />
            <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: 'row' }}>

                <img src={About} width="100%" height="870px" />
                <Box paddingTop="20px" sx={{
                    position: "absolute",
                    marginLeft: "5%",

                }}>

                    <Typography variant="h3" color="whitesmoke" >About Us </Typography>
                    <Divider width="10%" color="secondary" sx={{ fontSize: "20px", fontWeight: "bold", height: "5px", borderRadius: "4px" }} />
                    <Typography fontSize="20px" marginRight="15%" color="whitesmoke" marginLeft="5%" sx={{ lineHeight: "40px" }}>Tracker $ IoT is an emerging company with a tremendous experienced team. Tracker & IoT has a scalable GPS tracking management platform to help you track and maintain your vehicles and assets. Our GPS tracking soloutions enable companies to identify and address the concerns that come with managing their vehicles and movable assets. Tracker & IoT's state-of-the-art telematics provides App and web-based solutions to enhance productivity with smart information gathering and real-time data feeds, all with the goal of improving workforce performance and behaviour.<br />
                        Best of all these services are easily integratedinto your fleetwith the help of our talentedteam and knowledgeable support staff<br />
                        Our World Class Tracking System is highly expedient especially among Corporate Segment and Individuals as they are quite efficient. Tracker & loT Is proud to say that we have made vehicle tracking a lot more easier than ever before. We've ascertained our self as the pioneer in the Industry of Tracking and Navigation Technology worldwide by introducing most innovative and state of the art technology in Tracking Service Industry.<br />
                        Tracker & loT offers an easy to learn and manage tracking platform that assists fleet managers in creating more efficient operations. Tracker & loT's cost effective solutions provide visual vehicle location systems, engine diagnostics for better vehicle maintenance, economical routing for lower fuel consumption and easy speed and mileage management. Our goal is to give fleet managers the knowledge needed to reduce operating expenses and maximize productivity.
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }} >
                        <img src={Capture} width="70%" />
                    </Box>
                </Box>

            </Box >


            {/* RESPONSIVENESS */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>

                <img src={About} width="100%" height="600px" />
                <Box padding="15px" sx={{
                    position: "absolute",
                    marginLeft: "2%"
                }}>

                    <Typography variant="h3" color="whitesmoke" >About Us </Typography>
                    <Divider width="30%" color="secondary" sx={{ fontSize: "20px", fontWeight: "bold", height: "5px", borderRadius: "4px" }} />
                    <Typography fontSize="12px" color="whitesmoke" paddingTop="10px">Tracker $ IoT is an emerging company with a tremendous experienced team. Tracker & IoT has a scalable GPS tracking management platform to help you track and maintain your vehicles and assets. Our GPS tracking soloutions enable companies to identify and address the concerns that come with managing their vehicles and movable assets. Tracker & IoT's state-of-the-art telematics provides App and web-based solutions to enhance productivity with smart information gathering and real-time data feeds, all with the goal of improving workforce performance and behaviour.
                        Best of all these services are easily integratedinto your fleetwith the help of our talentedteam and knowledgeable support staff<br />
                        Our World Class Tracking System is highly expedient especially among Corporate Segment and Individuals as they are quite efficient. Tracker & loT Is proud to say that we have made vehicle tracking a lot more easier than ever before. We've ascertained our self as the pioneer in the Industry of Tracking and Navigation Technology worldwide by introducing most innovative and state of the art technology in Tracking Service Industry.<br />
                        Tracker & loT offers an easy to learn and manage tracking platform that assists fleet managers in creating more efficient operations. Tracker & loT's cost effective solutions provide visual vehicle location systems, engine diagnostics for better vehicle maintenance, economical routing for lower fuel consumption and easy speed and mileage management. Our goal is to give fleet managers the knowledge needed to reduce operating expenses and maximize productivity.
                    </Typography>
                </Box>
            </Box >
        </Box>
    )
}

export default AboutBanner