const {storageModel} = require('../models');

const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * 
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res) => {

    //Esto devuelve una promesa
    const data = await storageModel.find({})

    res.send(data)  

};
/**
 * Obtener detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req,res) => {

};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async(req,res) => {
const {body, file} = req
    console.log(file)
    const fileData= {
        filename : file.filename,
        url:`${PUBLIC_URL}/${file.filename}`

    }

  const data = await storageModel.create(fileData)
    res.send({data})
}
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req,res) => {

}
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req,res) => {

}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};