const express = require('express');

const router = express.Router();
const response = require('../../utils/response');
const controller = require('./index');

router.get('/', function(req, res, next){
        controller.list()
            .then((cursos) => {
                response.success(req, res, cursos, 200);
            })
            .catch(next);
})

router.get('/:id', function(req, res, next){
    const id = req.params.id;
    controller.get(id)
        .then((cursos) => {
            response.success(req, res, cursos, 200);
        })
        .catch(next)
})

router.post('/', function(req, res, next){
    controller.insert(req.body)
        .then((cursos)=> {
            response.success(req, res, cursos, 200)
        })
        .catch(next)
})

//update
router.put('/', function(req, res, next){
    controller.update(req.body)
    .then((user)=>{
        response.success(req, res, user, 201);
    })
    .catch(next)
})

router.delete('/:id', function(req, res, next){
    const id = req.params.id;
    controller.remove(id)
        .then((isremove) => {
            response.success(req, res, isremove, 200)
        })
        .catch(next)
})


module.exports = router;