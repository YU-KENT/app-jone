import '../style/Home.css';
import VerticalLayout from './VerticalLayout';
import ThreeColumnComponent from '../components/containers/Table'
import { useState } from 'react';
import Dropdown from './containers/Dropdown';
import TacheModal from './containers/TacheModal';
import {loginState} from '../outils/selector';
import { useSelector } from 'react-redux'
import services from '../service/dataService';

function Home(){
const [projectName,setProjectName] = useState('exampleProject');
const [isOpen,setModalOpen]= useState(false)
const [tache, setTache] = useState(null)
const state = useSelector(loginState)
const {UserName} = state
//get all datas 
const userDatas = services.getUserData(projectName); 
const projectNameArray = services.getProjectNameArray();
const version = services.getProjectVersion(projectName)
const newTaches = services.getProjectTachesBrief(projectName,UserName)
const dataProject = services.getProjectTachesEntire(projectName)


const handleClickTache =(tache)=>{
    const taches = dataProject["taches"]
    for(let i= 0; i < taches.length; i++){
      if(taches[i].description === tache.description){
        
        setModalOpen(true);
        setTache(taches[i]);
      }
      else {
        setModalOpen(true);
        setTache(tache)}
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
                {<ThreeColumnComponent className='TableDeTravail' 
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
               <div className='list-taches'>
                    {<ThreeColumnComponent className='TableDeTaches' 
                    data={newTaches} 
                    defaultKey="J'ai crée"
                    isFunctionDisable={false}
                    projectName={projectName}
                    handleClick = {handleClickTache}
                   />}
                   <span>projet en cours</span>
                   <div className='box-project'>
                    <span>{projectName}</span>
                   </div>

            </div>
            </div>
            <div>{version}</div>

            
        </div>
     </main>
       { isOpen ?
        <div>
            <TacheModal 
            projectName={projectName} 
            paticipants={dataProject.paticipants}
            data={tache} 
            closeClick = {()=> setModalOpen(false)} />
        </div> :''
      }
    </>
)
}

export default Home;