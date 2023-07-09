var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stardew_valley',
});

con.connect(function(erroConexao) {
  if (erroConexao) {
    throw erroConexao;
  }
});

router.get('/', function(req, res, next) {
  con.query('SELECT * FROM tbcrescimentolavouras', function(erroSQL, result, fields) {
    if (erroSQL) {
      throw erroSQL;
    }
    res.status(200).json({message: result});
  });
});

router.post('/', function(req, res, next) {

});

router.put('/', function(req, res, next) {

});

router.delete('/', function(req, res, next) {

});

module.exports = router;
