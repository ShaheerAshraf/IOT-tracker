import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Footer from '../Components/Footer'
import "../Styles/ServicePage.css"
import ServiceBanner from '../Components/ServiceBanner'
const ServicePage = () => {
    return (
        <>
            <ServiceBanner />
            <div className='services'>
                <div className='services-content'>
                    <Container sx={{ border: "1px solid black", width: "80%", height: '80%', borderRadius: '26px', }}>
                        <Typography sx={{ textAlign: "center", color: "#2A2462", paddingTop: "30px", fontWeight: 'bold', fontSize: '30px' }}>Vehicle Tracking </Typography>
                        <Typography sx={{ textAlign: 'center', paddingTop: '10px', color: 'grey', fontWeight: 'bold' }}>
                            Tracker & IOT offer the widest coverage accros Pakistan, in real-time. Track your car/vehicle accross iOs,Android and <br />
                            the Web. We provide the complete solutions, including both Software and Hardware solutions for real-time GPS and <br />
                            monitoring.
                        </Typography>
                    </Container>
                </div>

                <div className='services-content'>
                    <Container sx={{ border: "1px solid black", width: "80%", height: '80%', borderRadius: '26px' }} >
                        <Typography sx={{ textAlign: "center", color: "#2A2462", paddingTop: "30px", fontWeight: 'bold', fontSize: '30px' }}>Fleet Management</Typography>
                        <Typography sx={{ textAlign: 'center', paddingTop: '10px', color: 'grey', fontWeight: 'bold' }}>
                            We provide Fleet Management Solution with Latest Mobile Application and Web Tracking. GPS tracking and fleet <br />
                            management solutions that significantly help increases productivity, cut costs, improve safety and service. With our <br />
                            fleet tracking solutions, you will receive up to date information on all your vehicles across the Pakistan.
                        </Typography>
                    </Container>
                </div>

                <div className='services-content'>
                    <Container sx={{ border: "1px solid black", width: "80%", height: '80%', borderRadius: '26px' }} >
                        <Typography sx={{ textAlign: "center", color: "#2A2462", paddingTop: "30px", fontWeight: 'bold', fontSize: '30px' }}>Software Development</Typography>
                        <Typography sx={{ textAlign: 'center', paddingTop: '10px', color: 'grey', fontWeight: 'bold' }}>
                            We believe that leveraging effective software solutions for business is critical in a competitive market. With the right<br />
                            software, you can streamline workloads, improve business productivity, reduce costs, and solve numerous business <br />
                            challenges. Custom business software that is expertly developed for your needs is something that can make the <br />
                            difference between taking a leap forward or falling behind your competitors.
                        </Typography>
                    </Container>
                </div>

                <div className='services-content'>
                    <Container sx={{ border: "1px solid black", width: "80%", height: '80%', borderRadius: '26px' }} >
                        <Typography sx={{ textAlign: "center", color: "#2A2462", paddingTop: "30px", fontWeight: 'bold', fontSize: '30px' }}>Web Development</Typography>
                        <Typography sx={{ textAlign: 'center', paddingTop: '10px', color: 'grey', fontWeight: 'bold' }}>
                            We provides custom web development services. Web development is our core competency and we have an   <br />
                            established approach to working with customers around the globe. If you need a website that achieves your business <br />
                            goals, we can design, build, test, and ensure it works perfectly on all devices.
                        </Typography>
                    </Container>
                </div>

                <div className='services-content'>
                    <Container sx={{ border: "1px solid black", width: "80%", height: '80%', borderRadius: '26px', }} >
                        <Typography sx={{ textAlign: "center", color: "#2A2462", paddingTop: "30px", fontWeight: 'bold', fontSize: '30px' }}>Application Development </Typography>
                        <Typography sx={{ textAlign: 'center', paddingTop: '10px', color: 'grey', fontWeight: 'bold' }}>
                            Demand associated with various mobile apps is escalating consistently in almost every type of business. For this, <br />
                            our Mobile App Development team acts as an accelerator to design and develop innovative apps. We provide IOS <br />
                            and Android app development services. Our mobile team develops sophisticated back-end systems, and creates <br />
                            stunning user friendly front-end interfaces.
                        </Typography>
                    </Container>
                </div>

                <div>
                    <Container sx={{ border: '6px solid #2A2462', width: '65%', height: '80%', backgroundColor: '#2BAAE1' }}>
                        <div >
                            <Typography sx={{ color: 'white', fontSize: '30px', fontWeight: 'bold', textAlign: 'center', paddingTop: '20px', paddingBottom: '15px' }}>FEEL FREE TO CALL 24/7</Typography>
                            <div className='contact'>
                                <Container sx={{
                                    border: '2px solid #2A2462', width: '50%', height: '50px', borderRadius: '20px', position: 'relative', backgroundColor: 'white', color: "#2A2462"
                                    , display: { xs: "none", md: "flex" }, justifyContent: "center", paddingBottom: "10px"
                                }}>

                                    <Typography sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', paddingTop: "10px" }}>021-36101457</Typography>
                                </Container>

                                {/* RESPONSIVE PHONE NUMBER */}
                                <Container sx={{
                                    border: '2px solid #2A2462', width: '90%', height: '40px', borderRadius: '20px', position: 'relative', backgroundColor: 'white', color: "#2A2462"
                                    , display: { xs: "flex", md: "none" }, justifyContent: "center", paddingBottom: "10px"
                                }}>

                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold', paddingTop: "10px" }}>021-36101457</Typography>
                                </Container>

                            </div>
                        </div>
                    </Container>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default ServicePage