import React from "react";
import './headerstyle.css';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    mainHeaderH: {
        width: '100vw',
        height: '8vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerContentH: {
        width: '98%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerOneH: {
        width: '10%',
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    imgClassH: {
        width: '24%',
        height: '84%',
    },


    textH: {
        width: '40%',
        fontSize: 'x-large',
        color: '#5f6368',
    },
    firstSpaceH: {
        width: '5%',
        height: '100%',
    },
    searchBarH: {
        width: '47%',
        height: '80%',
        backgroundColor: 'rgba(0,0,0,.05)',
        borderRadius: '7px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchMainH: {
        width: '80%',
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    searchsymH: {
        width: '10%',
        height: '70%',
    },
    searchTextH: {
        width: '90%',
        height: '85%',
        textAlign: 'start',
        color: '#5f6368',
        fontSize: 'medium',
    },
    secondSpaceH: {
        width: '12%',
        height: '100%',
    },
    iconsMainH: {
        width: '15%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconsContentH: {
        width: '20%',
    },
    headerEndH: {
        width: '10%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    endContentH: {
        width: '90%',
        height: '75%',
        border: '1px solid #dadce0',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    endImgH: {
        width: '36%',
    },
    ImageH: {
        width: '100%',
    },
    personH: {
        width: '25%'
    },
    ImagePerH: {
        width: '100%',
        borderRadius: '50%',
    }
})

function Header(props) {

    const classes = useStyle()

    const openMenu = () => {
        props.listenToHeader()
    }
    return(
        <div className={classes.mainHeaderH}>
            <Grid container columns={{ lg: 12, sm: 12, md: 12 }} className={classes.headerContentH}>
                <Grid item lg={1.5} md={1.5} sm={1.5} className={classes.headerOneH}>
                    {/* <div><MenuRoundedIcon color="action" fontSize="medium" ></MenuRoundedIcon></div> */}
                    <div>
                        <IconButton onClick={openMenu} aria-label="main menu" size="small" ><MenuIcon /></IconButton>
                    </div>
                    <div className={classes.imgClassH}><img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" /></div>
                    <div className={classes.textH}><span>Keep</span></div>
                </Grid>
                <Grid item lg={1} md={1} sm={1} className={classes.firstSpaceH}></Grid>
                <Grid item lg={5.5} md={5.5} sm={5.5} className={classes.searchBarH}>
                    <div className={classes.searchMainH}>
                        <div className={classes.searchsymH}><SearchIcon fontSize="medium" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                        <div className={classes.searchTextH}><InputBase placeholder="Search"  /></div>
                    </div>                    
                </Grid>
                <Grid item lg={1} md={1} sm={1} className={classes.secondSpaceH}></Grid>
                <Grid item lg={2} md={2} sm={2} className={classes.iconsMainH}>
                    <div className={classes.iconsContentH}><RefreshIcon fontSize="medium" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                    <div className={classes.iconsContentH}><ViewStreamSharpIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                    <div className={classes.iconsContentH}><SettingsOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                    <div className={classes.iconsContentH}></div>
                    <div className={classes.iconsContentH}><AppsSharpIcon fontSize="medium" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }} /></div>
                </Grid>
                <Grid item lg={1} md={1} sm={1} className={classes.headerEndH}>
                    <div className={classes.endContentH}>
                        <div className={classes.endImgH}>
                            <img className={classes.ImageH} src="https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg" />
                        </div>
                        <div className={classes.personH}>
                            <img className={classes.ImagePerH} src="https://lh3.googleusercontent.com/ogw/AOh-ky3Yl8hpP_q1VgZ-9S_bTUDZ09bribXt8q_9Ug-ogA=s32-c-mo" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header