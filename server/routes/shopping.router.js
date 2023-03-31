const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


//GET/LIST
router.get('/', (req, res) => {
    // Send back the list of quotes!
    let queryText = 'SELECT * FROM "shoppingList" ORDER BY "name" ASC';
    pool.query(queryText).then((result) => {
       //result.rows is the Array of data from our database
       res.send(result.rows);
    }).catch ((error) => {
        console.log(`Error in GET ${error}`); //need this otherwise we won't know what error is happening
        res.sendStatus(500); //tells client something went wrong
    });
});


// "name" 
// "quantity" //! These are our SQL values 
// "unit" 
// "purchased"


// POST /LIST
router.post('/', (req, res) => {
    // console.log('POST REquest made for /');
    // console.log(req.body);
    let itemToAdd = req.body
    console.log(req.body)
    let queryText = `INSERT INTO "shoppingList" ("name", "quantity", "unit", "purchased")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText,[itemToAdd.name, itemToAdd.quantity, itemToAdd.unit, itemToAdd.purchased]).then ((result) => {
    res.sendStatus(201); 
 }).catch((error) => {
    console.log(`Error in POST on ROUTER ${error}`);
    res.sendStatus(500);
    })
})

// PUT /LIST/<id>
router.put('/:id', (req, res) => {
    console.log(`In PUT request`);
    console.log(req.body)
    let taskUpdate = req.body
    let newcompletitionstatus;

    if (req.body.purchased === true) {
        newcompletitionstatus = false
    } else if (req.body.purchased === false) {
        newcompletitionstatus = true
    }
    let queryText = `UPDATE "shoppingList" SET "purchased" = $1 WHERE "id" = $2`
    pool.query(queryText, [newcompletitionstatus, taskUpdate.id]).then ((result) =>{
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



// router.put('/:id', (req, res) => {
//     console.log(`In PUT request`);
//     let itemId = req.params.id;
//     let itemToEdit = req.params.body;
//     console.log(itemToEdit)
//     let queryText = 'UPDATE "shoppingList" SET "name" = $1, "quantity" = $2, "unit" = $3 "purchased"= $4';
//     pool.query(queryText, [itemToEdit.name, itemToEdit.quantity, itemToEdit.unit, itemToAdd.purchased]).then ((result) =>{
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log(`Error in PUT ${error}`);
//         res.sendStatus(500);
//     });
// });
