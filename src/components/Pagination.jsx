import React from 'react'

const Pagination = () => {
  return (
    <nav className="pagination-container" aria-label="Pagination Navigation">
      <button 
        className="pagination-btn" 
        type="button" 
        aria-label="Previous page"
        disabled
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

      <button className="pagination-btn active" type="button" aria-current="page">1</button>
      <button className="pagination-btn" type="button">2</button>
      <button className="pagination-btn" type="button">3</button>

      <button 
        className="pagination-btn" 
        type="button" 
        aria-label="Next page"
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