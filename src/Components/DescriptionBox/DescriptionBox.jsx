import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox' >
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online plaform that facilitates.....</p>
                <p>
                    E-commerce websites typically display products or services in a user-friendly manner, allowing customers to browse through categories, search for specific items, and view detailed product descriptions, images, and prices (e.g., size, colors). They often include features such as shopping carts, secure payment gateways, and order tracking to enhance the shopping experience.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox