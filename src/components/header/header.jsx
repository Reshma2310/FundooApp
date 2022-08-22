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

function Header(props) {

    const openMenu = () => {
        props.listenToHeader()
    }

    return(
        <div className="mainHeaderH">
            <div className="headerContentH">
                <div className="headerOneH">
                    {/* <div><MenuRoundedIcon color="action" fontSize="medium" ></MenuRoundedIcon></div> */}
                    <div>
                        <IconButton onClick={openMenu} aria-label="main menu" size="small"><MenuIcon /></IconButton>
                    </div>
                    <div className="imgClassH"><img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" /></div>
                    <div className="textH"><span>Keep</span></div>
                </div>
                <div className="firstSpaceH"></div>
                <div className="searchBarH">
                    <div className="searchMainH">
                        <div className="searchsymH"><SearchIcon fontSize="medium" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                        <div className="searchTextH"><InputBase placeholder="Search"  /></div>
                    </div>                    
                </div>
                <div className="secondSpaceH"></div>
                <div className="iconsMainH">
                    <div className="iconsContentH"><RefreshIcon fontSize="medium" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                    <div className="iconsContentH"><ViewStreamSharpIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                    <div className="iconsContentH"><SettingsOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                    <div className="iconsContentH"></div>
                    <div className="iconsContentH"><AppsSharpIcon fontSize="medium" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }} /></div>
                </div>
                <div className="headerEndH">
                    <div className="endContentH">
                        <div className="endImgH">
                            <img src="https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg" />
                        </div>
                        <div className="personH">
                            <img src="https://lh3.googleusercontent.com/ogw/AOh-ky3Yl8hpP_q1VgZ-9S_bTUDZ09bribXt8q_9Ug-ogA=s32-c-mo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header