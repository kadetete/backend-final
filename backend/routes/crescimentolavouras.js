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
  Nome = req.body.Nome;
  Imagem = req.body.Imagem;
  Estagio_1_descricao = req.body.Estagio_1_descricao;
  Estagio_2_descricao = req.body.Estagio_2_descricao;
  Estagio_3_descricao = req.body.Estagio_3_descricao;
  Estagio_4_descricao = req.body.Estagio_4_descricao;
  Estagio_5_descricao = req.body.Estagio_5_descricao;
  Colheita_1_descricao = req.body.Colheita_1_descricao;
  Colheita_2_descricao = req.body.Colheita_2_descricao;
  IdCultivo = req.body.IdCultivo;
  IdMuda = req.body.IdMuda;
  sql = `INSERT INTO 
  tbcrescimentolavouras(Nome, Imagem, Estagio_1_descricao, Estagio_2_descricao, Estagio_3_descricao, Estagio_4_descricao, Estagio_5_descricao, Colheita_1_descricao, Colheita_2_descricao, IdCultivo, IdMuda) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  con.query(sql, [Nome, Imagem, Estagio_1_descricao, Estagio_2_descricao, Estagio_3_descricao, Estagio_4_descricao, Estagio_5_descricao, Colheita_1_descricao, Colheita_2_descricao, IdCultivo, IdMuda], function(erroSQL, result, fields) {
    if(erroSQL) {
      throw erroSQL;
    }

    if (result.affectedRows > 0) {
      res.status(200).json({message: 'Registro inserido com sucesso'});
    } else {
      res.status(400).json({message: 'Não foi possível inserir dados'});
    }
  });
});

router.put('/:IdCrescimento', function(req, res, next) {
  IdCrescimento = req.params.IdCrescimento;
  Nome = req.body.Nome;
  Imagem = req.body.Imagem;
  Estagio_1_descricao = req.body.Estagio_1_descricao;
  Estagio_2_descricao = req.body.Estagio_2_descricao;
  Estagio_3_descricao = req.body.Estagio_3_descricao;
  Estagio_4_descricao = req.body.Estagio_4_descricao;
  Estagio_5_descricao = req.body.Estagio_5_descricao;
  Colheita_1_descricao = req.body.Colheita_1_descricao;
  Colheita_2_descricao = req.body.Colheita_2_descricao;
  IdCultivo = req.body.IdCultivo;
  IdMuda = req.body.IdMuda;
  sql = `UPDATE tbcrescimentolavouras SET 
  Nome = ?,
  Imagem = ?,
  Estagio_1_descricao = ?,
  Estagio_2_descricao = ?,
  Estagio_3_descricao = ?,
  Estagio_4_descricao = ?,
  Estagio_5_descricao = ?,
  Colheita_1_descricao = ?,
  Colheita_2_descricao = ?,
  IdCultivo = ?,
  IdMuda = ?
  WHERE IdCrescimento = ?`
  con.query(sql, [Nome, Imagem, Estagio_1_descricao, Estagio_2_descricao, Estagio_3_descricao, Estagio_4_descricao, Estagio_5_descricao, Colheita_1_descricao, Colheita_2_descricao, IdCultivo, IdMuda, IdCrescimento], function(erroSQL, result, fields) {
    if (erroSQL) {
      throw erroSQL;
    }
    
    if (result.affectedRows > 0) {
      res.status(200).json({message: 'Registro alterado com sucesso'});
    } else {
      res.status(400).json({message: 'Não foi possível alterar dados'});
    }

  });
});

router.delete('/:IdCrescimento', function(req, res, next) {
  IdCrescimento = req.params.IdCrescimento;
  sql = 'DELETE FROM tbcrescimentolavouras WHERE IdCrescimento = ?'
  con.query(sql, [IdCrescimento], function(erroSQL, result, fields) {
    if (erroSQL) {
      throw erroSQL;
    }

    if (result.affectedRows > 0) {
      res.status(200).send('Registro excluído com sucesso');
  } else {
      res.status(404).send('Não encontrado');
  }
  });
  
});

module.exports = router;
