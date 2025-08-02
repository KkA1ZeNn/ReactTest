import React from 'react'
import './Pagination.css'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className='pagination'>
      <button 
        className='pagination__button pagination__button--prev'
        onClick={handlePrevPage}
        disabled={currentPage <= 1}
      >
        ←
      </button>
      <span className='pagination__page'>{currentPage}</span>
      <button 
        className='pagination__button pagination__button--next'
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        →
      </button>
    </div>
  )
}

export default Pagination 