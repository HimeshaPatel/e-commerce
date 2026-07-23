import React from 'react'

const Filters = ({ category, setCategory }) => {
  return (
    <aside className="filters-sidebar">
      {/* Category Section */}
      <div>
        <h3 className="filter-section-title">Categories</h3>
        <div className="filter-category-list">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Products</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Wearables">Wearables</option>
            <option value="Gear">Gear</option>
          </select>
        </div>
      </div>

      <div className="filter-divider" />

      {/* Price Range Section */}
      <div className="price-range-wrapper">
        <h3 className="filter-section-title">Price Range</h3>
        <select>
          <option value="" disabled selected>Select Price Range</option>
          <option value="0-50">Low - High</option>
          <option value="50-100">High - Low</option>


        </select>
      </div>
    </aside>
  )
}

export default Filters