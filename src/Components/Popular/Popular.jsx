import React from 'react';
import './Popular.css';
import Item from '../Item/Item';
import data_product from '../Assets/data';

// Popular component displays a list of Item components using data_product
const Popular = () => {
    return (
        <div className="popular">
            <h1>Popular in Women</h1>
            <hr />
            <div className="popular-items">
                {data_product.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        image={item.image}   // <-- fixed here!
                        name={item.name}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Popular;