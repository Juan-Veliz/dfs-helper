
const express = require('express');
const Item = require('../models/item');
const ItemCategory = require('../models/itemCategory');
const ItemClass = require('../models/itemClass');
const ItemDamage = require('../models/itemDamage');
const ItemRecipe = require('../models/itemRecipe');
const ItemController = express.Router();
require('../models/relationShips')

let include = [];
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
            filters = params.filter;
            perPage = (Number(params['per-page'])) || (Number(params['perPage'])) || 20;
            order = params['orderBy'] || 'id';
            page = (Number(params.page) - 1) * perPage || 0;
            if (params.expand) {
                expands = params.expand.split(',') || [];
                extraFields(expands);
            }

            // console.log(include)

            /*
            **  obtener informacion
            */
           console.log(`ecludes : ${include}`)
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
            params = req.query;
            if (params.expand) {
                expands = params.expand.split(',') || [];
                extraFields(expands);
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
    if( array.includes('clase')){
        include.push({
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
            include.push({
                model: ItemCategory,
                required: true,
                as: 'category',
                all:true
            });
        }
    }
    if(array.includes('damage')){
        include.push({
            model:ItemDamage,
            required:false,
            // all:true
        })
    }
    console.log(array.includes('recipe'))
    // if( array.includes('recipe')){
    //     console.log("ho")
    //     include.push({
    //         model: ItemRecipe,
    //         required: false,
    //         as:'recipe',
    //         all:true
    //     })
    // }
}

module.exports = ItemController;
