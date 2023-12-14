import '../style/GestionDemande.css';
import services from '../service/dataService';
import TableDemande from'./containers/TableDemande';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux'
import {projectState} from '../outils/selector';
import VerticalLayout from './VerticalLayout';
import { IoAddOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";


function  GestionDemande(){
    
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const state = useSelector(projectState)
    const {projectName}= state
    const dataProject = services.getProjectTachesEntire(projectName)
    const participants = dataProject.participants

    useEffect(() => {
      const fetchData = async () => {
        try {
          const demandeArray = await services.getDemandesArray(projectName)
          setData(demandeArray);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 


    const handleSearch = (event) => {
      setSearchTerm(event.target.value.toLowerCase());
      console.log('Search Term:', searchTerm);
    };
    const handleSearchClick = ()=>{
      const newArray = data.filter((demande)=> demande.numero.toLowerCase().includes(searchTerm))
      setFilteredData(newArray)
      console.log("currentData",filteredData)
    }
   


    const handleAdd = ()=>{}   

  
    return(
    <main className='main'>

    <VerticalLayout/>
    <div className='app-content'>
              <div className='header-app'>
                  <p className='header-app-title'>Gestion des besoins</p>
                  <div className='header-app-title_div'>
                    <span className='header-app-title_content'>Demand Pool</span>
                  </div>
                  <div className='btn-add-demande' onClick={handleAdd}>
                    <IoAddOutline className='icon-demande-add'/>
                    Nouveau Demande
                  </div>
                  <div className='header-app-search'>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Recherche par le numero de besoin"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <IoMdSearch className='icon-demande-search'
                     onClick={handleSearchClick}
                    />
                  </div>
              </div>
              <div className='app-table'>
                
                 {<TableDemande 
                   data={filteredData.length > 0 ? filteredData : data}
                   participants={participants}
                  
                  />
                                    
                } 
              </div>
    </div>
    </main>
)
}

export default GestionDemande;