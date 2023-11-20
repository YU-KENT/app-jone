import React, { useState } from 'react';
import '../style/Table.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const itemsPerPage = 5;

function ThreeColumnComponent({className,data})  {
  console.log("data",data)
  const [currentPage, setCurrentPage] = useState(1);
  const [activeKey, setActiveKey] = useState('Tâches inacceptés');
  const totalPages = Math.ceil(data[activeKey].length / itemsPerPage);
  console.log("totalPages",totalPages)
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
  console.log("propertyKeysArray",propertyKeysArray)
  const keyElements = propertyKeysArray.map((key) => (
    <span key={key} className={`titleElement ${activeKey === key?'active':''}`}
    onClick={() => handleKeyClick(key)}
    >
      {key}
    </span>
  ));
  const handleKeyClick = (key) => {
    setActiveKey(key);
    // when a key is clicked if needed
  };
  console.log("key",activeKey)
  const renderDataForCurrentPage = (key) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currectData = data[key];
    console.log("currectData",currectData)
    const pageData = currectData.slice(startIndex, endIndex);

    return pageData.map((item, index) => (
      <div key={index} className="table-row">
        <div className="table-column">{item.colA}</div>
        <div className="table-column">{item.colB}</div>
        <div className="table-column">{item.colC}</div>
      </div>
    ));
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
        {renderDataForCurrentPage(activeKey)}
      </div>
    </div>
  );
};

export default ThreeColumnComponent;