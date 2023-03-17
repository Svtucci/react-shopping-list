const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


//GET/LIST
router.get('/', (req, res) => {

    console.log('GET Request hello');
    // Send back the list of quotes!
    let queryText = 'SELECT * FROM "shoppingList";';
    pool.query(queryText).then((result) => {

       //result.rows is the Array of data from our database
       console.log(result);
       res.send(result.rows);
    }).catch ((error) => {
        console.log(`Error in GET ${error}`); //need this otherwise we won't know what error is happening
        res.sendStatus(500); //tells client something went wrong
    });
});


// "name" 
// "quantity" //! These are our SQL values 
// "unit" 


// POST /LIST
router.post('/', (req, res) => {
    // console.log('POST REquest made for /');
    // console.log(req.body);
    let itemToAdd = req.body
    let queryText = `insert into "shoppingList" ("name", "quantity", "unit")
    values ($1, $2, $3);`;
   
    pool.query(queryText,[itemToAdd.name, itemToAdd.quantity, itemToAdd.unit] ).then ((result) => {
    res.sendStatus(201); 
 }).catch((error) => {
    console.log(`Error in POST ${error}`);
    res.sendStatus(500);
    })
})

// PUT /LIST/<id>
router.put('/:id', (req, res) => {
    console.log(`In PUT request`);
    let itemId = req.params.id;
    let itemToEdit = req.params.body;
    let queryText = 'UPDATE "shoppingList" SET "name" = $1, "quantity" = $2, "unit" = $3';
    pool.query(queryText, [itemToEdit.name, itemToEdit.quantity,itemToEdit.unit]).then ((result) =>{
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    });
});

// DELETE /LIST/<id>
router.delete( '/:id', (req, res) => {
    const deleteIndex = Number( req.params.id );
    let queryText = `DELETE FROM "shoppingList" WHERE "id" = $1`;
    pool.query(queryText, [deleteIndex]).then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log(`Error in DELETE ${error}`)
    res.sendStatus(500);
});
});
module.exports = router;
