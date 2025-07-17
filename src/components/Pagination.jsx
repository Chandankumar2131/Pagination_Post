import React, { useContext } from 'react';
import DataContext from '../contextApp/ContextApp';
import './Pagination.css';

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(DataContext);

  return (
    <div className="pagination-container">
      <div className="pagination-buttons">
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
      </div>

      <div className="page-info">
        Page {page} of {totalPages}
      </div>
    </div>
  );
}
