import React from 'react'

const Filters = () => {
  return (
    <aside className="filters-sidebar">
      {/* Category Section */}
      <div>
        <h3 className="filter-section-title">Categories</h3>
        <div className="filter-category-list">
          <div className="filter-category-item active">
            <span>All Products</span>
            <span className="filter-category-count">12</span>
          </div>
          <div className="filter-category-item">
            <span>Electronics</span>
            <span className="filter-category-count">4</span>
          </div>
          <div className="filter-category-item">
            <span>Accessories</span>
            <span className="filter-category-count">3</span>
          </div>
          <div className="filter-category-item">
            <span>Wearables</span>
            <span className="filter-category-count">3</span>
          </div>
          <div className="filter-category-item">
            <span>Gear</span>
            <span className="filter-category-count">2</span>
          </div>
        </div>
      </div>

      <div className="filter-divider" />

      {/* Price Range Section */}
      <div className="price-range-wrapper">
        <h3 className="filter-section-title">Price Range</h3>
        <div className="price-range-values">
          <span>$0</span>
          <span>$500</span>
        </div>
        <input 
          type="range" 
          className="price-slider" 
          min="0" 
          max="500" 
          defaultValue="350"
        />
        <div style={{ fontSize: '13px', color: 'var(--text)', textAlign: 'right' }}>
          Max Price: <strong style={{ color: 'var(--text-h)' }}>$350</strong>
        </div>
      </div>

      <div className="filter-divider" />

      {/* Ratings Section */}
      <div>
        <h3 className="filter-section-title">Customer Rating</h3>
        <div>
          <label className="custom-checkbox-label">
            <input type="checkbox" defaultChecked />
            <span className="rating-item">
              <span className="stars">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="star-icon filled" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <svg className="star-icon empty" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </span>
              <span>& Up</span>
            </span>
          </label>
          <label className="custom-checkbox-label">
            <input type="checkbox" />
            <span className="rating-item">
              <span className="stars">
                {[...Array(3)].map((_, i) => (
                  <svg key={i} className="star-icon filled" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                {[...Array(2)].map((_, i) => (
                  <svg key={i} className="star-icon empty" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </span>
              <span>& Up</span>
            </span>
          </label>
        </div>
      </div>

      <div className="filter-divider" />

      {/* Availability Section */}
      <div>
        <h3 className="filter-section-title">Availability</h3>
        <label className="custom-checkbox-label">
          <input type="checkbox" defaultChecked />
          <span>In Stock Only</span>
        </label>
        <label className="custom-checkbox-label">
          <input type="checkbox" />
          <span>On Sale</span>
        </label>
      </div>
    </aside>
  )
}

export default Filters