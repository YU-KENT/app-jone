import '../style/Home.css';
import VerticalLayout from './VerticalLayout';
import ThreeColumnComponent from './containers/ThreeColumnComponent'
import { useState } from 'react';
import Dropdown from './containers/Dropdown';
import TacheModal from './containers/TacheModal';
import {loginState} from '../outils/selector';
import { useSelector } from 'react-redux'
import services from '../service/dataService';
import ProjectBox from './containers/ProjectBox';
import Notification from'./containers/NotificationComponent'
import{handleNotesByTache} from'../outils/HandleData'

function Home(){
const [projectName,setProjectName] = useState('exampleProject');
const [isOpen,setModalOpen]= useState(false)
const [tache, setTache] = useState(null)
const state = useSelector(loginState)
const {UserName} = state
//get all datas 
const userDatas = services.getUserData(projectName); 
const projectNameArray = services.getProjectNameArray();
const newTaches = services.getProjectTachesBrief(projectName,UserName)
const dataProject = services.getProjectTachesEntire(projectName)
const notes =  services.getNotesSortingArray(projectName)

const handleClickTache =(tache)=>{
    setTache(tache)
    setModalOpen(true)
    const taches = dataProject["taches"]
    for(let i= 0; i < taches.length; i++){
      if(taches[i].description === tache.description){
  
        const notes = handleNotesByTache(taches[i])
        const newTache = {
          ...taches[i],
          "notes":notes
        }
        console.log("newTache",newTache)
        setTache(newTache);
      }
    }
  
}

const handleClickNote =(note)=>{
  const taches = dataProject["taches"]
  for(let i= 0; i < taches.length; i++){
    if(taches[i].description === note.description){
      setModalOpen(true);
      setTache(taches[i]);
      return
    }
    
  }
}

const handleClickProjectName =(name)=>{
    setProjectName(name);
}

return(
    <><main className='main-app'>
        <VerticalLayout />
        <div className='app-content'>
              <div className='header-app'>
                  <p className='header-app-title'>Table de travail</p>
              </div>
              <div className='app-table'>
                  <div className='app-table-header'>
                      <span className='app-table-title'>Mention tâche</span>
                      <span className='app-table-project'>
                          <Dropdown 
                          array={projectNameArray}
                          handleClick ={handleClickProjectName}
                          />
                      </span>
                      <span className='projectName'>{projectName}</span>
                  </div>
                    {userDatas&& <ThreeColumnComponent className='TableDeTravail' 
                    data={userDatas} 
                    defaultKey='Tâches inacceptés' 
                    isFunctionDisable={false} 
                    projectName={projectName}
                    handleClick = {handleClickTache}
                    />}
                  <div className='taches-title'>
                      <span className='title1'>Mes tâches</span>
                      <span className='title2'>Notification</span>
                  </div>
                  <div className='taches-notes'>
                      <div className='list-taches'>
                          {newTaches&& <ThreeColumnComponent className='TableDeTaches' 
                              data={newTaches} 
                              defaultKey="J'ai crée"
                              isFunctionDisable={false}
                              projectName={projectName}
                              handleClick = {handleClickTache}
                        />}
                        <span className='title1'>projet en cours</span>
                        {dataProject&&<ProjectBox 
                              data={dataProject} 
                              projectName={projectName}/>}
                      </div>
                      <div className='list-notes'>
                        <div className='list-notes-contents'>
                            {notes?<Notification
                                notes ={notes}
                                handleClick = {handleClickNote}
                                projectName = {projectName}
                                fromHomePage ={true} />
                            :(<div className='vide-notification'>Aucun Résultat</div>)
                            }
                        </div>      
                      </div>
                  </div>
              </div>

            
        </div>
     </main>
       { isOpen ?
        <div>
            {dataProject&& <TacheModal 
                            projectName={projectName} 
                            participants={dataProject.participants}
                            data={tache} 
                            closeClick = {()=> setModalOpen(false)} 
                            />
            }
        </div> :''
      }
    </>
)
}

export default Home;