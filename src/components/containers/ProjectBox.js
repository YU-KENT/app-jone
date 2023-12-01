import { FaBug } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import { FaEllipsis } from "react-icons/fa6";
import { useState } from "react";


function ProjectBox ({data,projectName}){
    console.log("component projectbox",data)
    const [liked, setLiked] = useState(false);
    let numberDefault = 0
    let numberDemande = 0
    let numberTache = 0
  const taches = data["taches"]
  for(let i= 0; i < taches.length; i++){
    if(taches[i].type === "défaut"){
      numberDefault ++
   }
    else if(taches[i].type === "tâche"){
      numberTache ++
   }else if(taches[i].type === "demande"){
    numberDemande ++
  }
   }  

   const LikeButton = () => {
    
    const handleLikeToggle = () => {
      setLiked(!liked);
    };
    return (
      <div className="bg-icon-etoile">
        <span className="icon-etoile"
          onClick={handleLikeToggle}
          style={{ cursor: 'pointer', color: liked ? 'gold' : 'gray' }}
        >
          &#9733; {/* Unicode star character */}
        </span>
      </div>
    );
  };
  
  //formate date 
  const formatDate =(dateString)=>{
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toLocaleDateString('fr-FR');
    return formattedDate
  }
   return(<div className='box-project'>
             <div className="box-project-button">
                 <div className='modal-header_button'><FaEllipsis/></div>
             </div>
             <div className="box-project-content">
                <div className="bg-icon-bsBox">
                   <BsBox className="icon-bsBox"/>
                </div>
                <div className="project-counting">
                    <div>
                        {projectName}
                        {LikeButton()}
                    </div>
                   
                    
                    <div className='icons-counting'>
                        <div className="counting">
                            <div className='icon-bg icon-light'>
                                <FaLightbulb className='icon-light'/>
                            </div>
                            <div>{numberDemande}</div>
                        </div>
                        <div className="counting">
                            <div className='icon-bg icon-paper'>
                                <IoIosPaper className='icon-paper'/>
                            </div>
                            <div>{numberTache}</div>
                        </div>
                        <div className="counting">
                            <div className='icon-bg icon-bug'>
                                <FaBug className='icon-bug'/>
                            </div>
                            <div>{numberDefault}</div>
                        </div>
                   </div>
                </div>
             </div>
             <div className="box-project-version-date">
                    <div>Version:{data.version}</div>
                    <div>{data.date?formatDate(data.date):''}</div>
             </div>
         </div>
   )
  
  }

  export default ProjectBox