const express = require('express');
const router = express.Router();
const { db, update } = require('../db');

router.get('/:name/on', ( req, res ) => {

    db
    .get('devices')
    .find({ id : "VAC1", name : req.params.name })
    .assign({ on : true })
    .value();

    update();
    res.send('Vacuum is cleaning');
    res.end()
});

router.get('/:name/off', ( req, res ) => {

    db
    .get('devices')
    .find({ id : "VAC1", name : req.params.name })
    .assign({ on : false })
    .value();

    update();
    res.send('Vacuum is off');
    res.end()
});

module.exports = router;