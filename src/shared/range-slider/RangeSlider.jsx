import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = () => {
    const [price, setPrice] = useState([10, 50]);

    function handlePriceChange(value) {
        setPrice(value);
    }

    return (
        <div>
            <h3>Price range</h3>
            <Slider
                range
                min={0}
                max={100}
                defaultValue={price}
                onChange={handlePriceChange}
            />
            <div>
                Min price: {price[0]} Max price: {price[1]}
            </div>
        </div>
    );
}

export default RangeSlider
