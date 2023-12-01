import { FaRegUserCircle } from "react-icons/fa";

function Notification({notes,projectName,handleClick}){
    console.log("notes", notes,notes.length);
    const customFormatTime =(str)=>{
    const date = new Date(str);
    const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
    hour12: false
    };
    const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(date);
    return formattedDate
    }
    const modalOpen = (note)=>{
        console.log("nnnnnnnn--------",note)
        handleClick(note)
    }
    const recentNotes = notes.slice(0,10)
    return recentNotes.map((note,index)=>(        
    <div key={index} className="note-container">
        <p className="note-content">
            <FaRegUserCircle className="icon-note-user"/>
            <span className="note-createur">{note.createur}</span>
            <span className="note-action">{note.action}</span>
            
            <span className="note-desc" onClick={()=>modalOpen(note)}>&#91; {note.description}</span>
            <span className="bleu-character">&#93;</span>
        </p>
        <p className="note-time-name">
            <span className="note-time">{customFormatTime(note.time)}</span>
            <span className="note-project_name">- {projectName}</span>
        </p>
    </div>
    ))
                       
                          

   
    

}
export default Notification