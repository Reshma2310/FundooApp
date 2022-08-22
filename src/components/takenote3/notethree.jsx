import React from "react";
import './notethreestyle.css';
// import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopper from "../colorpopper/color";
import { archiveNotes, deleteNotes } from "../../services/dataService";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


function NoteThree(props) {

    const listenToColorUpdate=()=> {
       props.autoRefresh()
    }

    const updateArchive = (id) => {
        let archiveObj = {noteIdList: [id], isArchived: true}
        archiveNotes(archiveObj).then((response) => {
            console.log(response)
                   
        }).catch((error) => {console.log(error)})
        props.autoRefresh()
    }

    const updateDelete = (id) => {
        let deleteObj = {noteIdList: [id], isDeleted: true}
        deleteNotes(deleteObj).then((response) => {
            console.log(response)
                   
        }).catch((error) => {console.log(error)})
        props.autoRefresh()
    }

    // console.log(props, 'TakeNoteThree props')
    return (
        <div className="noteThreeMain" >
            <div className="wtspace3"></div>
            <div className="thirdContent">
                <div className="mainNote3" style={{backgroundColor:props.note.color}}>
                    {/* <div className="blackTick3"><CheckCircleSharpIcon fontSize="medium"/></div> */}
                    <div className="thirdHeader">
                        <div className="titleText3">
                            <div className="nameTitle3" ><span>{props.note.title}</span></div>
                            <div className="pinIcon3"><PushPinOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"0px", borderRadius: "50%" } }}/></div>
                        </div>
                        <div className="takeText3"><span>{props.note.description}</span></div>
                    </div>
                    <div className="iconsField3">
                        <div className="iconSym3"><AddAlertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"0px", borderRadius: "50%" } }}/></div>
                        {/* <div className="iconSym3"><PersonAddAltOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"0px", borderRadius: "50%" } }}/></div> */}
                        <div className="iconSym3">                            
                            <ColorPopper id={props.note.id} action="update" 
                            listenToColorUpdate={listenToColorUpdate} 
                            //autoRefresh={props.autoRefresh()}
                            />
                            {/* <ColorLensOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"8px", borderRadius: "50%" } }}/> */}
                        </div>
                        <div className="iconSym3"><ImageOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"0px", borderRadius: "50%" } }}/></div>
                        <div className="iconSym3"><ArchiveOutlinedIcon fontSize="small" onClick={() =>updateArchive(props.note.id)} color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"0px",  borderRadius: "50%" } }}/></div>
                        <div className="iconSym3"><DeleteOutlinedIcon fontSize="small" onClick={() =>updateDelete(props.note.id)} color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"0px",  borderRadius: "50%" } }}/></div>
                        <div className="iconSym3"><MoreVertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"0px", borderRadius: "50%" } }}/></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteThree