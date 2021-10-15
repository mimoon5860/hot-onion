import React from 'react';

const ItemSection = ({ items, handleCart }) => {
    const { name, price, img, detail, id } = items;
    return (
        <div className='text-center p-2 border'>
            <img width='250' src={img} alt="" />
            <h4>{name}</h4>
            <p>{detail}</p>
            <h2>{price}</h2>
            <button onClick={() => handleCart(id)}>Add to Cart</button>
        </div>
    );
};

export default ItemSection;