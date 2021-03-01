const Item = require('../models/item');
const ItemCategory = require('../models/itemCategory');
const ItemClass = require('../models/itemClass');

let array = [
    {name:'item', class:Item }, 
    {name:'itemCategory', class:ItemCategory }, 
    {name:'itemClass', class:ItemClass }
];

const extraFields = (expands)=>{
    let expand = expands.split(',');
}

const makeIncludeField = (field)=>{
    return {
        // model:
    }
}