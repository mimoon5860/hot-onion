import React from 'react';

const Cart = ({ data }) => {


    return (
        <div>
            <div>
                <h3>This is Cart</h3>
                {data.map(item => <Item item={item}></Item>)}
            </div>
        </div>
    );
};


const Item = props => {
    const { name } = props.item
    return (
        <li>{name}</li>
    )
}
export default Cart;