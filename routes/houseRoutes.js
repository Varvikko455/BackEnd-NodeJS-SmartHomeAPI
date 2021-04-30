const express = require('express');
const router = express.Router();
const { db, update } = require('../db')

router.get('/:id/on', ( req, res ) => {

    db
    .get('devices')
    .find({ id : `${req.params.id}` })
    .assign({ on : true })
    .value();

    update();
    res.send(`${ req.params.id } is on`);
})

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