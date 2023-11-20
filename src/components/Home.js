
import '../style/Home.css';
import VerticalLayout from './VerticalLayout';
import ThreeColumnComponent from '../features/Table'
import { useState,useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

function Home(){

const [data, setData] = useState(null);
const [name,setName] = useState('exampleProject');
const [isDropdownOpen, setDropdownOpen] = useState(false);

const nomProject='exampleProject'

useEffect(() => {
  
    const fetchData = async ({nomProject}) => {
      try {
   
        const response = await fetch('/data/user.json');
        const data = await response.json();
        const tacheData = data.projects
     
        if (tacheData.hasOwnProperty(nomProject)) {
          // Set the data state with the project data
          setData(tacheData[nomProject]);
        } 
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log("name",name)
    fetchData({ nomProject: name });;

}, []); 

console.log("tacheData",data)

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
            <a href="#">Project 1</a>
            <a href="#">Project 2</a>
            <a href="#">Project 3</a>
            {/* Add more projects as needed */}
          </div>
        )}
      </div>
    );
  };
  
return(
    <main className='main-app'>
    <VerticalLayout/>
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
                <span className='projectName'>{nomProject}</span>
           </div>
           {data &&<ThreeColumnComponent className='TableDeTravail' data= {data}/>}
        </div>
    </div>
    </main>
)
}

export default Home;