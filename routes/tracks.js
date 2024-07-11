const express = require("express")
const router = express.Router();
const {getItems, getItem, createItem} = require("../controllers/tracks")
//TODO http://localhost/tracks GET,POST,DELETE, PUT
const {validatorCreateItem} = require("../validators/tracks")


router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", validatorCreateItem, createItem)


module.exports = router