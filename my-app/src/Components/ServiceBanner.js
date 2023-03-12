import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Contact from "../assets/contactBanner.jfif"
import { Divider } from "@mui/material";
const ServiceBanner = () => {
    return (
        <>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>

                <img src={Contact} width="100%" height="350px" />
                <Box padding="25px" sx={{
                    position: "absolute",
                    marginLeft: "1%"
                }}>

                    <Typography variant="h3" color="whitesmoke" >Our Services </Typography>
                    <Divider width="10%" color="secondary" sx={{ fontSize: "20px", fontWeight: "bold", height: "5px", borderRadius: "4px" }} />
                    <Typography marginLeft="2%" marginRight="30%" fontSize="20px" color="whitesmoke" paddingTop="20px" >Tracker & jOT is an emerging company with a tremendous experienced team. Tracker & ioT has a scalable GPS tracking management platform to help you track and maintain your vehicles and assets. Our GPS tracking solutions enable companies to identify and address the concerns that come with managing their vehicles and movable assets. Tracker & loT's state-of-the-art telematics provides App & wob-based solutions to enhance productivity with smart Information gathering and real-time data foods, all with the goal of improving workforce performance and behavior.</Typography>
                </Box>
            </Box >

            {/* RESPONSIVENESS */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>

                <img src={Contact} width="100%" height="380px" />
                <Box padding="15px" sx={{
                    position: "absolute",
                    marginLeft: "3%"
                }}>

                    <Typography variant="h3" color="whitesmoke" >Contact Us </Typography>
                    <Divider width="30%" color="secondary" sx={{ fontSize: "20px", fontWeight: "bold", height: "5px", borderRadius: "4px" }} />
                    <Typography marginLeft="1%" marginRight="20%" fontSize="20px" color="whitesmoke" paddingTop="20px" >A descriptive paragraph that tells clients how good you are and proves that you are the best choice they have made. this paragraph is also for those who are looking out for a reliable car  repair</Typography>
                </Box>
            </Box >
        </>
    )
}

export default ServiceBanner