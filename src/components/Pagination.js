import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagination({ handlePrevious, handleNext, hasPrevious, hasNext, loading }) {
    return (
        <div className="pagination-buttons">
            <button 
                className="btn btn-primary m-2" 
                onClick={handlePrevious} 
                disabled={!hasPrevious || loading}
            >
                Anterior
            </button>
            <button 
                className="btn btn-primary m-2" 
                onClick={handleNext} 
                disabled={!hasNext || loading}
            >
                Siguiente
            </button>
        </div>
    );
}

export default Pagination;
