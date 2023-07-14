import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import "./NavigationBar.css";
import { Link } from 'react-router-dom';

const pages = ['Scholarships', 'Coaching', 'Blog', 'About', 'Team'];
const settings = ['Profile', 'Account', 'Dashboard'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return(
        <div className="navbar">
            <AppBar 
                position="static"
                sx={{
                    bgcolor:"#eee"
                    }}>

                <Container 
                    maxWidth="l"
                    >
                    <Toolbar disableGutters>
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/612dabc42132625e4c2932c5/4d60e94c-dfa6-4c2e-a153-35d9ec01319b/fotor_2023-1-3_21_18_12.png?format=1500w" 
                            className="logo"
                            sx={{ display: { 
                                xs: 'none', 
                                md: 'flex' }, 
                                mr: 1,
                            }} />

                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Chicle',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#294243',
                                textDecoration: 'none',
                                m:5
                            }}>
                                StriveOpp
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#294243">

                                <MenuIcon />

                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none', color: '#294243' },
                                }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" color="#294243" fontSize="40px">
                                                <Link style={{textDecoration:"none", color:"#294243"}} to = {`/${page}`}>
                                                    {page}
                                                </Link>
                                            </Typography>
                                        </MenuItem>
                                    ))}   
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#294243',
                            textDecoration: 'none',
                            }}>
                                <img
                                src="https://images.squarespace-cdn.com/content/v1/612dabc42132625e4c2932c5/4d60e94c-dfa6-4c2e-a153-35d9ec01319b/fotor_2023-1-3_21_18_12.png?format=1500w" 
                                className="logo"
                                sx={{ display: { 
                                    xs: 'none', 
                                    md: 'flex' }, 
                                    mr: 1,
                                }} />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#294243', display: 'block' }}>

                                <Link style={{textDecoration:"none", color:"#294243"}} to={`/${page}`}>{page}</Link>

                            </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">

                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                            
                            </Tooltip>

                            <Menu
                                sx={{ mt: '45px', color: '#294243' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" color="#294243" >{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
    };

export default ResponsiveAppBar;