/**
 * 
 */
const multer = require("multer");

const storage = multer.diskStorage({
    destination : function(req,file,cb){ //cb = callback
        const pathStorage = `${__dirname}/../storage`
        
        cb(null, pathStorage)

    },
    filename : function(req,file,cb){
        //TODO: *.pdf, *.png, *.mp4
        const ext = file.originalname.split('.').pop() //["name", "png"], pop() retorna ultimo valor del array
        const filename = `file-${Date.now()}.${ext}`

        cb(null, filename)

    }
})

const uploadMiddleware =multer({storage})
/**
 * 
 */

module.exports = uploadMiddleware;