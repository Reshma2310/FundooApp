import React, { useEffect, useState } from "react";
import { getNotesList } from "../../services/dataService";
import DrawerOne from "../drawer/drawer";
import Header from "../header/header";
import NoteOne from "../takenote1/noteone";
import NoteTwo from "../takenote2/notetwo";
import NoteThree from "../takenote3/notethree";

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

    return (
        <div>
            <Header listenToHeader={listenToHeader}/>
            <DrawerOne drawerToggle ={drawerToggle} listenToDrawer={listenToDrawer}/>
            <div>
            {
                toggle ? <NoteTwo listenToTakeNoteTwo={listenToTakeNoteTwo} /> : <NoteOne listenToTakeNoteOne={listenToTakeNoteOne}/>
            }
            <div style={{width: '100', height: 'auto', border: '0px solid black', display: 'flex', flexDirection:'row',marginTop: '10px', marginLeft:'350px',justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                {
                    notesList.map((note) => (<NoteThree note = {note} autoRefresh = {autoRefresh}/>))
                }
            </div>
            </div>            
        </div>
    )
}

export default DashBoard