import React from 'react';
import { useSelector } from 'react-redux';
import { deleteCustomer } from './slices/customerSlice';
import { useDispatch } from 'react-redux';

const CustomerView = () => {
    const customers = useSelector((state)=> state.customers);
    const cars = useSelector((state)=> state.cars);
    const dispatch = useDispatch();

    const deleteHandler = (index) => {
        dispatch(deleteCustomer(index));
    }

    return (
        <div>
            <h1>Customer List</h1>
            <ul style={{ listStyle: 'none' }}>
                {customers.map((customer, index) => (
                    <li key={index}>{customer} <button onClick={()=>deleteHandler(index)}>Delete</button></li>
                ))}
            </ul>
            <ul style={{ listStyle: 'none' }}>
                {cars.map((car, index) => (
                    <li key={index}>{car} <button onClick={()=>deleteHandler(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerView;
