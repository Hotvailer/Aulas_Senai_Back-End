const express = require('express');
const rotas = express.Router();


rotas.get('/', (req,res) => {
    res.render('admin/dashboard')
});




module.exports= rotas;