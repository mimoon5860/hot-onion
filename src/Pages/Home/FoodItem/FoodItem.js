import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Cart from '../../Cart/Cart';
import ItemSection from './ItemSection/ItemSection';
import useAuth from '../../../Hooks/useAuth/useAuth';

const FoodItem = () => {
    const data = useAuth();
    const [currentItems, setCurrentItems] = useState([]);
    const [addedItems, setAddedItems] = useState([])

    const handleCart = (props) => {
        const addedItem = data.find(item => item.id === props);
        const newItems = [addedItem, ...addedItems];
        setAddedItems(newItems)
    }

    const breakFast = () => {
        const breakfast = data.filter(item => item.section === "Breakfast");
        setCurrentItems(breakfast);
    }
    const lunch = () => {
        const lunch = data.filter(item => item.section === "Lunch");
        setCurrentItems(lunch);
    }
    const dinner = () => {
        const dinner = data.filter(item => item.section === "Dinner");
        setCurrentItems(dinner);
    }

    useEffect(() => {
        breakFast();
    }, [data])

    return (
        <div className='container'>
            <div className='text-center'>
                <Nav fill variant="tabs" defaultActiveKey={"active"}>
                    <Nav.Item>
                        <Nav.Link onClick={breakFast} eventKey="active" >Breakfast</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={lunch} eventKey="link-1">Lunch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={dinner} eventKey="link-2">Dinner</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className='all-items'>
                {currentItems.map(items => <ItemSection handleCart={handleCart} key={items.id} items={items} ></ItemSection>)}
            </div>

            {addedItems.length ? <div className="cart"> <Cart data={addedItems}>

            </Cart></div> : <div></div>}

        </div >
    );
};

export default FoodItem;