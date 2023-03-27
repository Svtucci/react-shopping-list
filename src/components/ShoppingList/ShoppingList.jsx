import {useState, useEffect } from 'react';
import axios from 'axios';
import AddItem from '../AddItem/AddItem';
import DeleteItem from '../DeleteItem/DeleteItem.jsx';


function ShoppingList () {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemUnit, setItemUnit] = useState('');
    const [shoppingList, setShoppingList] = useState([]);

    //GET
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

    //  DELETE
    const itemDelete = (id) => {
        axios.delete(`/shoppingList/${id}`).then((response) => {
            fetchAddItem();
        }).catch((error) => {
            console.log(`Error in DELETE ${error}`);
            alert('Something wrong in DELETE');
        })
    }

    
    // const submitForm = (e) => {
    //         e.preventDefault();
    //         axios.post('/shoppingList', {
    //             name: itemName,
    //             quantity: itemQuantity,
    //             unit: itemUnit ,
    //         }).then((response) => {
    //             //clear input fields
    //             setItemName('');
    //             setItemQuantity('');
    //             setItemUnit('');
    //             fetchAddItem();
    //         }).catch((error) => {
    //             console.log(`Error in POST`)
    //             alert('Something is wrong in POST');
    //         })
    //     }

    return (
        <>
            <h1>Shopping List</h1> 
            <ul>
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
                
                    {shoppingList.map((item) => (
                        // what we want to render
                        <li key={item.id}>
                            Name: {item.name} <br />
                            Quantity: {item.quantity}  <br />
                            Unit: {item.unit} <br />
                            
                        
                            <DeleteItem 
                                itemId={item.id}
                                fetchAddItem= {fetchAddItem}
                                itemDelete={itemDelete}
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