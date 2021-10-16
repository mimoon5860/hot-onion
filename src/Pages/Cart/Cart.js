import React from 'react';

const Cart = ({ data }) => {


    return (
        <div>
            <div>
                <h3>This is Cart</h3>
                <h4>Total Item: {data.length}</h4>
                {data.map(item => <Item item={item}></Item>)}
                <button>Order Now</button>
            </div>
        </div>
    );
};


const Item = props => {
    const { name, price } = props.item
    return (
        <li>{name} : ${price}</li>
    )
}
export default Cart;