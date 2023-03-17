import { useState } from 'react';
import axios from "axios";

const DeleteItem = () => {
    axios.delete('/shoppingList').then((response) => {
        //update the array
        setShoppingList(response.data);
    }).catch((error) => {
        console.log(`Error in DELETE ${error}`);
        alert('Something wrong in GET');
    });
}


export default DeleteItem ;