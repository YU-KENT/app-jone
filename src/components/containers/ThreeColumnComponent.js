import React, { useState } from 'react';
import '../../style/Table.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaBug } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";

const itemsPerPage = 5;

function ThreeColumnComponent({className,data,defaultKey,isFunctionDisable,handleClick,projectName})  {

  const [currentPage, setCurrentPage] = useState(1);
  const [activeKey, setActiveKey] = useState(defaultKey);
  const totalPages = Math.ceil(data[activeKey].length / itemsPerPage) || 0
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const getPropertyKeys = (obj)=> {
    return Object.keys(obj);
  }
  const propertyKeysArray = getPropertyKeys(data);

  const keyElements = propertyKeysArray.map((key) => (
    <span key={key} className={`titleElement ${activeKey === key?'active':''}`}
     onClick={() => handleKeyClick(key)}
    >
      {key}
    </span>
  ));
  const handleKeyClick = (key) => {
    setActiveKey(key);
    setCurrentPage(1)
    // when a key is clicked if needed
  };

  const modalOpen = (tache)=>{
    console.log("eeeeee--------",tache)
    if(!isFunctionDisable){
      handleClick(tache)
    }

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
    }}
  
  const renderDataForCurrentPage = (key) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currectData = data[key];

    const pageData = currectData.slice(startIndex, endIndex) 
    return pageData? pageData.map((tache, index) => (
      <div key={index} className="table-row">
        <div className="table-column priorité">
          <span>Priorité</span>
          {tache.priorite}
        </div>
        <div className="table-column type">
          <span>{tache.type}</span>
          {iconTache(tache.type)}
        </div>
        <div className="table-column description" onClick={()=>modalOpen(tache)}>
          {tache.description}
        </div>
        <div className="table-column status" >
          {tache.status}
        </div>
        <div className="table-column" >
          {projectName}
        </div>
      </div>
    )): <div className='noResults'>Aucun résultat</div>;
  };

  return (
    <div className={className}>
      <div className="table-header">
        <div className='titleElements'>{keyElements}</div>
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <IoIosArrowBack />
          </button>
          <span>
            <span className='currentPage-color'>{currentPage}</span> / {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            <IoIosArrowForward/>
          </button>
        </div>
      </div>
      <div className="table-content">
        {renderDataForCurrentPage(activeKey,projectName)}
      </div>
    </div>
  );
};

export default ThreeColumnComponent;