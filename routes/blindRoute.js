const express = require('express');
const router = express.Router();
const { db, update } = require('../db');

router.get('/:name/on', ( req, res ) => {

    db
    .get('devices')
    .find({ id : "BLI1", name : req.params.name })
    .assign({ on : true })
    .value();

    update();
    res.send('Blinds are down');
    res.end()
});

router.get('/:name/off', ( req, res ) => {

    db
    .get('devices')
    .find({ id : "BLI1", name : req.params.name })
    .assign({ on : false })
    .value();

    update();
    res.send('Blinds are up');
    res.end()
});

module.exports = router;