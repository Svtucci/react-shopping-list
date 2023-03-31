import {useState, useEffect } from 'react';
import axios from 'axios';
import AddItem from '../AddItem/AddItem';
import DeleteButton from '../DeleteItem/DeleteItem.jsx';


function ShoppingList () {
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

    let itemPurchased;
    if (item.purchased === true) {
        itemPurchased = "Yes"
    } else if (item.purchased=== false) {
         itemPurchased= "No"
    }; 

    const changeColor = () => {
    if (item.purchased === "Yes") {
        return 'green'
    } else {
        return 'none'
    };
        let toggle
        if (item.purchased=== true) {
         toggle= 'no'

    } else if (item.purchased=== false){
        toggle= 'yes'
    }
    }

    return (
        <>
            <h1>Shopping List</h1> 

            <AddItem 
            fetchAddItem={fetchAddItem}
            />  

            <ul>   
                    {shoppingList.map((item) => (
                        // what we want to render
                        <li 
                            style={{backgroundColor: changeColor()}} 
                            className='changeColor'
                            key={item.id}>
                            Name: {item.name} <br />
                            Quantity: {item.quantity}  <br />
                            Unit: {item.unit} <br />
                            Purchased:{item.purchased} <br />
                            
                            <DeleteButton 
                                fetchAddItem={fetchAddItem}
                                itemId={item.id}         
                            />   
                            


                        </li>
                        
                    ))
                }
            </ul>
        </>
            
    );

};

export default ShoppingList;


{/* <li style={{backgroundColor: changeColor()}} className='changeColor'>
                        <p>{item.name}
                        {item.quantity}
                        {item.unit}
                         {toggle}</p>
           </li>                  */}

                            {/* <button onClick={(e) =>DeleteItem(e)}>Delete</button> */}