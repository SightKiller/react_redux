import React, { useState, useEffect } from 'react';
import { addCars as addCarsAction } from './slices/carSlice';
import { useDispatch } from 'react-redux';

const CarAdd = () => {
    const [input, setInput] = useState('');
    const [cars, setCars] = useState([]);
    const dispatch = useDispatch();

    const addCars = () => {
        if (input) {
            // setCars((prevCars) => [...prevCars, input]);
            dispatch(addCarsAction(input));
            setInput('');
        }
    };

    // useEffect(() => {
    //     console.log('Cars updated:', cars);
    // }, [cars]);

    return (
        <div>
            <h3>Car Add Page</h3>
            <input 
                type="text" 
                name="car" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={addCars}>Add Car</button>
        </div>
    );
};

export default CarAdd;
