import '../style/Home.css';
import VerticalLayout from './VerticalLayout';
import ThreeColumnComponent from '../components/containers/Table'
import { useState,useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import TacheModal from './containers/TacheModal';
import {loginState} from '../outils/selector';
import { useSelector } from 'react-redux'


function Home(){

const [data1, setData1] = useState(null);
const [data2, setData2] = useState(null);
const [projectName,setProjectName] = useState('exampleProject');
const [version, setVersion] = useState('')
const [isDropdownOpen, setDropdownOpen] = useState(false);
const [projectNameArray,seProjectNameArray] = useState([]);
const [isOpen,setModalOpen]= useState(false)
const [tache, setTache] = useState(null)
const state = useSelector(loginState)
const {UserName} = state

const getPropertyKeys = (obj)=> {
    return Object.keys(obj);}
const handleData = (obj)=>{
    let array = obj["J'ai crée"]
    let newArray =[]
    for(let i=0; i < array.length; i++){
       if(array[i].responsable === UserName){
         newArray.push(array[i]);   
      }
    }
    return { "J'ai crée":array,
             "J'effectue": newArray
    }
}

useEffect(() => {
    const fetchData = async ({name}) => {
      try {
        const response1 = await fetch('/data/user.json');
        const response2 = await fetch('/data/tache.json');
        const data1 = await response1.json();
        const data2 = await response2.json();
      
        const tacheData1 = data1.projects;
        const tacheData2 = data2[name];
        const version = tacheData2.version
        setVersion(version)
        const newData2 = handleData(tacheData2)
        setData2(newData2);
        seProjectNameArray(getPropertyKeys(tacheData1));

        if (tacheData1.hasOwnProperty(name)) {
          // Set the data state with the project data
          setData1(tacheData1[name]);
        } 
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData({ name: projectName });;

}, [projectName]); 

const changeProject =(name)=>{
    setProjectName(name);
    setDropdownOpen(false)
}

const handleClickTache =(tache)=>{
    console.log("parent----- component",tache)
    setModalOpen(true);
    setTache(tache);

}
const Dropdown = () => {
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    return (
      <div className="dropdown">
        <div className="dropbtn" onClick={toggleDropdown}>
          Projet <IoMdArrowDropdown className='icon-dropdown'/>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            {projectNameArray.map((name)=>{
                return <div onClick={() => changeProject(name)}>{name}</div>

            })}
          </div>
        )}
      </div>
    );
  };
  
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
                        {Dropdown()}
                    </span>
                    <span className='projectName'>{projectName}</span>
                </div>
                {data1 && <ThreeColumnComponent className='TableDeTravail' 
                data={data1} 
                defaultKey='Tâches inacceptés' 
                isFunctionDisable={false} 
                handleClick = {handleClickTache}
                />}
                <div className='taches-title'>
                    <span className='title1'>Mes tâches</span>
                    <span className='title2'>Notification</span>
               </div>
               <div className='list-taches'>
                    {data2 && <ThreeColumnComponent className='TableDeTaches' 
                    data={data2} 
                    defaultKey="J'ai crée"
                    isFunctionDisable={false}
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
            
            data={tache} 
            closeClick = {()=> setModalOpen(false)} />
        </div> :''
      }
    </>
)
}

export default Home;