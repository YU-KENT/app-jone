import { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function TableDemande({data,projectName}){
const [currentPage, setCurrentPage] = useState(1);
const [paginationPerPage,SetpaginationPerPage] =useState("5")
const [selectedRows, setSelectedRows] = useState([]);
const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
const totalPages = Math.ceil(data.length / paginationPerPage) || 0

const handleSelect = (rowDes) => {
  setSelectedRows((prevSelectedRows) => {
    if (prevSelectedRows.includes(rowDes)) {
      // If rowId is already selected, remove it
      return prevSelectedRows.filter((description) => description !== rowDes);
    } else {
      // If rowId is not selected, add it
      return [...prevSelectedRows, rowDes];
    }
  });
};
console.log("selectedRows",selectedRows)
const pagination = ()=>{
  const handleNumPerPage =(value)=>{
    console.log("handleNumPerPage",value)
    SetpaginationPerPage(value)
  }
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const pageButtons = [];
  
  for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`btn-pagination-page ${currentPage === i ? "active" : ""}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
  return(
  <div className="demande-table-pages">
    <div  className="table-pages">
        <div className="table-pages_info"> 
          <span>Page : </span>
          <span className='currentPage-color'>{currentPage}</span>
          <span> / {totalPages}</span>
        </div>
        
      </div>
        <div className="table-buttons">
             <div className="table-buttons_info">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                <IoIosArrowBack />
                   </button>
                {pageButtons}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                  <IoIosArrowForward/>
                </button>
             </div>
             <div className="btnSelect-page">
                 <select onChange={(e) => handleNumPerPage(e.target.value)}>
                     <option value="10">10 par page</option>
                     <option value="20">20 par page</option>
                     <option value="40">40 par page</option>
                 </select>
            </div>
        </div>
    </div>
  )
}


const handleSearch = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };


const renderTableHeader = () => {
  return (
      
        <><div onClick={() => handleSearch('name')}>Name</div>
        <div onClick={() => handleSearch('age')}>Age</div>
        <div onClick={() => handleSearch('age')}>Age</div>
        <div onClick={() => handleSearch('age')}>Age</div></>
      
  )
};

const renderDataForCurrentPage = () => {
  const startIndex = (currentPage - 1) * paginationPerPage;
  const endIndex = startIndex + paginationPerPage;
  const currectData = data;
  const pageData = currectData.slice(startIndex, endIndex) 
  return pageData? pageData.map((tache, index) => (
    <div key={index} className="table-row">
        <div className="table-column ">
               <input
                type="checkbox"
                checked={selectedRows.includes(tache.description)}
                onChange={() => handleSelect(tache.description)}
              />

          {tache.numero}
        </div>
        <div className="table-column description">
          {tache.description}
        </div>
        <div className="table-column Type">
          {tache.sousType["le type de defaut"]}
        </div>
        <div className="table-column esTemps">
          {tache["Estimation temps"]}
        </div>
      </div>
  )): <div className='noResults'>Aucun résultat</div>

};

return (
  <><div className='demande-table'>
        <div className="table-header">
          <div className='table-header-list'>
            <CiBoxList className="icon-demande-list" />
            Liste
          </div>
          <div>
           buttons
          </div>
        </div>
        <div className="table-filters">
        {renderTableHeader()}
        </div>
        <div className="table-content">
        <div>
          <div>Numéro</div>
          <div>Déscription</div>
          <div>Module d'appartenance</div>
          <div>Demande Type</div>
       </div>
          {renderDataForCurrentPage(projectName)}
        </div>
    </div>
    {data&&pagination(data)}
    
    </>
);
};

export default TableDemande;