import React, { useState } from 'react';
import CustomerView from './CustomerView';
import { addCustomer as addCustomerAction } from './slices/customerSlice';
import { useDispatch } from 'react-redux';

const CustomerAdd = () => {
    // const [customer, setCustomer] = useState([]);
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addCustomer = () => {
        if (input) {
            // setCustomer((prev) => [...prev, input]);
            dispatch(addCustomerAction(input));
            setInput('');  // Clear the input after adding a customer
        }
    }

    return (
        <>
            <div>
                <h3>Add New Customer</h3>
                <input
                    type="text"
                    name="customer"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addCustomer}>Add</button>
            </div>
            {/* <CustomerView customers={customer} /> */}
        </>
    )
}

export default CustomerAdd;
