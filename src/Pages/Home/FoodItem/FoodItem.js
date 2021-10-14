import React, { useEffect, useState } from 'react';

const FoodItem = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div>
            <h4>data</h4>
        </div>
    );
};

export default FoodItem;