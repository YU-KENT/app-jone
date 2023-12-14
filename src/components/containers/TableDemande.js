import { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {DropdownBesoin} from"../containers/Dropdown"

function TableDemande({data,participants}){
      
      const [selectAll, setSelectAll] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [paginationPerPage,SetpaginationPerPage] =useState("7")
      const [selectedRows, setSelectedRows] = useState([]);
      console.log("tabledemande",data,participants)
      
      const totalPages = Math.ceil(data.length / paginationPerPage) || 0

      const handleSelect = (rowDescription) => {
        setSelectedRows((prevSelectedRows) => {
          if (prevSelectedRows.includes(rowDescription)) {
            // If rowId is already selected, remove it
            return prevSelectedRows.filter((description) => description !== rowDescription);
          } else {
            // If rowId is not selected, add it
            return [...prevSelectedRows, rowDescription];
          }
        });
      };
      const handleSelectAll = () => {
        setSelectAll(!selectAll);
       
        // Update selectedRows based on selectAll status
        const startIndex = (currentPage - 1) * paginationPerPage;
        const endIndex = startIndex + paginationPerPage;

        const pageData = data.slice(startIndex, endIndex) 
        console.log("selectAll",selectAll)
        const updatedRows = selectAll ? [] : pageData.map((tache) => tache.description);
        setSelectedRows(updatedRows);
      };

      const handleDropdownFilter = (value)=>{
      console.log("handleDropdownFilter",value)
      }

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



      const renderTableHeader = () => {
      return (
              <>
                <DropdownBesoin
                  array={''}
                  handleClick ={handleDropdownFilter}
                  name = {"Module appartient"}
                />

                <DropdownBesoin
                  array={["P0","P1","P2","P3"]}
                  handleClick ={handleDropdownFilter}
                  name = {"Priorité"}
                />
                <DropdownBesoin
                  array={["Nouveau","Fini","En cours"]}
                  handleClick ={handleDropdownFilter}
                  name = {"Status"}
                />
                <DropdownBesoin
                  array={participants}
                  handleClick ={handleDropdownFilter}
                  name = {"Résponsable"}
                />
            </>
        )
      };

      const renderDataForCurrentPage = () => {
          const startIndex = (currentPage - 1) * paginationPerPage;
          const endIndex = startIndex + paginationPerPage;

          const pageData = data.slice(startIndex, endIndex) 
          return pageData? pageData.map((tache, index) => (
            <div key={index} className="table-row">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(tache.description)}
                  onChange={() => handleSelect(tache.description)}
                />
                <div className="table-column demande_numero">
                  {tache.numero}
                </div>
                <div className="table-column demande_description">
                  {tache.description}
                </div>
                <div className="table-column demande_Type">
                  {tache.sousType["le type de defaut"]}
                </div>
                <div className="table-column demande_responsable">
                  {tache.responsable}
                </div>
                <div className="table-column demande_esTemps">
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
            <div className="table-content-titiles">
                <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                />
                <div>Numéro</div>
                <div>Déscription</div>
                <div>Module d'appartenance</div>
                <div>Demande Type</div>
                <div>Responsable</div>
                <div>livraison estimé</div>
          </div>
            {renderDataForCurrentPage()}
        </div>
    </div>
    {data&&pagination(data)}
    
    </>
);
};

export default TableDemande;