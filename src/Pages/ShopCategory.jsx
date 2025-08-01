import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
    const { all_products } = useContext(ShopContext) // <-- FIXED HERE
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_products
                    ?.filter(item => item.category === props.category)
                    .map(item => (
                        <Item
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))}
            </div>
            <div className="shopcategory-loadmore">
                Explore more products
            </div>
        </div>
    )
}

export default ShopCategory