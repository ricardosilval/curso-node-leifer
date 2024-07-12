const express = require("express")
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks")
//TODO http://localhost/tracks GET,POST,DELETE, PUT
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")


/**
 * Lista los items
 */
router.get("/", getItems)

/**
 * Obtener detalle de item
 */
router.get("/:id", validatorGetItem, getItem); // router.get("/:id/:var1/:var2", getItem)


/**
 * Crear un registro
 */
router.post("/", validatorCreateItem, createItem); //Ruta, middleware,Controller
/**
 * Actualizar detalle de item
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem); // router.get("/:id/:var1/:var2", getItem)

router.delete("/:id", validatorGetItem, deleteItem)

module.exports = router