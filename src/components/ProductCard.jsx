import React from 'react'

const ProductCard = ({ title, category, image, price, rating, reviewsCount }) => {
    return (
        <article className="product-card" >
            <div className="product-image-container">
                <img src={image} alt={title} className="product-image" width="100%" />
            </div>
            <h3 className="product-title">{title}</h3>

            <p className="card-category">{category}</p>

            <p className="card-price">${price}</p>

            <p className="card-rating">{rating} stars ({reviewsCount} reviews)</p>
            <button type='button' className='product-add-btn'>Add to Cart</button>

        </article>
    )
}

export default ProductCard