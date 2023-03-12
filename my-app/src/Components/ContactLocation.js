import React from 'react'

import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'

import { Divider } from "@mui/material";
import LocationOn from '@mui/icons-material/LocationOn';
import Email from '@mui/icons-material/Email';
import Call from '@mui/icons-material/Call';
const ContactLocation = () => {
    return (
        <>

            <Box sx={{ padding: '30px' }}>

                <Container sx={{
                    display: { xs: "", md: "flex" },
                    paddingTop: '30px',
                    justifyContent: "space-between"
                }}>
                    <Box>
                        <Typography sx={{
                            paddingTop: '50px',
                            color: '#004d40'

                        }}>
                            <br />
                            <Typography variant="h4" padding="10px">TRACKER & IOT PVT LTD <br /></Typography>
                            <Divider width="30%" color="#2BAAE1" sx={{ fontSize: "20px", fontWeight: "bold", height: "5px", borderRadius: "4px", marginLeft: "2%" }} />
                            <Typography variant='h5' padding="20px"> <LocationOn fontSize='large' sx={{ color: "#2BAAE1" }} />45-C STREET 14   <br /><br />

                                <Call fontSize='large' color="#2BAAE1" sx={{ color: "#2BAAE1" }} /> CALL US: 123-456-789 <br /><br />
                                <Email fontSize='large' color="#2BAAE1" sx={{ color: "#2BAAE1" }} /> EMAIL US: infotracker-iot.com</Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ display: { md: "flex", xs: "none" } }} >
                        <iframe style={{ width: '700px', height: '400px', }} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University Of Karachi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </Box>

                    {/* for responsiveness */}
                    <Box sx={{ display: { md: "none", xs: "" }, paddingTop: "15px" }} >
                        <iframe style={{ width: '100%', height: '300px', }} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University Of Karachi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </Box>
                </Container>

            </Box >


        </>
    )
}

export default ContactLocation
