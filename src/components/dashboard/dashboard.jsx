import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { getNotesList } from "../../services/dataService";
import DrawerOne from "../drawer/drawer";
//import Header from "../header/header";
import HeaderAppBar from "../headermui/headermui";
import NoteOne from "../takenote1/noteone";
import NoteTwo from "../takenote2/notetwo";
import NoteThree from "../takenote3/notethree";
//import './dashboardstyle.css'

const useStyle = makeStyles({
    dashBoardMain: {
        maxWidth: '70vw',
        height: 'auto',
        border: '0px solid black',
        display: 'flex', 
        flexDirection:'row',
        flexGrow: 1,
        marginTop: '10px',
        marginLeft: '350px !important',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        dashBoardMain: {
            maxWidth: '70vw',
            marginLeft: '60px !important',
        }
    },
    // ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
    //     maxWidth: '75vw',
    //     height: 'auto',
    //     border: '1px solid black',
    //     display: 'flex', 
    //     flexDirection:'row',
    //     flexGrow: 1,
    //     marginTop: '0px',
    //     marginLeft: '60px !important',
    //     justifyContent: 'flex-start',
    //      flexWrap: 'wrap',
    // },
    ['@media only screen and (min-width: 481px) and (max-width: 600px)']: {
        dashBoardMain: {
            maxWidth: '70vw',
            marginLeft: '70px !important',
        }
    },
    ['@media only screen and (min-width: 601px) and (max-width: 768px)']: {
        dashBoardMain: {
            maxWidth: '70vw',
            marginLeft: '100px !important',
        }
    },
    ['@media only screen and (min-width: 769px) and (max-width: 900px)']: {
        dashBoardMain: {
            maxWidth: '70vw',
            marginLeft: '150px !important',
        }
    },
    ['@media only screen and (min-width: 901px) and (max-width: 1200px)']: {
        dashBoardMain: {
            maxWidth: '85vw',
            marginLeft: '100px !important',
        }
    }
})

function DashBoard(props) {

    const [toggle, setToggle] = useState(false)
    const [notesList, setNotesList] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [noteChoice, setNoteChoice] = useState ('Notes')

    const listenToDrawer = (hoverOption) => {
        setNoteChoice(hoverOption)
    }

    const listenToTakeNoteOne = () => {
        setToggle(true)
    }
    const getNote = () => {
        getNotesList().then((response) => {
            let filterNotes = []
            if(noteChoice === 'Notes') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if(notes.isArchived === false && notes.isDeleted === false){
                        return notes
                    }
                })  
            }
            else if(noteChoice === 'Archive') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if(notes.isArchived === true && notes.isDeleted === false){
                        return notes
                    }
                })  
            }
            else if(noteChoice === 'Trash') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if(notes.isArchived === false && notes.isDeleted === true){
                        return notes
                    }
                })  
            }
            console.log(response);
            // giving specific output as to shown
            setNotesList(filterNotes)
        }).catch((error) => console.log(error))    
    }

    const listenToTakeNoteTwo = () => {
        setToggle(false)
    }

    const autoRefresh = () => {
        getNote()
    }

    useEffect(() => {
        getNote()
    }, [noteChoice])
    //console.log(notesList, 'printed')

    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    }
    
    const classes = useStyle()
    return (        
        <div>
            <HeaderAppBar listenToHeader={listenToHeader}/>
            <DrawerOne drawerToggle ={drawerToggle} listenToDrawer={listenToDrawer}/>
            <div>
            {
                toggle ? <NoteTwo listenToTakeNoteTwo={listenToTakeNoteTwo} /> : <NoteOne listenToTakeNoteOne={listenToTakeNoteOne}/>
            }
            <Grid container spacing={1}  
             className={classes.dashBoardMain}>
                {
                    notesList.map((note) => (<Grid item lg={3} md={4} xs={12} sm={6} style={{border: '0px solid blue'}}> <NoteThree note = {note} autoRefresh = {autoRefresh}/></Grid>))
                }
            </Grid>
            </div>            
        </div>
    )
}

export default DashBoard