
const express = require('express');
const Item = require('../models/item');
const ItemCategory = require('../models/itemCategory');
const ItemClass = require('../models/itemClass');
const ItemCooking = require('../models/itemCooking');
const ItemDamage = require('../models/itemDamage');
const ItemRecipe = require('../models/itemRecipe');
const ItemController = express.Router();
// require('../models/relationShips')


/*
**  GET, POST on item/
*/
ItemController.route('/')
    .get(async (req, res) => {
        try {
            /*
            ** resolver request
            */
            params = req.query;
            include = [];
            filters = params.filter;
            perPage = (Number(params['per-page'])) || (Number(params['perPage'])) || 20;
            order = params['orderBy'] || 'id';
            page = (Number(params.page) - 1) * perPage || 0;
            if (params.expand) {
                expands = params.expand.split(',') || [];
                // console.log(extraFields(expands))
                include = extraFields(expands);
                // res.send(include);
            }

            // console.log(include)

            /*
            **  obtener informacion
            */
        //    console.log(`ecludes : ${include}`)
            const model = await Item.findAll({
                limit: perPage,
                offset: page,
                order:[order],
                include,
                where: filters
            })

            

            /*
            ** enviar respuesta
            */
            res.send(model);
        }
        catch (e) {
            /*
            **  enviar error
            */
            console.log(e.message);
            res.send(e.message);
        }
    })
    .post(async (req, res) => {
        try {
            const model = new Item(req.body);
            await model.save();
            res.send(model);
        }
        catch (e) {
            /*
            **  enviar error
            */
            console.log(e.message);
            res.send(e.message);
        }
    });

/*
**  VIEW, UPDATE, DELETE on item/:id
*/
ItemController.route('/:id')
    .get(async (req, res) => {
        try {
            /*
            **  resolver request
            */
            include = [];
            params = req.query;
            if (params.expand) {
                expands = params.expand.split(',') || [];
                include = extraFields(expands);
            }


            /*
            **  obtener informacion
            */
            const model = await Item.findByPk(req.params.id, {
                include: include
            });
            res.send(model);
        }
        catch (e) {
            /*
            **  enviar error
            */
            console.log(e.message);
            res.send(e.message);
        }
    })
    .put(async (req, res) => {
        try {
            const model = req.body;
            /*
            **  obtener informacion
            */
            const item = await Item.findByPk(req.params.id);
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
        catch (e) {
            /*
            **  enviar error
            */
            console.log(e.message);
            res.send(e.message);
        }
    })
    .delete(async (req, res) => {
        try {
            /*
            **  borrado logico de objeto
            */

        }
        catch (e) {
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
function extraFields(array) {
    included = [];
    if( array.includes('clase')){
        included.push({
            model: ItemCategory,
            required: true,
            as: 'category',
            all:true,
            include: {
                model: ItemClass,
                required: false,
                as:'class'
            }
        });
    }
    else{
        if (array.includes('categoria')) {
            included.push({
                model: ItemCategory,
                required: false,
                as: 'category',
                separate:false,
                all:true
            });
        }
    }
    if(array.includes('damage')){
        included.push({
            model:ItemDamage,
            required:false,
            all:true,
            as:'damage'
        })
    }
    if( array.includes('recipe')){
        included.push({
            model: ItemRecipe,
            
            required: false,
            as:'recipe',
            all:true,
            include:{
                model:ItemCooking,
                required:false,
                all:true,
                as:'ingredents'
            }
        })
    }
    if( array.includes('recettes')){
        included.push({
            model: ItemCooking,
            required: false,
            as:'recettes',
            all:true,
            // include:{
            //     model:ItemCooking,
            //     required:false,
            //     all:true,
            //     as:'ingredents'
            // }
        })
    }
    // console.log(" test : ".included)
    return included;
    // console.log(include)
}

module.exports = ItemController;
