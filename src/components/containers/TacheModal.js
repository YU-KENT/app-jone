import'../../style/TacheModal.css'
import { useState } from 'react';
import { IoIosLink } from "react-icons/io";
import { FaEllipsis } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaBug } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { MdSignalWifiStatusbar1Bar } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FcHighPriority } from "react-icons/fc";
import DatesPicker from './DatesPicker';
import NoteComponent from'./NoteComponent';
import Notification from './NotificationComponent';
import { IoAddCircle } from "react-icons/io5";

function TacheModal({projectName,closeClick,data,participants}){
    const [activeInfo, setActiveInfo] = useState('Infos essentielles');
    const infosArray = ['Infos essentielles','Tâches dérivées','Heures d\'ouverture','Annexe']
    const infosElements = infosArray.map((info) => (
        <span key={info} className={`category ${activeInfo === info?'active':''}`}
         onClick={() => handleKeyClick(info)}
        >
          {info}
        </span>
      ));
    const handleKeyClick = (key) => {
        setActiveInfo(key);  
      };
    console.log("activeInfo",activeInfo)

    const closeModal =() =>{
    closeClick()
    }

    const iconTache =(type)=>{
        if(type ==="défaut"){
          return <div className='icon-bg icon-bug'>
                   <FaBug className='icon-bug'/>
                </div>
        }
        else if (type ==="tâche"){
          return <div className='icon-bg icon-paper'>
                   <IoIosPaper className='icon-paper'/>
                </div>
        }
        else if (type ==="demande"){
          return <div className='icon-bg icon-light'>
                    <FaLightbulb className='icon-light'/>
                </div>
        }
      }

      const infoEs_content =()=>{
        return(
        <div className='boxs'>
            <div className='info-box'>
                <span>Version </span>
                <span className='info-value'>v 1.0</span>
            </div>
            <div className='info-box'>
                <span>Heures estimées</span>
                <span className='info-value'>0 h</span>
            </div>
            <div className='info-box'>
                <span>la date démarrage</span>
                <DatesPicker className='info-value'/>
            </div>
            <div className='info-box'>
                <span>Note</span>
                <NoteComponent/>
            </div> 
        </div> 
        )
      }


return(

    <div className='modal'>
        <div className='modal_content'>
            <div className='modal-header'>
                <div className='modal-header-content'>
                    <div className='modal-header_title'>
                        {iconTache(data.type)}
                        <span className='modal-type'>{data.type} :</span>
                        <span>{data.numero}</span>
                    </div>
                    <div className='projectname'>{projectName}</div>
                </div>
                <div className='modal-header_buttons'>
                    <div className='modal-header_button'><IoIosLink/></div>
                    <div className='modal-header_button'><FaEllipsis/></div>
                    <div className='modal-header_button' onClick={()=>closeModal()}><IoMdClose/></div>
                </div>
            </div>
            <div className='modal_all'>
                <div className='modal_content-left'>
                    <h2>{data.description}</h2>
                    <button  disabled={!data.acceptable}>
                      Accepter
                   </button>
                    <div className='modal-infos'>
                        <div className='modal-info'>
                            <div className='modal-info-icon'>
                            <MdSignalWifiStatusbar1Bar className='icon-status'/>
                            </div>
                            <div className='modal-info-content'>
                                <span className='label'>Status</span> 
                                <span>{data.status}</span>
                            </div>
                        </div>

                        <div className='modal-info'>
                            <div className='modal-info-icon'>
                            <IoPersonCircleOutline className='icon-responsable'/>
                            </div>
                            
                            <div className='modal-info-content'>
                                <span className='label'>Résponsable</span> 
                                <span>{data.responsable}</span>
                            </div>
                        </div>

                        <div className='modal-info'>
                            <div className='modal-info-icon'>
                            <FcHighPriority  className='icon-priority'/>
                            </div>
                            
                            <div className='modal-info-content'>
                                <span className='label'>Priorité</span> 
                                <span>{data.priorite}</span>
                            </div>
                        </div>

                    </div>
                    <div className='infos-contents'>
                        <div className='infos-titles'>
                            {infosElements}
                        </div>
                    </div>
                    <div  key='Infos essentielles' className={`info-modal ${activeInfo === 'Infos essentielles'? 'active':''}`}>
                        {infoEs_content(data)}
                    </div>
                    <div key='Tâches dérivées' className={`info-modal ${activeInfo === 'Tâches dérivées'? 'active':''}`} >
                        <div>run 2</div>
                    </div>
                    <div key='Tâches associées' className={`info-modal ${activeInfo === 'Tâches associées'? 'active':''}`}>
                        <div>run 3</div>
                    </div>
                    <div key="Heures d'ouverture" className={`info-modal ${activeInfo === "Heures d'ouverture"? 'active':''}`}>

                </div>
                    <div key='Annexe' className={`info-modal ${activeInfo === 'Annexe'? 'active':''}`} >

                    </div>


                </div>
                <div className='modal_content-right'>
                    <div className='modal-participant'>
                        <div>
                            <span className='modal-participant-title'>Participants :</span>
                            <span className='modal-participant-numero'>{participants.length}</span>
                       </div>
                       <div>
                            {participants.map((participant)=>(
                                <span key={participant}>{participant}</span>)
                            )}
                            <span><IoAddCircle className='icon-modal-add'/></span>
                       </div>
                    </div>
                    <div>
                        <span className='modal-note-title'>Notification: </span>
                        <Notification 
                            notes ={data.notes}
                            projectName = {projectName}
                            fromHomePage ={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
)
}

export default TacheModal