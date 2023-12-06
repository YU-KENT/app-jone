import '../style/GestionDemande.css';
import { useState } from 'react';
import VerticalLayout from './VerticalLayout';
import { IoAddOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

function GestionDemande(){
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value.toLowerCase());
      // You can perform your search logic here
      console.log('Search Term:', searchTerm);
    };




return(
    <main className='main'>
    <VerticalLayout/>
    <div className='app-content'>
              <div className='header-app'>
                  <p className='header-app-title'>Gestion de demande</p>
                  <div className='header-app-title_div'>
                    <span className='header-app-title_content'>Demand Pool</span>
                  </div>
                  <div className='btn-add-demande' onClick={''}>
                    <IoAddOutline className='icon-demande-add'/>
                    Nouveau Demande
                  </div>
                  <div className='header-app-search'>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Recherche par le numero de demande"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <IoMdSearch className='icon-demande-search'/>
                  </div>

              </div>
              <div className='app-table'>
              </div>
    </div>
    </main>
)
}

export default GestionDemande;