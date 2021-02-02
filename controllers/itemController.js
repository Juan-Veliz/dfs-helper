
const express = require('express');
const Item = require('../models/item');
// const ItemCategory = require('../models/itemCategory');
const ItemController = express.Router();

ItemController.route('/')
    .get(async( req, res )=>{
        try{

            params = req.query;
            perPage = Number (params['per-page']) || 20;
            page = (Number (params.page)-1)*perPage || 0;

            const model = await Item.findAll({
                limit: perPage,
                offset: page,
                include:[
                    // { model: ItemCategory, required: true}
                ]
            });
            res.send(model);
        }
        catch( e ){
            console.log(e.message);
            res.send(e.message);
        }
    })
    .post(async(req, res)=>{
        try{
            const model = new Item(req.body);
            model.save();
            res.send(model);
        }
        catch(e){
            console.log(e.message);
            res.send(e.message);
        }
    })

ItemController.route('/:id')
    .get(async( req, res )=>{
        try{    
            const model = await Item.findByPk(req.params.id);
            res.send(model);
        }
        catch( e ){
            console.log(e.message);
            res.send(e.message);
        }
    })
    .put(async(req, res)=>{
        try{
            const model = req.body;
            const item = await Item.findByPk(req.params.id);
            item.set(model);
            item.save();
            res.send(item);
        }
        catch(e){
            console.log(e.message);
            res.send(e.message);
        }
    })
    .delete(async(req, res)=>{
        try{

        }
        catch(e){
            console.log(e.message);
            res.send(e.message);
        }
    })
module.exports = ItemController;
