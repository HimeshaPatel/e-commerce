import React from 'react'
import ProductCard from './ProductCard'


const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, id) => {
        return (
          <ProductCard key={product.id} {...product} />
        )
      })}
    </div>
  )
}

export default ProductList