import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Contact from "../assets/contactBanner.jfif"
import { Divider } from "@mui/material";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from "../theme";
const ContactBanner = () => {
    return (
        <>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>

                <img src={Contact} width="100%" height="300px" />
                <Box padding="25px" sx={{
                    position: "absolute",
                    marginLeft: "9%"
                }}>

                    <Typography variant="h3" color="whitesmoke" >Contact Us </Typography>
                    <Divider width="10%" color="#2BAAE1" sx={{ fontSize: "20px", fontWeight: "bold", height: "5px", borderRadius: "4px" }} />
                    <Typography marginLeft="2%" marginRight="55%" fontSize="20px" color="whitesmoke" paddingTop="15px">A descriptive paragraph that tells clients how good you are and proves that you are the best choice they have made. this paragraph is also for those who are looking out for a reliable car  repair</Typography>
                </Box>
            </Box >

            {/* RESPONSIVENESS */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>

                <img src={Contact} width="100%" height="320px" />
                <Box padding="15px" sx={{
                    position: "absolute",
                    marginLeft: "3%"
                }}>

                    <Typography variant="h3" color="whitesmoke">Contact Us </Typography>
                    <Divider width="30%" color="#2BAAE1" sx={{ fontSize: "20px", fontWeight: "bold", height: "5px", borderRadius: "4px" }} />
                    <Typography marginLeft="1%" marginRight="10%" fontSize="20px" color="whitesmoke">A descriptive paragraph that tells clients how good you are and proves that you are the best choice they have made. this paragraph is also for those who are looking out for a reliable car  repair</Typography>
                </Box>
            </Box >
        </>
    )
}

export default ContactBanner