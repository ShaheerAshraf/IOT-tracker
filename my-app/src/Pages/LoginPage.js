import React from 'react'
import banner from '../assets/banner1.png'
import Container from '@mui/material/Container'
import { Button, TextField, Typography, Box } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Footer from '../Components/Footer'
import logo from '../assets/trackerlogo.png'
const LoginPage = () => {
    return (
        <>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <nav className='Appbar'>
                    <img className='logo-img' src={logo} alt="" />
                </nav>
            </Box>

            {/* RESPONSIVE LOGO OF WEBSITE */}
            <Box sx={{ display: { xs: "flex", md: "none" } }} height="50px" width="100%">
                <nav className='Appbar'>
                    <img className='logo-img' src={logo} alt="" />
                </nav>
            </Box>

            <div>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <img src={banner} alt="" width="100%" />
                </Box>
                <Container sx={{ display: { xs: "none", md: "grid" }, width: '50%', height: '60%', position: "absolute", left: "380px", right: "380px", top: "180px", bottom: "180px", borderRadius: "50px", backgroundColor: "white" }}>

                    <Typography sx={{ textAlign: 'center', paddingBottom: '20px', paddingTop: '30px', fontSize: '30px', fontWeight: 'bold' }}>
                        LOGIN
                    </Typography>

                    <div>
                        <TextField placeholder='Email' sx={{ width: '70%', position: 'relative', left: '100px', paddingBottom: '20px' }}></TextField>
                    </div>
                    <div>
                        <TextField placeholder='Password' sx={{ width: '70%', position: 'relative', left: '100px', paddingBottom: "30px" }}></TextField>
                    </div>


                    <div>
                        <Button style={{ margin: '0 auto', display: "flex", }} color="primary" size='large' variant='contained'>Sign In</Button>
                    </div>
                    <Box sx={{ PaddingTop: '30px', paddingBottom: "30px", }}>
                        <Button color="secondary" size='small' sx={{ position: 'relative', margin: '0 auto', display: "flex" }}>Forgot Password?</Button>
                    </Box>
                </Container>

                {/* RESPONSIVENESS */}

                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <img src={banner} alt="" width="100%" height="500px" />
                </Box>

                <Container sx={{ display: { xs: "grid", md: "none" }, width: '70%', height: '45%', position: "absolute", left: "30px", right: "30px", top: "100px", bottom: "100px", borderRadius: "50px", backgroundColor: "white" }}>

                    <Typography sx={{ textAlign: 'center', paddingBottom: '20px', paddingTop: '30px', fontSize: '30px', fontWeight: 'bold' }}>
                        LOGIN
                    </Typography>

                    <div>
                        <TextField placeholder='Email' sx={{ width: '100%', position: 'relative', paddingBottom: '20px' }}></TextField>
                    </div>
                    <div>
                        <TextField placeholder='Password' sx={{ width: '100%', position: 'relative', paddingBottom: "30px" }}></TextField>
                    </div>


                    <div>
                        <Button style={{ margin: '0 auto', display: "flex", }} color="primary" size='large' variant='contained'>Sign In</Button>
                    </div>
                    <Box sx={{ PaddingTop: '30px', paddingBottom: "30px", }}>
                        <Button color="secondary" size='small' sx={{ paddingTop: '30px', paddingBottom: "30px", position: 'relative', margin: '0 auto', display: "flex" }}>Forgot Password?</Button>
                    </Box>
                </Container>
            </div>
            <Footer />





        </>
    )
}

export default LoginPage