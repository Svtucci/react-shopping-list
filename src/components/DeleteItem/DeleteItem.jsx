import { useState } from 'react';
import axios from "axios";
import AddItem from '../AddItem/AddItem';

 

const DeleteItem = ({itemId, itemName, setItemName, itemQuantity, setItemQuantity, itemUnit, setItemUnit, fetchAddItem, shoppingList}) => {
   
    axios.delete(`/shoppingList/${itemId}`).then((response) => {
        //update the array
        fetchShoppingList();
    }).catch((error) => {
        console.log(`Error in DELETE ${error}`);
        alert('Something wrong in GET');
    });

    return (
        <ul>
                {
                    shoppingList.map((item) => (
                        // what we want to render
                        <li key={item.id}>
                            Name: {item.name} <br />
                            Quantity: {item.quantity}  <br />
                            Unit: {item.unit} <br />
                            <button onClick={(e) => DeleteItem(e)}>Delete</button>
                            <p></p>
                        </li>
                        
                    ))
                }
            </ul>
    )

}



export default DeleteItem ;


// const deleteItem = (e) => {
//     console.log('Hello');
//     console.log(`deleteItem ${shoppingList.id}`);
//     axios.delete(`/shoppingList/${shoppingList.id}`).then((response) => {
//         // fetchAddItem();
//     }).catch((error) => {
//         console.log(`Error in DELETE ${error}`);
//         alert('Something wrong in GET');
//     });
// }