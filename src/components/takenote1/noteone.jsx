import React from "react";
import './noteonestyle.css';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    mainNote1: {
        width: '39vw',
        height: '6vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    noteContent1: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: '600px',
        bottom: '26px',
    },
    noteBorder1: {
        width: '95%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    noteMainText1: {
        width: '40%',
        height: '50%',
        textAlign: 'start',
        fontWeight: '400',
        color: '#202124',
    },
    noteMainIcons1: {
        width: '25%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    iconEnd1: {
        width: '33%',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mainNote1: {
            width: '75vw',
            height: '6vh',
        },
        noteContent1: {
            left: '60px',
            bottom: '35px',
        },
        noteMainText1: {
            width: '40%',
            height: '50%',
            fontSize: 'small',
        },
        noteMainIcons1: {
            width: '45%',
            height: '50%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            textAlign: 'center',
        }
    },
    ['@media only screen and (min-width: 480px) and (max-width: 768px)']: {
        mainNote1: {
            width: '75vw',
            height: '6vh',
        },
        noteContent1: {
            left: '75px',
            bottom: '35px',
        },
        noteMainText1: {            
            fontSize: 'medium',
        },
        noteMainIcons1: {
            width: '35%',            
        }
    },
    ['@media only screen and (min-width: 769px) and (max-width: 1200px)']: {
        mainNote1: {
            width: '55vw',
            height: '6vh',
        },
        noteContent1: {
            left: '205px',
            bottom: '35px',
        },
        noteMainText1: {            
            fontSize: 'medium',
        },
        noteMainIcons1: {
            width: '35%',            
        }
    }   
})

function NoteOne(props) {

    const classes = useStyle()

    const openNoteTwo = () => {
        props.listenToTakeNoteOne()
    }
    return (
        <Box className={classes.mainNote1}>
            <Paper elevation={3} className={classes.noteContent1} onClick={openNoteTwo}>
                <Box className={classes.noteBorder1}>
                    <Box className={classes.noteMainText1}>
                        <span>Take a note...</span>
                    </Box>
                    <Box className={classes.noteMainIcons1}>
                        <Box className={classes.iconEnd1}><CheckBoxOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></Box>
                        <Box className={classes.iconEnd1}><BrushOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></Box>
                        <Box className={classes.iconEnd1}><ImageOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default NoteOne