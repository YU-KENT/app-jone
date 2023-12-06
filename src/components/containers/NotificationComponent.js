import { FaRegUserCircle } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { BsArrowBarRight } from "react-icons/bs";


function Notification({notes,projectName,handleClick,fromHomePage}){

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
    
        handleClick(note)
        
    }
    let recentNotes
    if(notes && notes.length > 10){
        recentNotes = notes.slice(0,10)
    }else if(notes){recentNotes = notes}
    
    return !notes ? <div className='vide-notification'>Aucun résultat</div>
    : recentNotes.map((note,index)=>(    
    fromHomePage ?    
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
    : <div key={index} className="note-container">
         <div className="note-firstLine">
            <p className="note-content">
                <LuPencilLine className="icon-note-pen"/>
                <span className="note-createur">{note.createur}</span>
                <span className="note-action">{note.action}</span>
            </p>
            <p className="note-time-name">
                <span className="note-time">{customFormatTime(note.time)}</span>
            </p>
        </div>
        <div className="note-secondLine">
            <p>
                 <BsArrowBarRight className="icon-note-arrow"/>
                <span className="note-message">{note.message}</span>
            </p>
        </div>
      </div> 
    )) 
           
                          

   
    

}
export default Notification