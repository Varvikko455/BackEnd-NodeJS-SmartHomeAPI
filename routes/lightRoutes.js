const express = require('express');
const router = express.Router();
const { db, update } = require('../db');

router.get('/:name/on', ( req, res ) => {

    let devices = db.get('devices').value();
    let object = devices.find(({ name }) => name === req.params.name);
    
    object.on = true;
    res.send(`Light in ${ req.params.name } is on`)
    update();
    res.end();
})

router.get('/:name/off', ( req, res ) => {

    let devices = db.get('devices').value();
    let object = devices.find(({ name }) => name === req.params.name);
    
    object.on = false;
    res.send(`Light in ${ req.params.name } is off`)
    update();
    res.end();
})

module.exports = router;