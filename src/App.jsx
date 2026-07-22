import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import ProductList from './components/ProductList'
import Pagination from './components/Pagination'
import './components/ecommerce.css'
import { useState } from 'react'
import mockProducts from "./data/products"


function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(mockProducts)

  return (
    <>
      <header className="shop-header">
        <div className="shop-logo">
          NEXUS<span>SHOP</span>
        </div>

        <div className="shop-cart-indicator" title="Shopping Cart">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="shop-cart-badge">3</span>
        </div>
      </header>

      <main className="shop-container">
        <Filters />

        <section className="shop-content">
          <SearchBar search={search} setSearch={setSearch} />
          <ProductList products={products} />
          <Pagination />
        </section>
      </main>

      <footer className="shop-footer">
        <p>&copy; {new Date().getFullYear()} NEXUS SHOP. All rights reserved. Designed with Premium Custom CSS.</p>
      </footer>
    </>
  )
}

export default App
