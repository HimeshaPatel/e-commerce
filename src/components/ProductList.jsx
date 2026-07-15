import React from 'react'
import ProductCard from './ProductCard'

const mockProducts = [
  {
    id: 1,
    title: 'Apex Pro Keyboard',
    category: 'Electronics',
    price: 189,
    originalPrice: 229,
    image: '/products/keyboard.png',
    rating: 5,
    reviewsCount: 142,
    badge: 'discount',
    badgeText: 'Save 17%'
  },
  {
    id: 2,
    title: 'Studio ANC Headphones',
    category: 'Accessories',
    price: 299,
    image: '/products/headphones.png',
    rating: 5,
    reviewsCount: 88,
    badge: 'new',
    badgeText: 'New'
  },
  {
    id: 3,
    title: 'Chronos Smart Watch',
    category: 'Wearables',
    price: 199,
    originalPrice: 249,
    image: '/products/watch.png',
    rating: 4,
    reviewsCount: 74,
    badge: 'discount',
    badgeText: 'Save $50'
  },
  {
    id: 4,
    title: 'Urban Leather Backpack',
    category: 'Gear',
    price: 145,
    image: '/products/backpack.png',
    rating: 5,
    reviewsCount: 56
  },
  {
    id: 5,
    title: 'Apex Lite Keyboard',
    category: 'Electronics',
    price: 120,
    originalPrice: 150,
    image: '/products/keyboard.png',
    rating: 4,
    reviewsCount: 39
  },
  {
    id: 6,
    title: 'Studio Wireless Buds',
    category: 'Accessories',
    price: 89,
    originalPrice: 109,
    image: '/products/headphones.png',
    rating: 4,
    reviewsCount: 112,
    badge: 'discount',
    badgeText: 'Popular'
  }
]

const ProductList = () => {
  return (
    <div className="product-grid">
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          originalPrice={product.originalPrice}
          image={product.image}
          rating={product.rating}
          reviewsCount={product.reviewsCount}
          badge={product.badge}
          badgeText={product.badgeText}
        />
      ))}
    </div>
  )
}

export default ProductList