
const express = require('express');
const Item = require('../models/item');
const ItemCategory = require('../models/itemCategory');
const ItemClass = require('../models/itemClass')
const ItemCategoryController = express.Router();
// require('../models/relationShips')

/*
**  GET, POST on item/
*/
ItemCategoryController.route('/')
    .get(async( req, res )=>{
        try{
            /*
            ** resolver request
            */
            params = req.query;
            let include = [];
            filters = params.filter;
            perPage = (Number (params['per-page'])) || (Number (params['perPage'])) || 20;
            page = (Number (params.page)-1)*perPage || 0;
            if(params.expand){
                expands = params.expand.split(',') || [];
                extraFields(expands, include);
            }


            /*
            **  obtener informacion
            */
            const model = await ItemCategory.findAll({
                limit: perPage,
                offset: page,
                include:include,
                where:filters
            })
            /*
            ** enviar respuesta
            */
            res.send(model);
        }
        catch( e ){
            /*
            **  enviar error
            */
            console.log(e.message);
            res.send(e.message);
        }
    })
    .post(async(req, res)=>{
        try{
            const model = new Item(req.body);
            await model.save();
            res.send(model);
        }
        catch(e){
            /*
            **  enviar error
            */
            console.log(e.message);
            res.send(e.message);
        }
    });
    
/*
** List all Categories
*/

    ItemCategoryController.route('/list')
    .get( async (req, res)=>{
        try{
            const model = await ItemCategory.findAll();
            console.log(model)
            res.send(model);
        }
        catch(e){
            console.log(e.message);
            res.send(e.message);
        }
    })


/*
**  VIEW, UPDATE, DELETE on item/:id
*/
ItemCategoryController.route('/:id')
    .get(async( req, res )=>{
        try{
            /*
            **  resolver request
            */
            params = req.query;
            let include = [];
            if(params.expand){
                expands = params.expand.split(',') || [];
                extraFields(expands, include);
            }

            /*
            **  obtener informacion
            */
            const model = await ItemCategory.findByPk(req.params.id,{
                include:include
            });
            res.send(model);
        }
        catch( e ){
            /*
            **  enviar error
            */
            console.log(e.message);
            res.send(e.message);
        }
    })
    .put(async(req, res)=>{
        try{
            const model = req.body;
            /*
            **  obtener informacion
            */
            const item = await ItemCategory.findByPk(req.params.id);
            /*
            **  actualizar objeto
            */
            item.set(model);
            await item.save();
            /*
            **  enviar objeto actualizado
            */
            res.send(item);
        }
        catch(e){
            /*
            **  enviar error
            */
            console.log(e.message);
            res.send(e.message);
        }
    })
    .delete(async(req, res)=>{
        try{
            /*
            **  borrado logico de objeto
            */

        }
        catch(e){
            /*
            **  enviar error
            */
            console.log(e.message);
            res.send(e.message);
        }
    });

/*
**  Joins
*/
function extraFields(array, include){
    if(array.includes('item')){
        console.log("entro!!")
        include.push({ 
            model: Item,
            required: true,
            as: 'items',
            all:true
        });
    }
    // if(array.includes('clase')){
    //     include.push({ 
    //         model: ItemClass, 
    //         required: false,
    //         as:'class'
    //     });
    // }
}
    
module.exports = ItemCategoryController;
