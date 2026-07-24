import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import ProductList from './components/ProductList'
import Pagination from './components/Pagination'
import './components/ecommerce.css'
import { useState, useEffect } from 'react'
import mockProducts from "./data/products"

const PRODUCTS_PER_PAGE = 3;


function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(mockProducts);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("")
  const [currentPage, setCurrentPage] = useState(0);

  // Reset to page 1 (index 0) whenever search, category, or sortBy changes
  useEffect(() => {
    setCurrentPage(0);
  }, [search, category, sortBy]);

  const searchValue = search.trim().toLowerCase();
  const searchCategoryValue = category.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchSearchTerm =
      product.title.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue);
    const matchCategory =
      category === "All" || product.category.toLowerCase() === searchCategoryValue;
    return matchSearchTerm && matchCategory;
  });

  const sortProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "low-high") {
      return a.price - b.price;
    }

    if (sortBy === "high-low") {
      return b.price - a.price;
    }

    if (sortBy === "a-z") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "z-a") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  const totalProducts = sortProducts.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const start = currentPage * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;

  const paginationProducts = sortProducts.slice(start, end);



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
        <Filters category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy} />

        <section className="shop-content">
          <SearchBar search={search} setSearch={setSearch} />
          <ProductList products={paginationProducts} />
          <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </section>
      </main>

      <footer className="shop-footer">
        <p>&copy; {new Date().getFullYear()} NEXUS SHOP. All rights reserved. Designed with Premium Custom CSS.</p>
      </footer>
    </>
  )
}

export default App
