
const express = require('express');
const ItemCategory = require('../models/itemCategory');
const ItemCategoryController = express.Router();

ItemCategoryController.route('/')
    .get(async( req, res )=>{
        try{

            params = req.query;
            perPage = Number (params['per-page']) || 20;
            page = (Number (params.page)-1)*perPage || 0;

            const model = await ItemCategory.findAll({
                limit: perPage,
                offset: page
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
            const model = new ItemCategory(req.body);
            model.save();
            res.send(model);
        }
        catch(e){
            console.log(e.message);
            res.send(e.message);
        }
    })

ItemCategoryController.route('/:id')
    .get(async( req, res )=>{
        try{    
            const model = await ItemCategory.findByPk(req.params.id);
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
            const itemCategory = await ItemCategory.findByPk(req.params.id);
            itemCategory.set(model);
            itemCategory.save();
            res.send(itemCategory);
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
module.exports = ItemCategoryController;
