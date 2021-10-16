import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';

const Details = () => {
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState(1);
    const data = useAuth();
    const { itemId } = useParams();

    useEffect(() => {
        const found = data.find(item => item.id === parseInt(itemId));
        setItem(found);
    }, [data, itemId])

    const handleQuantityDown = () => {
        if (quantity) {
            setQuantity(quantity - 1);
        }
    }
    const handleQuantityUp = () => {
        setQuantity(quantity + 1);
    }

    return (
        <div className={"container"}>
            <div className="d-flex">
                <div className='w-50'>
                    <h1>{item?.name}</h1>
                    <p>{item?.detail}</p>
                    <div className="d-flex align-items-center">
                        <h1 className='me-3 mb-0'>${item?.price}</h1>
                        <div className="bg-white border px-2 rounded-pill quantity-field">
                            <button className="px-2" onClick={handleQuantityDown}>-</button>
                            <h4 className="px-3 mb-0">{quantity}</h4>
                            <button className="px-2" onClick={handleQuantityUp}>+</button>
                        </div>
                    </div>
                    <div>

                        <button className="search-btn text-white rounded-pill px-4 py-2"><i className="fas pe-2 fa-shopping-cart"></i> Add</button>
                    </div>

                </div>
                <div className='w-50'>
                    <img src={item?.img} className="img-fluid" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Details;