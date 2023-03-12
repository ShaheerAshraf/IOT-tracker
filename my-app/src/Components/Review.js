import React from 'react'
import "../Styles/Review.css"
import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


const Review = () => {
  return (
    <>
      <div>
        <Typography sx={{ paddingBottom: '30px', paddingTop: '50px', textAlign: 'center', fontSize: '30px', color: '#2A2462', fontWeight: 'bold' }}>
          Customer's Reviews
        </Typography>
      </div>
      <div className='review'>
        <Container sx={{ border: '1px solid', width: '80%', height: '20%', }}>
          <Box className='customer-details' sx={{ display: { md: "Grid", xs: "none" } }}>
            <div>
              <CircleOutlinedIcon sx={{ fontSize: '120px', }} />
            </div>
            <div>
              <Typography sx={{ paddingTop: '20px', fontSize: '20px', color: '#2A2462', fontWeight: 'bold' }}>Ali Asfand</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Principal, Fervour Schooling System.</Typography>
            </div>
          </Box>
          <Box sx={{ display: { md: "Grid", xs: "none" } }}>
            <Typography sx={{ fontSize: '50px', paddingLeft: '30px', color: 'grey' }}>"</Typography>
            <Typography sx={{ paddingLeft: '30px', position: 'relative', paddingRight: "30px", bottom: '40px', left: '35px', fontSize: '13px' }}>
              Business more Dynamic, Efficient, Safer and Smarter, Connecting Assets for Real-Time-
              Tracking, Easily monitor and manage all your sites and activites from a central
              Reasons for choosing vehicle tracking system is Fleet Management Solution </Typography>
            <Typography sx={{ fontSize: '50px', color: 'grey', paddingLeft: '610px', position: 'relative', bottom: '50px', }}>"</Typography>
          </Box>

          {/* ------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* responsiveness */}
          <Box className='customer-details' sx={{ display: { md: "none", xs: "flex" } }}>
            <div>
              <CircleOutlinedIcon sx={{ fontSize: '80px', }} />
            </div>
            <div>
              <Typography sx={{ paddingTop: '10px', fontSize: '15px', color: '#2A2462', fontWeight: 'bold' }}>Ali Asfand</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Principal, Fervour Schooling System.</Typography>
            </div>
          </Box>
          <Box sx={{ display: { md: "none", xs: "flex" } }} textAlign="center">

            <Typography sx={{ position: 'relative', fontSize: '13px', paddingTop: "5px" }} >
              Business more Dynamic, Efficient, Safer and Smarter, Connecting Assets for Real-Time-
              Tracking, Easily monitor and manage all your sites and activites from a central
              Reasons for choosing vehicle tracking system is Fleet Management Solution </Typography>

          </Box>
        </Container>
      </div>
    </>
  )
}

export default Review