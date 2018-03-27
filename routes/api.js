const express = require ('express');
const router = express.Router();

// get a list of programmers from the db
router.get('/programmers', function(req, res){
    res.send({type: 'GET'});
});

// add a new programmer to the db
router.post('/programmers', function(req, res){
    res.send({type: 'POST'});
});

// update a programmer in the db
router.put('/programmers/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a programmer from the db
router.delete('/programmers/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
