const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');



/**
 * 
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

    try {
        //Esto devuelve una promesa
        const data = await tracksModel.find({})

        res.send(data)

    } catch (e) {

        handleHttpError(res, 'ERROR_GET_ITEMS')
    }

};
/**
 * Obtener detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);

        const { id } = req;
        const data = await tracksModel.findById(id)

        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEM')

    }
};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {

    try {
        const body = matchedData(req);//MatchedData Limpia la info del body
        const data = await tracksModel.create(body)
        res.send({ data })


    } catch (e) {

        handleHttpError(res, 'ERROR_CREATE_ITEM')
    }


}
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);//MatchedData Limpia la info del body
        const data = await tracksModel.findOneAndUpdate(
           {id, body} 
        )
        res.send({ data })

    } catch (e) {
        console.log(e)

        handleHttpError(res, 'ERROR_UPDATE_ITEM')
    }
}
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);

        const { id } = req;
        const data = await tracksModel.delete({_id:id})

        res.send({ data })
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'ERROR_DELETE_ITEM')

    }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };