var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stardew_valley',
});

con.connect(function (erroConexao) {
    if (erroConexao) {
        throw erroConexao;
    }
});

router.get('/', function (req, res, next) {
    con.query('SELECT * FROM mudas', function (erroSQL, result, fields) {
        if (erroSQL) {
            throw erroSQL;
        }
        res.status(200).json({ message: result });
    });
});

router.get('/:Nome_Muda', function (req, res, next) {
    Nome = req.params.Nome_Muda;
    con.query('SELECT * FROM mudas WHERE Nome_Muda = ?', [Nome_Muda], function (erroSQL, result, fields) {
        if (erroSQL) {
            throw erroSQL;
        }
        res.status(200).json({ message: result });
    });
});

router.post('/', function(req, res, next) {
    Nome_Muda = req.body.Nome_Muda;
    Imagem = req.body.Imagem;
    IdCultivo = req.body.IdCultivo;
    Tempo_de_Crescimento = req.body.Tempo_de_Crescimento;
    Estacao = req.body.Estacao;
    Preco_de_venda_Muda = req.body.Preco_de_venda_Muda;
    Armazem_do_Pierre = req.body.Armazem_do_Pierre;
    Mercado_Joja = req.body.Mercado_Joja;
    Carrinho_de_Viagem = req.body.Carrinho_de_Viagem;
    desc_muda_1 = req.body.desc_muda_1;
    desc_muda_2 = req.body.desc_muda_2;
    sql = `INSERT INTO mudas(IdMuda, Nome_Muda, Imagem, IdCultivo, Tempo_de_Crescimento, Estacao, Preco_de_venda_Muda, Armazém_do_Pierre, Mercado_Joja, Carrinho_de_Viagem, desc_muda_1, desc_muda_2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    con.query(sql, [IdMuda, Nome_Muda, Imagem, IdCultivo, Tempo_de_Crescimento, Estacao, Preco_de_venda_Muda, Armazém_do_Pierre, Mercado_Joja, Carrinho_de_Viagem, desc_muda_1, desc_muda_2], function(erroSQL, result, fields) {
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

router.put('/:Nome_Muda', function(req, res, next) {
    Nome_Muda = req.params.Nome_Muda;
    Imagem = req.body.Imagem;
    IdCultivo = req.body.IdCultivo;
    Tempo_de_Crescimento = req.body.Tempo_de_Crescimento;
    Estacao = req.body.Estacao;
    Preco_de_venda_Muda = req.body.Preco_de_venda_Muda;
    Armazem_do_Pierre = req.body.Armazem_do_Pierre;
    Mercado_Joja = req.body.Mercado_Joja;
    Carrinho_de_Viagem = req.body.Carrinho_de_Viagem;
    desc_muda_1 = req.body.desc_muda_1;
    desc_muda_2 = req.body.desc_muda_2;
    sql = `UPDATE mudas SET
    Nome_Muda = ?,
    Imagem = ?,
    IdCultivo = ?,
    Tempo_de_Crescimento = ?,
    Estacao = ?,
    Preco_de_venda_Muda = ?,
    Armazem_do_Pierre = ?,
    Mercado_Joja = ?,
    Carrinho_de_Viagem = ?,
    desc_muda_1 = ?,
    desc_muda_2 = ?
    WHERE Nome_Muda = ?`;
    con.query(sql, [IdMuda, Nome_Muda, Imagem, IdCultivo, Tempo_de_Crescimento, Estacao, Preco_de_venda_Muda, Armazém_do_Pierre, Mercado_Joja, Carrinho_de_Viagem, desc_muda_1, desc_muda_2, Nome_Muda], function(erroSQL, result, fields) {
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


router.delete('/:Nome_Muda', function(req, res, next) {
    Nome_Muda = req.params.Nome_Muda;
    sql = `DELETE FROM mudas WHERE Nome_Muda = ?`;
    con.query(sql, [Nome_Cultivo], function(erroSQL, result, fields) {
        if (erroSQL) {
            throw erroSQL;
        }

        if (result.affectedRows > 0) {
            res.status(200).json({message: 'Registro excluído com sucesso'});
          } else {
            res.status(400).json({message: 'Não foi possível excluir dados'});
          }
    });
});

module.exports = app;