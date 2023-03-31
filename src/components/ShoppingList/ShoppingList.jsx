import {useState, useEffect } from 'react';
import axios from 'axios';
import AddItem from '../AddItem/AddItem';
import DeleteButton from '../DeleteItem/DeleteItem.jsx';
import PurchasedItem from '../PurchasedItem/PurchasedItem';


function ShoppingList () {
    const [shoppingList, setShoppingList] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState('purple')


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

 

    return (
        <>
            <h1>Shopping List</h1> 

            <AddItem 
            fetchAddItem={fetchAddItem}
            />  

            <ul>   
                    {shoppingList.map((item) => (
                        // what we want to render
                        <li style={{backgroundColor: backgroundColor}}
                            
                            key={item.id}>
                            Name: {item.name} <br />
                            Quantity: {item.quantity}  <br />
                            Unit: {item.unit} <br />
                            Purchased:{item.purchased} <br />
                            
                            <DeleteButton 
                                fetchAddItem={fetchAddItem}
                                itemId={item.id}         
                            />   
                            <PurchasedItem 
                                item={item}  
                                fetchAddItem={fetchAddItem}
                                setBackgroundColor={setBackgroundColor}
                            />


                        </li>
                        
                    ))
                }
            </ul>
        </>
            
    );

};

export default ShoppingList;




                            {/* <button onClick={(e) =>DeleteItem(e)}>Delete</button> */}

                            // style={{backgroundColor: changeColor()}} 
                            // className='changeColor'