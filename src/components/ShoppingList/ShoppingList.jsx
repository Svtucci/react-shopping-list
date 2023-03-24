import {useState, useEffect } from 'react';
import axios from 'axios';
import AddItem from '../AddItem/AddItem';
import DeleteItem from '../DeleteItem/DeleteItem.jsx';


function ShoppingList () {
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
        }, []);

    return (
        <>
            <h1>Shopping List</h1> 
            <ul>
                {
                    shoppingList.map((item) => (
                        // what we want to render
                        <li key={item.id}>
                            Name: {item.name} <br />
                            Quantity: {item.quantity}  <br />
                            Unit: {item.unit} <br />
                            <AddItem 
                                itemId={item.id}
                                itemName ={itemName}
                                setItemName = {setItemName}
                                itemQuantity = {itemQuantity}
                                setItemQuantity= {setItemQuantity}
                                itemUnit= {itemUnit}
                                fetchAddItem= {fetchAddItem}
                                shoppingList= {shoppingList}
                            />
                            <DeleteItem 
                                itemId={item.id}
                                itemName ={itemName}
                                setItemName = {setItemName}
                                itemQuantity = {itemQuantity}
                                setItemQuantity= {setItemQuantity}
                                itemUnit= {setItemUnit}
                                fetchAddItem= {fetchAddItem}
                            />
                            <button onClick={(e) => DeleteItem(e)}>Delete</button>
                            <p></p>
                        </li>
                        
                    ))
                }
            </ul>
            
            
        </>

    );

};

export default ShoppingList;