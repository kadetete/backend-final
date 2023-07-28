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
    con.query('SELECT * FROM cultivos', function(erroSQL, result, fields) {
        if (erroSQL) {
            throw erroSQL;
        }
        res.status(200).json({message: result});
    });
});

router.get('/:Nome_Cultivo', function(req, res, next) {
    Nome_Cultivo = req.params.Nome;
    con.query('SELECT * FROM cultivos WHERE Nome_Cultivo = ?', [Nome_Cultivo], function(erroSQL, result, fields) {
      if (erroSQL) {
        throw erroSQL;
      }
      res.status(200).json({message: result});
    });
  });

router.post('/', function(req, res, next) {
    Nome_Cultivo = req.body.Nome_Cultivo;
    Imagem = req.body.Imagem;
    Origem = req.body.Origem;
    IdMuda = req.body.IdMuda;
    Tempo_de_Crescimento = req.body.Tempo_de_Crescimento;
    Estacao = req.body.Estacao;
    Energia = req.body.Energia;
    Preco_de_Venda_Cultivo = req.body.Preco_de_Venda_Cultivo;
    desc_cultivo_1 = req.body.desc__cultivo_1;
    desc_cultivo_2 = req.body.desc__cultivo_2;
    sql = `INSERT INTO cultivos(Nome_Cultivo, Imagem, Origem, IdMuda, Tempo_de_Crescimento, Estacao, Energia, Preco_de_Venda_Cultivo, desc_cultivo_1, desc_cultivo_2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    con.query(sql, [Nome_Cultivo, Imagem, Origem, IdMuda, Tempo_de_Crescimento, Estacao, Energia, Preco_de_Venda_Cultivo, desc_cultivo_1, desc_cultivo_2], function(erroSQL, result, fields) {
        if (erroSQL) {
            throw erroSQL;
        }

        if (result.affectedRows > 0) {
            res.status(200).json({message: 'Registro inserido com sucesso'});
          } else {
            res.status(400).json({message: 'Não foi possível inserir dados'});
          }
        
    });
});


router.put('/:Nome_Cultivo', function(req, res, next) {
    Nome_Cultivo = req.params.Nome_Cultivo;
    Imagem = req.body.Imagem;
    Origem = req.body.Origem;
    IdMuda = req.body.IdMuda;
    Tempo_de_Crescimento = req.body.Tempo_de_Crescimento;
    Estacao = req.body.Estacao;
    Energia = req.body.Energia;
    Preco_de_Venda_Cultivo = req.body.Preco_de_Venda_Cultivo;
    desc_cultivo_1 = req.body.desc__cultivo_1;
    desc_cultivo_2 = req.body.desc__cultivo_2;
    sql = `UPDATE cultivos SET
    Nome_Cultivo = ?,
    Imagem = ?,
    Origem = ?,
    IdMuda = ?,
    Tempo_de_Crescimento = ?,
    Estacao = ?,
    Energia = ?,
    Preco_de_Venda_Cultivo = ?,
    desc_cultivo_1 = ?,
    desc_cultivo_2 = ?
    WHERE Nome_Cultivo = ?`
    con.query(sql, [Nome_Cultivo, Imagem, Origem, IdMuda, Tempo_de_Crescimento, Estacao, Energia, Preco_de_Venda_Cultivo, desc_cultivo_1, desc_cultivo_2, Nome_Cultivo], function(erroSQL, result, fields) {
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

router.delete('/:Nome_Cultivo', function(req, res, next) {
    Nome_Cultivo = req.params.Nome_Cultivo;
    sql = `DELETE FROM cultivos WHERE Nome_Cultivo = ?`;
    con.query(sql, [Nome_Cultivo], function(erroSQL, result, fields) {
        if (erroSQL) {
            throw erroSQL;
        }

        if (result.affectedRows > 0) {
          res.status(200).json({message: 'Registro excluido com sucesso'});
        } else {
          res.status(400).json({message: 'Não foi possível excluir dados'});
        }
    });
});

module.exports = router;