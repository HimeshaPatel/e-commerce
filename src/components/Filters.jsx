import React from 'react'

const Filters = ({ category, setCategory, sortBy, setSortBy }) => {
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
        <h3 className="filter-section-title">Sort by</h3>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Default Sort</option>
          <option value="high-low">High - Low</option>
          <option value="low-high">Low - High</option>
          <option value="a-z">A - Z</option>
          <option value="z-a">Z - A</option>
        </select>
      </div>
    </aside>
  )
}

export default Filters