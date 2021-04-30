const express = require('express');
const router = express.Router();
const { db, update } = require('../db');

router.get('/:name/on', ( req, res ) => {

    db
    .get('devices')
    .find({ id : "LOC1", name : req.params.name })
    .assign({ locked : true })
    .value();

    update();
    res.send('Door is unlocked');
    res.end()
});

router.get('/:name/off', ( req, res ) => {

    db
    .get('devices')
    .find({ id : "LOC1", name : req.params.name })
    .assign({ locked : false })
    .value();

    update();
    res.send('Door is locked');
    res.end()
});

module.exports = router;