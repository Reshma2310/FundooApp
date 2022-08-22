import React, { useState } from "react";
//import './notethreestyle.css';
// import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopper from "../colorpopper/color";
import { archiveNotes, deleteNotes, updateNotes } from "../../services/dataService";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    noteThreeMain: {
        width: '16vw',
        height: '17vh',
    },
    wtspace3: {
        width: '100%',
        height: '5%',
    },
    thirdContent: {
        width: '100%',
        height: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    mainNote3: {
        width: '100%',
        height: '100%',
        border: '1px solid #cecdcd',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    // blackTick3: {
    //     width: '100%',
    //     height: '15%',
    //     textAlign: 'start',
    // },
    thirdHeader: {
        width: '90%',
        height: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    titleText3: {
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nameTitle3: {
        width: '100%',
        height: '50%',
        textAlign: 'start',
    },
    // pinIcon3: {
    //     width: '20%',
    // },
    takeText3: {
        width: '100%',
        height: '50%',
        textAlign: 'start',
    },
    iconsField3: {
        width: '90%',
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconSym3: {
        width: '12%',
    },
    mainpopup: {
        width: '40vw',
        height: '25vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid #cecdcd',
        borderRadius: '8px',
        // position: 'relative',
    },
    mainPartOne: {
        width: '93%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    mainIconsPart: {
        width: '95%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mainPartTwo: {
        width: '75%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainPinIcon3: {
        width: '5%',
    },
    mainTitle3: {
        height: '45%',
    },
    mainText3: {
        height: '40%',
    },
    iconPartSym: {
        width: '10%',
        textAlign: 'center',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        noteThreeMain: {
            width: '65vw',
            height: '19vh',
        },
        thirdHeader: {
            fontSize: '14px',
        },
        mainpopup: {
            width: '70vw',
            height: '25vh',
        }
    },
    ['@media only screen and (min-width: 481px) and (max-width: 600px)']: {
        noteThreeMain: {
            width: '45vw',
            height: '17vh',
        },
        thirdHeader: {
            fontSize: '14px',
        },
        mainpopup: {
            width: '60vw',
            height: '25vh',
        }
    },
    ['@media only screen and (min-width: 601px) and (max-width: 768px)']: {
        noteThreeMain: {
            width: '30vw',
            height: '17vh',
        },
        thirdHeader: {
            fontSize: '14px',
        },
        mainpopup: {
            width: '60vw',
            height: '25vh',
        }
    },
    ['@media only screen and (min-width: 769px) and (max-width: 1200px)']: {
        noteThreeMain: {
            width: '26vw',
            height: '17vh',
        },
        thirdHeader: {
            fontSize: '14px',
        },
        mainpopup: {
            width: '55vw',
            height: '28vh',
        }
    }
})

function NoteThree(props) {

    const classes = useStyle()

    const [inputFields, setInputFields] = useState({ noteId: '', title: '', description: '' })

    const listenToColorUpdate = () => {
        props.autoRefresh()
    }

    const style = {
        width: '40vw',
        position: 'absolute',
        top: '30%',
        left: '35%',
        order: '3',
        // transform: 'translate(-50%, -50%)',
        // width: 400,
        // bgcolor: 'background.paper',
        // border: '2px solid #000',
        // boxShadow: 24,
        // p: 4,
        ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
            left: '20%'
        },
        ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
            left: '20%'
        },
        ['@media only screen and (min-width: 769px) and (max-width: 1200px)']: {
            left: '20%'
        }
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = (noteOdj) => {
        console.log(noteOdj, "this is for modification")
        setOpen(true);
        setInputFields({ noteId: noteOdj.id, title: noteOdj.title, description: noteOdj.description })
    };
    const handleClose = () => setOpen(false);

    const updateArchive = (id) => {
        let archiveObj = { noteIdList: [id], isArchived: true }
        archiveNotes(archiveObj).then((response) => {
            console.log(response)

        }).catch((error) => { console.log(error) })
        props.autoRefresh()
    }

    const updateDelete = (id) => {
        let deleteObj = { noteIdList: [id], isDeleted: true }
        deleteNotes(deleteObj).then((response) => {
            console.log(response)

        }).catch((error) => { console.log(error) })
        props.autoRefresh()
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

    const saveUpdate = () => {
        // console.log(inputFields, "input to modified....")
        updateNotes(inputFields).then((response) => {
            console.log(response)
            props.autoRefresh()
        }).catch((error) => { console.log(error) })
        setOpen(false)
    }

    // console.log(props, 'TakeNoteThree props')
    return (
        <Box className={classes.noteThreeMain}>
            <Box className={classes.wtspace3}></Box>
            <Box className={classes.thirdContent}>
                <Paper elevation={3} className={classes.mainNote3} style={{ backgroundColor: props.note.color }}>
                    {/* <div className={classes.blackTick3"><CheckCircleSharpIcon fontSize="medium"/></div> */}
                    <Box className={classes.thirdHeader}>
                        <Box className={classes.titleText3} onClick={() => handleOpen(props.note)}>
                            <Box className={classes.nameTitle3}><span>{props.note.title}</span></Box>
                            <Box className={classes.takeText3}><span>{props.note.description}</span></Box>
                        </Box>
                        <Box className={classes.pinIcon3}><PushPinOutlinedIcon color="action"
                            sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "0px", borderRadius: "50%" } }} /></Box>
                    </Box>
                    <Box className={classes.iconsField3}>
                        <Box className={classes.iconSym3}><AddAlertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "0px", borderRadius: "50%" } }} /></Box>
                        {/* <div className={classes.iconSym3}><PersonAddAltOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"0px", borderRadius: "50%" } }}/></div> */}
                        <Box className={classes.iconSym3}>
                            <ColorPopper id={props.note.id} action="update"
                                listenToColorUpdate={listenToColorUpdate}
                            //autoRefresh={props.autoRefresh()}
                            />
                            {/* <ColorLensOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"8px", borderRadius: "50%" } }}/> */}
                        </Box>
                        <Box className={classes.iconSym3}><ImageOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "0px", borderRadius: "50%" } }} /></Box>
                        <Box className={classes.iconSym3}><ArchiveOutlinedIcon fontSize="small" onClick={() => updateArchive(props.note.id)} color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "0px", borderRadius: "50%" } }} /></Box>
                        <Box className={classes.iconSym3}><DeleteOutlinedIcon fontSize="small" onClick={() => updateDelete(props.note.id)} color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "0px", borderRadius: "50%" } }} /></Box>
                        <Box className={classes.iconSym3}><MoreVertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "0px", borderRadius: "50%" } }} /></Box>

                    </Box>
                </Paper>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={classes.mainpopup} style={{ backgroundColor: props.note.color }}>
                        <div className={classes.mainPartOne}>
                            <div className={classes.mainPartText}>
                                <div className={classes.mainTitle3}><InputBase onChange={takingTitle} 
                                defaultValue={inputFields.title} 
                                /></div>
                                <div className={classes.mainText3}><InputBase onChange={takingDes} defaultValue={inputFields.description} /></div>
                            </div>
                            <div className={classes.mainPinIcon3}><PushPinOutlinedIcon color="action"
                                sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "0px", borderRadius: "50%" } }} /></div>
                        </div>
                        <div className={classes.mainIconsPart}>
                            <div className={classes.mainPartTwo}>
                                <div className={classes.iconPartSym}><AddAlertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></div>
                                {/* <div className={classes.iconPartSym}><PersonAddAltOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></div> */}
                                <div className={classes.iconPartSym}><ColorPopper id={props.note.id} action="update" listenToColorUpdate={listenToColorUpdate}/></div>
                                <div className={classes.iconPartSym}><ImageOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></div>
                                <div className={classes.iconPartSym}><ArchiveOutlinedIcon fontSize="small" onClick={() => updateArchive(props.note.id)} color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></div>
                                <div className={classes.iconPartSym}><DeleteOutlinedIcon fontSize="small" onClick={() => updateDelete(props.note.id)} color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "0px", borderRadius: "50%" } }} /></div>
                                <div className={classes.iconPartSym}><MoreVertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></div>
                                <div className={classes.iconPartSym}><UndoOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></div>
                                <div className={classes.iconPartSym}><RedoOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></div>
                            </div>
                            <div><Button style={{textTransform: 'capitalize'}} onClick={saveUpdate}>Close</Button></div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </Box>
    )
}

export default NoteThree