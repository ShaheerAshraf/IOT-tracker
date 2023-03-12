import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from '../assets/trackerlogo.png'

const pages = ["Home", "Services", "About Us", "Contact Us"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        <AppBar position="static" sx={{ mr: 'auto' }} color="secondary">
            <Container maxWidth="xl">
                <Toolbar >

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        color="primary.main"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },

                            marginLeft: "-2%",
                            paddingRight: "100px"
                        }}
                    >
                        <img className='logo-img' src={logo} alt="" height="50px" width="170px" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}

                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "centre"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "centre"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{

                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{

                                }}>
                                    <Typography textAlign="center" >{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        color="primary.main"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",

                            textDecoration: "none"
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} >
                        {pages.map((page) => (
                            <Button

                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ paddingRight: "100px", my: 2, color: "white", display: "flex" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Button variant="contained" >Login</Button>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default ResponsiveAppBar;