import * as React from 'react';
import { styled, alpha, } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import { makeStyles } from '@mui/styles';
import { connect } from 'react-redux';

const useStyle = makeStyles({
    headerAppMain: {        
        width: '4%',        
    },
    headerAppText: {
        width: '10%',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        headerAppMain: {
            width: '8%',        
        },
        headerAppText: {
            width: '4%',
        },
    },
    ['@media only screen and (min-width: 481px) and (max-width: 600px)']: {
        headerAppMain: {
            width: '6%',        
        },
        headerAppText: {
            width: '4%',
        },
    },
    ['@media only screen and (min-width: 601px) and (max-width: 768px)']: {
        headerAppMain: {
            width: '7%',        
        },
        headerAppText: {
            width: '10%',
            // border: '1px solid blue',
        },
    },
    ['@media only screen and (min-width: 769px) and (max-width: 900px)']: {
        headerAppMain: {
            width: '7%',        
        },
        headerAppText: {
            width: '10%',
            // border: '1px solid blue',
        },
    },
    ['@media only screen and (min-width: 901px) and (max-width: 1200px)']: {
        headerAppMain: {
            width: '10%',        
        },
        headerAppText: {
            width: '15%',
            // border: '1px solid blue',
        },
    }
})
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(0,0,0,.05)',
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    //  alpha(theme.palette.common.white, 0.15),
    // '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginRight: theme.spacing(2),
    border: '0px solid blue',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    // border: '1px solid blue',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5f6368',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'default',
    border: '0px solid yellow',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        //vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40vw',
        },
    },
}));

function HeaderAppBar(props) {

    const classes = useStyle()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const openMenu = () => {
        props.listenToHeader()
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    {/* <Badge badgeContent={4} color="error"> */}
                    <RefreshIcon color='action' />
                    {/* </Badge> */}
                </IconButton>
                <p>Refresh</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    // aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <ViewStreamSharpIcon color='action' />
                </IconButton>
                <p>List view</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    // aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <SettingsOutlinedIcon color='action' />
                </IconButton>
                <p>Settings</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    // aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <AppsSharpIcon color='action' />
                </IconButton>
                <p>Apps</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <img src='https://lh3.googleusercontent.com/ogw/AOh-ky3Yl8hpP_q1VgZ-9S_bTUDZ09bribXt8q_9Ug-ogA=s32-c-mo'
                        style={{ borderRadius: 50 }} />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        sx={{ mr: 1 }}
                        onClick={openMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className={classes.headerAppMain} sx={{ display: { xs: 8, sm: 12 }, border: '0px solid blue' }}>
                        <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' width={40} /></Box>
                        {/* <Box sx={{ flexShrink: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            color="#5f6368"
                            // sx={{ display: { xs: 'none', sm: 'block' }, border: '0px solid blue' }}
                            className={classes.headerAppText}
                        >
                            {/* Keep */}{props.label}
                        </Typography>
                    {/* </Box> */}
                    <Box sx={{ width: '5%', display: { xs: 'none', sm: 'none', md: 'block' } }} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }} sx={{ display: { xs: 'none', sm: 'flex', md: 'block', lg: 'block' } }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1, border: '0px solid black', display: { xs: 'none', sm: 'none' } }} />
                    <Box sx={{ width: '25%', display: { xs: 'none', sm: 'block' } }} />
                    <Box sx={{ border: '0px solid black', width: '20%', display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, justifyContent: 'space-evenly' }}>
                        <IconButton size="medium" aria-label="show 4 new mails" color="default">
                            {/* <Badge badgeContent={4} color="error"> */}
                            <RefreshIcon />
                            {/* </Badge> */}
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="default"
                        >
                            <ViewStreamSharpIcon />
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="default"
                        >
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="default"
                        >

                        </IconButton>
                        <IconButton
                            size="medium"
                            color="default"
                        >
                            <AppsSharpIcon />
                        </IconButton>
                        {/* <IconButton
                            size="medium"
                            color="default"
                        >
                            <NotificationsIcon />
                        </IconButton> */}
                        <IconButton
                            size="medium"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="default"
                        >
                            <img src='https://lh3.googleusercontent.com/ogw/AOh-ky3Yl8hpP_q1VgZ-9S_bTUDZ09bribXt8q_9Ug-ogA=s32-c-mo'
                                style={{ borderRadius: 50 }} />
                            {/* <AccountCircle /> */}
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="default"
                        >
                            <MoreIcon color='action' />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

const mapStateToProps = (state) => {
    return{
        label: state.drawerReducer.label
    }
}
export default connect(mapStateToProps)(HeaderAppBar)