import React from 'react'

const ProductCard = ({ 
  image, 
  category, 
  title, 
  price, 
  originalPrice, 
  rating = 5, 
  reviewsCount = 0, 
  badge, 
  badgeText 
}) => {
  // Render rating stars (max 5)
  const renderStars = () => {
    const stars = []
    const filledStars = Math.round(rating)
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        stars.push(
          <svg key={i} className="star-icon filled" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        )
      } else {
        stars.push(
          <svg key={i} className="star-icon empty" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        )
      }
    }
    return stars
  }

  return (
    <article className="product-card">
      {badge && (
        <span className={`product-badge ${badge}`}>
          {badgeText || badge}
        </span>
      )}
      
      <div className="product-image-container">
        <img 
          src={image} 
          alt={title} 
          className="product-image" 
          loading="lazy"
        />
      </div>

      <div className="product-info-container">
        <span className="product-category">{category}</span>
        <h4 className="product-title">{title}</h4>
        
        <div className="product-rating">
          <div className="stars">{renderStars()}</div>
          <span className="product-reviews-count">({reviewsCount})</span>
        </div>

        <div className="product-footer-row">
          <div className="product-pricing">
            <span className="product-price-current">${price}</span>
            {originalPrice && (
              <span className="product-price-original">${originalPrice}</span>
            )}
          </div>

          <button 
            className="product-add-btn" 
            type="button" 
            title="Add to Cart"
          >
            <svg 
              className="product-add-btn-icon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard