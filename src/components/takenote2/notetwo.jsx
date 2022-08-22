import React, { useState } from "react";
//import './notetwostyle.css';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { postNotes } from "../../services/dataService";
import InputBase from '@mui/material/InputBase';
import ColorPopper from "../colorpopper/color";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    noteTwoMain: {
        width: '40vw',
        height: '18vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
    },
    noteTwoContent: {
        width: '100%',
        height: '100%',
        border: '1px solid #cecdcd',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        left: '600px',
        bottom: '26px',
    },
    twoTextContent: {
        width: '95%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        color: '#202124',
        fontWeight: '400',
    },
    titleText2: {
        width: '100%',
        height: '35%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nameTitle2: {
        width: '50%',
        height: '100%',
        textAlign: 'start',
    },
    pinIcon2: {
        width: '7%',
    },
    takeText2: {
        width: '100%',
        height: '30%',
        textAlign: 'start',
    },
    noteTwoIcons: {
        width: '97%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerIcons2: {
        width: '65%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnClass2: {
        width: '15%',
    },
    iconSym2: {
        width: '11%',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        noteTwoMain: {
            width: '75vw',
            height: '25vh',
        },
        noteTwoContent: {
            left: '60px',
            bottom: '35px',
        },
        twoTextContent: {
            height: '45%',
            alignItems: 'center',
        },
        titleText2: {
            width: '95%',
        },
        takeText2: {
            width: '95%',
        },
        noteTwoIcons: {
            height: '45%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
        },
        footerIcons2: {
            width: '100%',
            height: '50%',
            justifyContent: 'space-evenly',
        },
        btnClass2: {
            width: '30%',
            height: '50%',
            textAlign: 'end',
            border: '0px solid blue',
        },
        btnId2: {
            width: '100%',
            textAlign: 'end',
            border: '0px solid blue',
        }
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        noteTwoMain: {
            width: '75vw',
            height: '20vh',
        },
        noteTwoContent: {
            left: '75px',
            bottom: '35px',
        }
    },
    ['@media only screen and (min-width: 769px) and (max-width: 1200px)']: {
        noteTwoMain: {
            width: '55vw',
            height: '20vh',
        },
        noteTwoContent: {
            left: '205px',
            bottom: '35px',
        }
    }
})

function NoteTwo(props) {

    const classes = useStyle()

    const [inputFields, setInputFields] = useState({ title: '', description: '', color: '', isArchived: false, isDeleted: false })

    const openNoteOne = () => {
        props.listenToTakeNoteTwo()
        postNotes(inputFields).then((response) => {
            console.log(response);
            props.autoRefresh()
        }).catch((error) => { console.log(error) })
    }

    const takingTitle = (event) => {
        setInputFields(prevState => ({
            ...prevState,
            title: event.target.value
        }))
        // console.log(event.target.value)
    }
    const takingDes = (event) => {
        setInputFields(prevState => ({
            ...prevState,
            description: event.target.value
        }))
        // console.log(event.target.value)
    }

    const listenToColorPopper = (colour) => {
        setInputFields(prevState => ({
            ...prevState,
            color: colour
        }))
    }

    const archiveNote = () => {
        setInputFields(prevState => ({
            ...prevState,
            isArchived: true
        }))
        console.log("Note Archived")
    }
    return (
        <Box className={classes.noteTwoMain}>
            <Paper elevation={3} className={classes.noteTwoContent} style={{ backgroundColor: inputFields.color }}>
                <Box className={classes.twoTextContent}>
                    <Box className={classes.titleText2}>
                        <Box className={classes.nameTitle2}><InputBase onChange={takingTitle} placeholder='Title' /></Box>
                        <Box className={classes.pinIcon2}><PushPinOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "6px", borderRadius: "50%" } }} /></Box>
                    </Box>
                    <Box className={classes.takeText2}><InputBase onChange={takingDes} placeholder='Take a note...' /></Box>
                </Box>
                <Box className={classes.noteTwoIcons}>
                    <Box className={classes.footerIcons2}>
                        <Box className={classes.iconSym2}><AddAlertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box className={classes.iconSym2}><PersonAddAltOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box className={classes.iconSym2}><ColorPopper listenToColorPopper={listenToColorPopper} action="create" />
                            {/* <ColorLensOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"8px", borderRadius: "50%" } }}/> */}
                        </Box>
                        <Box className={classes.iconSym2}><ImageOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box className={classes.iconSym2}><ArchiveOutlinedIcon fontSize="small" onClick={archiveNote} color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box className={classes.iconSym2}><MoreVertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box className={classes.iconSym2}><UndoOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box className={classes.iconSym2}><RedoOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    </Box>
                    <Box className={classes.btnClass2}><Button variant="Close" className={classes.btnId2} style={{textTransform: 'capitalize'}} fullWidth="true" onClick={openNoteOne}>Close</Button></Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default NoteTwo