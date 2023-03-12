import React from 'react'
import "../Styles/Features.css"
import { Box, Typography } from '@mui/material'
import trackerscreen from '../assets/tracker-screen.png'
const Features = () => {
  return (
    <>

      <Box paddingTop="20px">
        <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: '#2A2462' }}>
          FEATURES
        </Typography>
      </Box>
      <Box className='features' padding="10px" sx={{ display: { xs: "grid", md: "flex" } }}>

        {/* features-content 1 */}

        <Box className='features-content'>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold', }} variant='h6'>Real Time Live Tracking</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '28px' }}>
            View exact location of the vehicle 24 x 7 <br />
            anytime anywhere via web application or <br />
            android/IOS mobile app.</Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Live Dashboard View</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '15px' }}>
            Stay aware all the time about what your<br />
            driver is doing and how he is behaving.By <br />
            using this feature, fleet managers will be <br />
            able to see the live view on each of their <br />
            vehcile's location,driver status,geo- <br />
            fencing and traffic updates.</Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Vehicle Arrival Alert</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '25px' }}>
            Keep schedule running smoothly by<br />
            receiving confirmation whenever a vehicle <br />
            arrives at its destination. Know exactly <br />
            when the vehicle arrived at a specific <br />
            destination and how it stayed there.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Hard Braking & Acceleration</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '20px' }}>
            When someone drives roughly and do hard<br />
            breaking or hard accelerator, owner gets<br />
            notified.</Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Speed Alert</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '20px' }}>
            Find out instantly when a driver has <br />
            exceeded a certain speed.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Anti-Theft Sensor</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462' }}>
            Notification alert when someone try to <br />
            even touch the hidden device.
          </Typography>
        </Box>

        {/* features-content2 */}

        <Box className='features-content2'>
          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold', }} variant='h6'>Start/Stop</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '10px' }}>
            Keep an eye on times when vehicles are  <br />
            not active and keep track of how many <br />
            miles the vehicle covered between each <br />
            start and stop.</Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Replay Route</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '32px' }}>
            Replay map that allows users to see a<br />
            "bread crumb" trail of a vehicle's route. <br />
            Fleet managers can see the exact path the <br />
            driver took and the approximate speed of <br />
            the vehicle.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Fuel Monitoring</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '9px' }}>
            Fuel monitoring feature allows owners/<br />
            fleet managers to get real-time updates on  <br />
            their mobiles about the level of fuel and <br />
            consumption made by different drivers and <br />
            vehicles according to their distance  <br />
            traveled and fuel consumed.</Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Accident Crash Detection </Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '35px' }}>
            Get alerted when car hits somewhere <br />
            hardly or crash into a ditch
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Voice Survelliance</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '20px' }}>
            Listen all voices in vehicle with real-time <br />
            voice monitoring.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Temperature & Humidity Sensors</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '50px' }}>
            Monitor temperature & humidity in vehicle <br />
            and gets alerts when high.
          </Typography>
        </Box>

        {/* feature-content 3  */}

        <Box className='features-content3'>
          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold', }} variant='h6'>Speed Dashboard</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '25px' }}>
            Collect inBoxidual instances of speeding  <br />
            into a report that clarifies how your <br />
            vehicles are being handled on the roads.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Geo Fencing</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '48px' }}>
            System will send notification to user when<br />
            vehicles cross predefined city boundaries. <br />
            User can get custom defined boundaries <br />
            like home, office,college,University etc.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Route Deviation</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '30px' }}>
            With a geo-fence enabled GPS solution,<br />
            owners/fleet managers can get instant,  <br />
            alert via SMS or email whenever a driver <br />
            goes to a wrong directoin or deviates from  <br />
            the pre-defined routes.</Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Engine Kill </Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', }}>
            Options to remotely turn off the engine if <br />
            user feels unauthorized usage. Engine<br />
            cannot be started until user send the  <br />
            resume command.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Safety Alarms</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '20px' }}>
            Warning alerts when someone try to <br />
            tamper battery or device.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Vehicle Activity Report</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462' }}>
            A comprehesive summary of daily activity  <br />
            combines all infotmation into a single<br />
            report. </Typography>
        </Box>

        {/* featuers-content 4 */}

        <Box className='features-content4'>
          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold', }} variant='h6'>Frequent Live Updates</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '8px' }}>
            To keep you and customers constantly  <br />
            informed of the location of your assets, you <br />
            can receive GPS updates as frequently as <br />
            every fifteen minutes.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Idle Time Alert </Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '28px' }}>
            Receive an alert whenever a vehicle is left<br />
            idlilng for more than a specified amount of <br />
            time. Monitor what date and time a vehicle <br />
            began idling as well as the location and <br />
            duration of the event.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Low Battery Alarm</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '64px' }}>
            System may also detect low battery and<br />
            will send a low battery warning when the <br />
            devices's battery goes under 20%
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Distance Summary Report </Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '36px' }}>
            Total Distance Travelled Report on daily/<br />
            weekly/monthly basis.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>Towing Detection</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462', paddingBottom: '20px' }}>
            Alert the owner when someone try to tow <br />
            vehicle in ignition off state.
          </Typography>

          <Typography sx={{ color: '#12B2DC', fontWeight: 'bold' }} variant='h6'>SMS/Email Integration</Typography>
          <Typography sx={{ fontSize: '12px', color: '#2A2462' }}>
            All the notifications may be sent through <br />
            SMS/Email to users registered phone<br />
            numbers/email addresses. </Typography>
        </Box>
      </Box>




      <Box className='tracker' width="100%" >
        <Typography sx={{ color: 'white', textAlign: 'center', paddingTop: '40px', fontSize: "35px", fontWeight: 'bold', paddingBottom: '20px' }}>Most advanced and intuitive telematic solution</Typography>

        <Box sx={{ display: { md: "flex", xs: "none" }, }}>
          <img className='trackerscreen' src={trackerscreen} alt="" />
        </Box>

      </Box>

    </>
  )
}

export default Features