import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Ceo from "../assets/Ceo.PNG"
import { Divider } from "@mui/material";
const AboutCeo = () => {
    return (
        <Box marginTop="15%" >
            <h2 align="center" justify="center"> CEO MESSAGE</h2>
            <Divider width="6%" color="secondary" sx={{ marginLeft: "44%", marginTop: "-1%", fontSize: "20px", fontWeight: "bold", height: "5px", borderRadius: "4px", display: { md: "flex", xs: "none" } }} />

            {/* RESPONSIVE DIVIDER */}
            <Divider width="15%" color="secondary" sx={{ marginLeft: "27.8%", marginTop: "-1%", fontSize: "20px", fontWeight: "bold", height: "5px", borderRadius: "4px", display: { md: "none", xs: "flex" } }} />


            <Box sx={{
                display: { xs: "Grid", md: "flex" },
                justifyContent: "space-around",

                paddingTop: "30px"
            }}>
                <Box marginRight="6%" marginLeft="8%">
                    <Typography>
                        Indeed it is a matter of great satisfaction that by the grace of Almighty Allah (SWT), Tracker & IOT over a period of time has shown tremendous progress in the field of vehicle tracking.
                        Induction of verity of state of the art tracking devices, chosen from all over the world has put the Tracker & IOT on the roads of technologically advanced vehicle tracking system.<br /><br />
                        Today we are more focused, streamlined, and more committed than ever to true innovation. We are proud to be part of the technology revolutionizing era providing our clients with the most innovative and creative solutions in this field.<br /><br />
                        Our 24/7 hours efficient customer services has certainly fetched maximum attention and sympathies of our valued customers towards Tracker & IOT.<br /><br />
                        Thousands of vehicles on the panel of Tracker & IOT speak volumes about the trust and satisfaction of our valued clients on the overall efficiency of this prestigious organization.<br /><br />
                        We bow our heads before Almighty Allah (SWT) to bless us with enough wisdom and strength to make Tracker & IOT more and more progressive Amen.<br /><br />
                        1 along with the entire team invites you to the world of Tracker 8
                        1O1.1 also hope and wish a prosperous future for Tracker & lOT.
                        Sincerely,
                    </Typography>
                </Box>
                <Box marginRight="7%" sx={{
                    display: { md: "flex", xs: "none" }
                }}>
                    <img src={Ceo} height="600px" width="500px" />
                </Box>

                {/* RESPONSIVE IMAGE OF CEO */}
                <Box marginRight="10%" sx={{
                    display: { md: "none", xs: "flex" },
                    justifyContent: "center",
                    paddingLeft: "30px",
                    paddingTop: "10px"

                }}>
                    <img src={Ceo} height="450px" width="400px" />
                </Box>
            </Box>
        </Box >
    )
}

export default AboutCeo