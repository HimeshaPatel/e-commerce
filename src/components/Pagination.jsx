import React from 'react'

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <nav className="pagination-container" aria-label="Pagination Navigation">
      <button
        className="pagination-btn"
        type="button"
        aria-label="Previous page"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <svg
          className="pagination-btn-arrow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {
        [...Array(totalPages).keys()].map((num) => (
          <button key={num} className={`pagination-btn ${currentPage === num ? 'active' : ''}`} type="button" aria-current="page" onClick={() => setCurrentPage(num)}>{num + 1}</button>
        ))

      }


      <button
        className="pagination-btn"
        type="button"
        aria-label="Next page"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        <svg
          className="pagination-btn-arrow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </nav>
  )
}

export default Pagination