import { useState, useEffect } from 'react';
import axios from 'axios';


function AddItem () {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemUnit, setItemUnit] = useState('');
    const [shoppingList, setShoppingList] = useState([]);

const fetchAddItem = () => {
    axios.get('/shoppingList').then((response) => {
        //update the array
        setShoppingList(response.data);
    }).catch((error) => {
        console.log(`Error in GET ${error}`);
        alert('Something wrong in GET');
    });
}
    useEffect(() => {
        fetchAddItem ();
    }, []); //Always need the empty array

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/shoppingList', {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit ,
        }).then((response) => {
            //clear input fields
            setItemName('');
            setItemQuantity('');
            setItemUnit('');
            fetchAddItem();
        }).catch((error) => {
            console.log(`Error in POST`)
            alert('Something is wrong in POST');
        })
    }

    return (
        <div>
            <h2>Add an Item</h2>
            <form onSubmit={submitForm}>
                Item:
                <input type="text"
                       value={itemName}
                       onChange={(e) => setItemName(e.target.value)}
                       /> 
                
                Quantity:
                <input type="number"
                        value={itemQuantity}
                        onChange={(e) => setItemQuantity(e.target.value)}
                />
        
                Unit:
                <input type="text"
                        value={itemUnit} 
                        onChange={(e) => setItemUnit(e.target.value)}
        
                />
             <input type="submit" />
            
            </form>
            <ul>
                {
                    shoppingList.map((item) => (
                        // what we want to render
                        <li key={item.id}>
                            Name: {item.name} Quantity: {item.quantity} Unit, {item.unit}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}


export default AddItem;