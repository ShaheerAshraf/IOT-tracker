import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container'


const ContactForm = () => {
    return (
        <Box sx={{ background: '#2BAAE1', padding: "30px", paddingTop: "40px" }}>

            <Container sx={{
                width: "100%",
                paddingBottom: '30px',
                borderStyle: "hidden",
                borderRadius: "40px",
                background: "white"
            }}>


                <Box width="100%">
                    <Typography variant="h4" sx={{
                        paddingTop: '20px',
                        textAlign: 'center',

                        // color: '#004d40'

                    }}>
                        GET STARTED
                    </Typography>
                </Box>


                <Box sx={{ display: { md: "flex", xs: "none" }, justifyContent: "space-around", paddingTop: "35px", }}>
                    <TextField variant='outlined'
                        placeholder='Name'
                        sx={{
                            width: '70%',

                            paddingRight: "20px",
                        }}
                    ></TextField>
                    <TextField variant='outlined'
                        placeholder='PHONE NUMBER'
                        sx={{
                            width: '70%',
                            // padding: "15px",

                            paddingLeft: '20px',

                        }}
                    ></TextField>

                </Box>


                {/* RESONSIVE FORM FIELD ONLY PHONE AND EMAIL TO CHANGE WIDTH IN XS */}
                <Box sx={{ display: { md: "none", xs: "grid" }, paddingTop: "35px", }}>
                    <TextField variant='outlined'
                        placeholder='Name'
                        sx={{
                            width: '100%',

                            // paddingRight: "20px",
                        }}
                    ></TextField>
                    <TextField variant='outlined'
                        placeholder='PHONE NUMBER'
                        sx={{
                            width: '100%',
                            // padding: "15px",
                            paddingTop: "35px"
                            // paddingLeft: '20px',

                        }}
                    ></TextField>

                </Box>


                {/* ---------------------------------------------------------------------------------
                --------------------------------------------------------------------------------------------------------------------------------------------- */}

                <TextField variant='outlined'
                    placeholder='E-MAIL'
                    sx={{
                        width: '100%',
                        paddingTop: "35px",
                        // paddingLeft: "30px",
                    }}
                ></TextField>
                <TextField variant='outlined'
                    placeholder='MESSAGE'
                    multiline
                    rows={6}
                    sx={{
                        width: '100%',
                        paddingTop: "35px",
                        // paddingLeft: "30px",
                        paddingBottom: '30px',
                    }}
                ></TextField>
                <Button variant='contained' size='large'
                    sx={{
                        width: '20%',
                        color: 'white',
                        background: '#004d40',
                        right: '-40%',

                    }}>
                    SUBMIT
                </Button>
            </Container>

        </Box >
    )
}

export default ContactForm