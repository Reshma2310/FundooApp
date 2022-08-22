import React, { useState } from "react";
import './notetwostyle.css';
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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


function NoteTwo(props) {

    const [inputFields, setInputFields] = useState({title: '', description: '', color: '', isArchived: false, isDeleted: false})

    const openNoteOne = () => {
        props.listenToTakeNoteTwo()
        postNotes(inputFields).then((response) => {
            console.log(response);
            props.autoRefresh()       
        }).catch((error) => {console.log(error)})
    } 

    const takingTitle = (event) => {
        setInputFields( prevState => ({ ...prevState,
            title: event.target.value
        }))
        // console.log(event.target.value)
    }
    const takingDes = (event) => {
        setInputFields( prevState => ({ ...prevState,
            description: event.target.value
        }))
        // console.log(event.target.value)
    }

    const listenToColorPopper = (colour) => {
        setInputFields( prevState => ({ ...prevState,
            color: colour
        }))
    }

    const archiveNote = () => {
        setInputFields(prevState => ({ ...prevState,
            isArchived: true
        }))
        console.log("Note Archived")
    }
    return (
        <div className="noteTwoMain">
            <div className="noteTwoContent" style={{backgroundColor: inputFields.color}}>
                <div className="twoTextContent">
                    <div className="titleText2">
                        <div className="nameTitle2"><InputBase onChange={takingTitle} placeholder='Title'/></div>
                        <div className="pinIcon2"><PushPinOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"6px", borderRadius: "50%" } }}/></div>
                    </div>
                    <div className="takeText2"><InputBase onChange={takingDes} placeholder='Take a note...' /></div>
                </div>
                <div className="noteTwoIcons">
                    <div className="footerIcons2">
                        <div className="iconSym2"><AddAlertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                        <div className="iconSym2"><PersonAddAltOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                        <div className="iconSym2"><ColorPopper listenToColorPopper ={listenToColorPopper} action="create"/>
                            {/* <ColorLensOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"8px", borderRadius: "50%" } }}/> */}
                            </div>
                        <div className="iconSym2"><ImageOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                        <div className="iconSym2"><ArchiveOutlinedIcon fontSize="small" onClick={archiveNote} color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>                        
                        <div className="iconSym2"><MoreVertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                        <div className="iconSym2"><UndoOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                        <div className="iconSym2"><RedoOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                    </div>
                    <div className="btnClass2"><Button variant="Close" id="btnId2" fullWidth="true" onClick={openNoteOne}>Close</Button></div>
                </div>
            </div>
        </div>
    )
}

export default NoteTwo