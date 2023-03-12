import React from 'react'

import "../Styles/HomePage.css"
import CompanyLogo from '../assets/companybanner.png'
import { Typography, Box } from '@mui/material'
import banner from '../assets/banner2.png'
import Container from '@mui/material/Container'
import PublicIcon from '@mui/icons-material/Public';
import Features from '../Components/Features'
import ResponsiveAppBar from '../Components/Appbar'
import Review from '../Components/Review'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box className='homepage'>
        <Box >
          <img className='company-img' src={CompanyLogo} alt="" />
        </Box>
        <Typography sx={{ textAlign: 'center', color: 'white', paddingBottom: '50px' }}>Tracker & IOT is a leading company in the field of tracking. We work 24/7 to help you manage your vehicle without any worries.
          <br />
          Whether you have a small fleet of vehicles or a huge armada of trucks, heavy vehicles, or other assets, Tracker & IOT will surely help you to <br />
          manage and maintain them as efficiently as possible.
        </Typography>
      </Box>
      <Box sx={{ display: { md: "flex", xs: "none" } }} >
        <img className='background-img' src={banner} alt="" />
      </Box>
      <Box className='container' sx={{ display: { md: "flex", xs: "none" } }}>
        <Box >
          <Container sx={{ backgroundColor: 'white', width: '100%', height: '120%', borderRadius: "25px" }}>
            <PublicIcon sx={{ paddingTop: '10px', position: 'relative', left: '37%' }} fontSize='large' />
            <Typography sx={{ textAlign: 'center', fontSize: '20px', paddingTop: '5px', fontWeight: 'bold', color: '#2A2462' }}>20+</Typography>
            <Typography sx={{ textAlign: 'center', color: '#12B2DC' }}>Worldwide Partners</Typography>
          </Container>
        </Box>
        <Box >
          <Container sx={{ backgroundColor: 'white', width: '100%', height: '120%', borderRadius: "25px" }}>
            <PublicIcon sx={{ paddingTop: '10px', position: 'relative', left: '37%' }} fontSize='large' />
            <Typography sx={{ textAlign: 'center', fontSize: '20px', paddingTop: '5px', fontWeight: 'bold', color: '#2A2462' }}>100+</Typography>
            <Typography sx={{ textAlign: 'center', color: '#12B2DC' }}>Devices Integrated</Typography>
          </Container>
        </Box>
        <Box >
          <Container sx={{ backgroundColor: 'white', width: '100%', height: '120%', borderRadius: "25px" }}>
            <PublicIcon sx={{ paddingTop: '10px', position: 'relative', left: '37%' }} fontSize='large' />
            <Typography sx={{ textAlign: 'center', fontSize: '20px', paddingTop: '5px', fontWeight: 'bold', color: '#2A2462' }}>1000+</Typography>
            <Typography sx={{ textAlign: 'center', color: '#12B2DC' }}>Connected Assets</Typography>
          </Container>
        </Box>
        <Box>
          <Container sx={{ backgroundColor: 'white', width: '100%', height: '120%', borderRadius: "25px" }}>
            <PublicIcon sx={{ paddingTop: '10px', position: 'relative', left: '37%' }} fontSize='large' />
            <Typography sx={{ textAlign: 'center', fontSize: '20px', paddingTop: '5px', fontWeight: 'bold', color: '#2A2462' }}>500+</Typography>
            <Typography sx={{ textAlign: 'center', color: '#12B2DC' }}>Satisfied Customers</Typography>
          </Container>
        </Box>
      </Box>
      <Features />
      <Review />
      <Footer />







    </>

  )
}

export default HomePage