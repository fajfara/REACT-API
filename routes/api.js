const express = require ('express');
const router = express.Router();
const Programmer = require('../models/programmers.js')

// get a list of programmers from the db
router.get('/programmers', function(req, res, next){
    res.send({type: 'GET'});
});

// add a new programmer to the db
router.post('/programmers', function(req, res, next){
    Programmer.create(req.body).then(function(programmer){
        res.send(programmer);
    }).catch(next);
    
});

// update a programmer in the db
router.put('/programmers/:id', function(req, res, next){
    res.send({type: 'PUT'});
});

// delete a programmer from the db
router.delete('/programmers/:id', function(req, res, next){
    res.send({type: 'DELETE'});
});

module.exports = router;
