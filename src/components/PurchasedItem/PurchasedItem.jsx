import {useState, useEffect} from 'react';
import axios from 'axios';
import AddItem from '../AddItem/AddItem.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';

function PurchasedItem ({item, fetchAddItem, setBackgroundColor}) {
    const[purchased, setItemPurchased]= useState('No')

    console.log(item)
    
    //     WE NEED TO SEE IF THIS LOGIC IS CONFLICTING WITH ROUTER LOGIC 
    //    
    let itemPurchased;
    if (item.purchased === true) {
        itemPurchased = "Yes"
        setBackgroundColor('green')
    } else if (item.purchased === false) {
         itemPurchased= "No"
         setBackgroundColor('blue')

    }; 

    const changeColor = (item) => {
    console.log(item.id)
    axios.put(`/shoppingList/${item.id}`, item).then((response) => {
        // setItemPurchased(false);
        fetchAddItem();
    }).catch((error) => {
        console.log(`Error in PUT on PurchasedItem ${error}`);
        alert ('Something is wrong on PurchasedItem');
    })
    } // End changeColor function


    let toggle
    if (itemPurchased=== true) {
     toggle= 'no'

    } else if (item.purchased=== false){
    toggle= 'yes'
    }


return(
         <>
        <button onClick = {() => changeColor(item)}> Purchased: </button>
         </>
    
)
}; 


export default PurchasedItem;




{/* <li style={{backgroundColor: changeColor()}} className='changeColor'>
                        <p>{item.name}
                        {item.quantity}
                        {item.unit}
                         {toggle}</p>
           </li>                  */}