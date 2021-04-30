const express = require('express');
const router = express.Router();
const { db, update } = require('../db')


//Turn on device with ID
router.get('/:id/on', ( req, res ) => {

    db
    .get('devices')
    .find({ id : `${req.params.id}` })
    .assign({ on : true })
    .value();

    update();
    res.send(`${ req.params.id } is on`);
    res.end()
})


//Turn off device with ID
router.get('/:id/off', ( req, res ) => {

    db
    .get('devices')
    .find({ id : `${req.params.id}` })
    .assign({ on : false })
    .value();

    update();
    res.send(`${ req.params.id } is off`);    
})

module.exports = router;