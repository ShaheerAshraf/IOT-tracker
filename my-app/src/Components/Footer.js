import { Typography } from '@mui/material'
import React from 'react'
import logo2 from '../assets/trackerlogo.png'
import "../Styles/Footer.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Box } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import footer from '../assets/footer.png'

const Footer = () => {
  return (
    <>
      <Box className='footer' width="100%" sx={{ display: { md: "flex", xs: "none" } }} >

        {/* Logo Div */}

        <div>
          <img className='footer-logo' src={logo2} alt="" />
          <Typography sx={{ position: 'relative', left: '70px', color: 'white' }}>The Premier & Leading Tracker <br /> Company In Pakistan.</Typography>
        </div>

        {/* Icon Div */}

        <div className='icon-footer'>
          <Container sx={{ display: 'flex' }}>
            <div className='second-footer'>
              <div>
                <ArrowForwardIosIcon sx={{ paddingBottom: '5px', color: '#12B2DC' }} fontSize='small' />
              </div>
              <div>
                <ArrowForwardIosIcon sx={{ paddingBottom: '5px', color: '#12B2DC' }} fontSize='small' />
              </div>
              <div>
                <ArrowForwardIosIcon sx={{ paddingBottom: '5px', color: '#12B2DC' }} fontSize='small' />
              </div>
              <div>
                <ArrowForwardIosIcon sx={{ paddingBottom: '5px', color: '#12B2DC' }} fontSize='small' />
              </div>
            </div>
          </Container>
        </div>

        {/* Pages Div */}

        <div className='icon-footer2'>
          <Typography sx={{ paddingBottom: '5px', color: 'white' }}>Home</Typography>
          <Typography sx={{ paddingBottom: '5px', color: 'white' }} >About Us</Typography>
          <Typography sx={{ paddingBottom: '5px', color: 'white' }}>Services</Typography>
          <Typography sx={{ paddingBottom: '5px', color: 'white' }}>Contact Us</Typography>
        </div>

        {/* Icon Div 2 */}

        <div className='icon-footer'>
          <Container sx={{ display: 'flex' }}>
            <div className='second-footer'>
              <div>
                <LocationOnIcon sx={{ paddingBottom: '15px', color: '#12B2DC' }} />
              </div>
              <div>
                <PhoneAndroidIcon sx={{ paddingBottom: '15px', color: '#12B2DC' }} />
              </div>
              <div>
                <MailIcon sx={{ paddingBottom: '12px', color: '#12B2DC' }} />
              </div>
            </div>
          </Container>
        </div>

        {/* Address div */}

        <div className='icon-footer2'>
          <Typography sx={{ paddingBottom: '20px', color: 'white' }}>45-C, Street 14, D.H.A Phase 2,Karachi.</Typography>
          <Typography sx={{ paddingBottom: '18px', color: 'white' }} >021 36101457, 021 38282230</Typography>
          <Typography sx={{ paddingBottom: '12px', color: 'white' }}>info@tracker-iot.com</Typography>
        </div>
      </Box>
      <div>
        <img className='footer-img' src={footer} alt="" />
      </div>



      {/* RESPONSIVENESS */}

      <Box className='footer' width="100%" sx={{ display: { md: "none", xs: "grid" } }} >

        {/* Logo Div */}

        <div>
          <img className='footer-logo' src={logo2} alt="" />
          <Typography sx={{ position: 'relative', left: '70px', color: 'white' }}>The Premier & Leading Tracker <br /> Company In Pakistan.</Typography>
        </div>

        {/* Icon Div */}
        <Box sx={{ display: "flex" }}>
          <div className='icon-footer'>
            <Container sx={{ display: 'flex' }}>
              <div className='second-footer'>
                <div>
                  <ArrowForwardIosIcon sx={{ paddingBottom: '5px', color: '#12B2DC' }} fontSize='small' />
                </div>
                <div>
                  <ArrowForwardIosIcon sx={{ paddingBottom: '5px', color: '#12B2DC' }} fontSize='small' />
                </div>
                <div>
                  <ArrowForwardIosIcon sx={{ paddingBottom: '5px', color: '#12B2DC' }} fontSize='small' />
                </div>
                <div>
                  <ArrowForwardIosIcon sx={{ paddingBottom: '5px', color: '#12B2DC' }} fontSize='small' />
                </div>
              </div>
            </Container>
          </div>

          {/* Pages Div */}

          <div className='icon-footer2'>
            <Typography sx={{ paddingBottom: '5px', color: 'white' }}>Home</Typography>
            <Typography sx={{ paddingBottom: '5px', color: 'white' }} >About Us</Typography>
            <Typography sx={{ paddingBottom: '5px', color: 'white' }}>Services</Typography>
            <Typography sx={{ paddingBottom: '5px', color: 'white' }}>Contact Us</Typography>
          </div>
        </Box>

        <Box sx={{ display: "flex" }}>
          {/* Icon Div 2 */}

          <div className='icon-footer'>
            <Container sx={{ display: 'flex' }}>
              <div className='second-footer'>
                <div>
                  <LocationOnIcon sx={{ paddingBottom: '15px', color: '#12B2DC' }} />
                </div>
                <div>
                  <PhoneAndroidIcon sx={{ paddingBottom: '15px', color: '#12B2DC' }} />
                </div>
                <div>
                  <MailIcon sx={{ paddingBottom: '12px', color: '#12B2DC' }} />
                </div>
              </div>
            </Container>
          </div>

          {/* Address div */}

          <div className='icon-footer2'>
            <Typography sx={{ paddingBottom: '20px', color: 'white' }}>45-C, Street 14, D.H.A Phase 2,Karachi.</Typography>
            <Typography sx={{ paddingBottom: '18px', color: 'white' }} >021 36101457, 021 38282230</Typography>
            <Typography sx={{ paddingBottom: '12px', color: 'white' }}>info@tracker-iot.com</Typography>
          </div>
        </Box>
      </Box>
    </>
  )
}

export default Footer