const mongoose = require("mongoose")

const StoreScheme = new mongoose.Schema(
    {
        url: {
            type:String
        },
        filename: {
            type:String
        },
    },
    {
        timestamps:true, //TODO createdAt, updatedAt
        versionKey:false
    }
)

module.exports = mongoose.model("storages", StoreScheme) //"users" es el nombre de la colección del model


