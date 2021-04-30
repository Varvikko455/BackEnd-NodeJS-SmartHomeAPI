const express = require('express');
const router = express.Router();
const { db, update } = require('../db');


//Turn on light based on name
router.get('/:name/on', ( req, res ) => {

    db
    .get('devices')
    .find({ name : `${req.params.name}` })
    .assign({ on : true })
    .value();

    update();
    res.send(`${ req.params.name } light is on`);
    res.end()
})

//Choosing brightness on light
router.get('/:name/on/:brightness', ( req, res ) => {

    db
    .get('devices')
    .find({ name : `${req.params.name}` })
    .assign({ on : true, brightness : req.params.brightness })
    .value();

    update();
    res.send(`${ req.params.name } light is on`);
    res.end()
})

//Turn off light
router.get('/:name/off', ( req, res ) => {

    db
    .get('devices')
    .find({ name : `${req.params.name}` })
    .assign({ on : false })
    .value();

    update();
    res.send(`${ req.params.name } light is off`);
    res.end()
})

module.exports = router;