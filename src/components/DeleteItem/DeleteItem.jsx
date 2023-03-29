import { useState } from 'react';
import axios from "axios";
import AddItem from '../AddItem/AddItem';

function DeleteButton ({itemId, fetchAddItem}) {
    
    const deleteItem = () => {
        axios.delete(`/shoppingList/${itemId}`).then((response) => {
            //update the DB
            console.log('DELETE ITEM')
        }).catch((error) => {
            console.log(`Error in DELETE ${error}`);
            alert('Something wrong in GET');
        });
        fetchAddItem(); 
    }

    // REFRESH THE LIST 


    return (
            
            <button onClick={() => deleteItem(itemId)}>Delete</button>   // () =>  works...if we delete these it wipes the DB
            
    );
}


export default DeleteButton; 




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


// {/* <ul>
//                 {
//                     shoppingList.map((item) => (
//                         // what we want to render
//                         <li key={item.id}>
//                             Name: {item.name} <br />
//                             Quantity: {item.quantity}  <br />
//                             Unit: {item.unit} <br />
//                             <button onClick={(e) => DeleteItem(e)}>Delete</button>
//                             <p></p>
//                         </li>
                        
//                     ))
//                 }
// </ul> */}