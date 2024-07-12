const handleHttpError = (res, message ="Algo sucedio", code = 403) =>{

    /**
     * Aquí se puede integrar con otros sistemas para notificar errores
     */
    res.status(code)
    res.send({error:message})

}

module.exports = {handleHttpError}