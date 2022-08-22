import React from "react";
import './noteonestyle.css';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function NoteOne(props) {

    const openNoteTwo = () => {
        props.listenToTakeNoteOne()
    }
    return (
        <div className="mainNote1">
            <div className="noteContent1" onClick={openNoteTwo}>
                <div className="noteBorder1">
                    <div className="noteMainText1">
                        <span>Take a note...</span>
                    </div>
                    <div className="noteMainIcons1">
                        <div className="iconEnd1"><CheckBoxOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                        <div className="iconEnd1"><BrushOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                        <div className="iconEnd1"><ImageOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding:"1px", borderRadius: "50%" } }}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteOne