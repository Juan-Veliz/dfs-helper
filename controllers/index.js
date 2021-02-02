
const express = require('express');
const ItemController = require('./itemController');
const ItemCategoryController = require('./itemCategoryController');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Ok!!")
})

router.use('/item', (req, resp, next)=>{
    next();
    // console.log("paso por aca")
},ItemController);

router.use('/itemcategory', (req, resp, next)=>{
    next();
},ItemCategoryController);


module.exports = router;