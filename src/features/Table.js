import React, { useState } from 'react';
import '../style/Table.css';

const data = [
  { colA: 'A1', colB: 'B1', colC: 'C1' },
  { colA: 'A2', colB: 'B2', colC: 'C2' },
  { colA: 'A3', colB: 'B3', colC: 'C3' },
  { colA: 'A4', colB: 'B4', colC: 'C4' },
  // Add more data as needed
];

const itemsPerPage = 4;

const ThreeColumnComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const renderDataForCurrentPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);

    return pageData.map((item, index) => (
      <div key={index} className="table-row">
        <div className="table-column">{item.colA}</div>
        <div className="table-column">{item.colB}</div>
        <div className="table-column">{item.colC}</div>
      </div>
    ));
  };

  return (
    <div>
      <div className="table-header">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className="table-content">
        <div className="table-row table-header">
          <div className="table-column">A</div>
          <div className="table-column">B</div>
          <div className="table-column">C</div>
        </div>
        {renderDataForCurrentPage()}
      </div>
    </div>
  );
};

export default ThreeColumnComponent;