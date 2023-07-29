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
    res.status(200).json(result);
  });
});

router.get('/:IdCultivo', function(req, res, next) {
  Nome_cultivo = req.params.IdCultivo
  con.query('SELECT * FROM tbcrescimentolavouras WHERE IdCultivo = ?', [IdCultivo],function(erroSQL, result, fields) {
    if (erroSQL) {
      throw erroSQL;
    }
    res.status(200).send(result);
  });
});

router.post('/', function(req, res, next) {
  Nome_muda = req.body.Nome_muda;
  Nome_cultivo = req.body.Nome_cultivo;
  desc_cultivo_1 = req.body.desc_cultivo_1;
  desc_cultivo_2 = req.body.desc_cultivo_2;
  Preco_de_venda_cultivo = req.body.Preco_de_venda_cultivo;
  Imagem_muda = req.body.Imagem_muda;
  Imagem_cultivo = req.body.Imagem_cultivo;
  Imagem_estagios_1 = req.body.Imagem_estagios_1;
  Imagem_estagios_2 = req.body.Imagem_estagios_2;
  Imagem_estagios_3 = req.body.Imagem_estagios_3;
  Imagem_estagios_4 = req.body.Imagem_estagios_4;
  Imagem_estagios_5 = req.body.Imagem_estagios_5;
  Imagem_colheita_1 = req.body.Imagem_colheita_1;
  Imagem_colheita_2 = req.body.Imagem_colheita_2;
  Estagio_1_descricao = req.body.Estagio_1_descricao;
  Estagio_2_descricao = req.body.Estagio_2_descricao;
  Estagio_3_descricao = req.body.Estagio_3_descricao;
  Estagio_4_descricao = req.body.Estagio_4_descricao;
  Estagio_5_descricao = req.body.Estagio_5_descricao;
  Colheita_1_descricao = req.body.Colheita_1_descricao;
  Colheita_2_descricao = req.body.Colheita_2_descricao;
  Estacao = req.body.Estacao;
  Energia = req.body.Energia;
  sql = `INSERT INTO
  tbcrescimentolavouras(
  Nome_muda,
  Nome_cultivo,
  desc_cultivo_1,
  desc_cultivo_2,
  Preco_de_venda_cultivo,
  Imagem_muda,
  Imagem_cultivo,
  Imagem_estagios_1,
  Imagem_estagios_2,
  Imagem_estagios_3,
  Imagem_estagios_4,
  Imagem_estagios_5,
  Imagem_colheita_1,
  Imagem_colheita_2,
  Estagio_1_descricao,
  Estagio_2_descricao,
  Estagio_3_descricao,
  Estagio_4_descricao,
  Estagio_5_descricao,
  Colheita_1_descricao,
  Colheita_2_descricao,
  Estacao,
  Energia)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  con.query(sql, [Nome_muda, Nome_cultivo, desc_cultivo_1, desc_cultivo_2, Preco_de_venda_cultivo, 
    Imagem_muda, Imagem_cultivo, Imagem_estagios_1, Imagem_estagios_2, Imagem_estagios_3, Imagem_estagios_4, Imagem_estagios_5, Imagem_colheita_1, Imagem_colheita_2, 
    Estagio_1_descricao, Estagio_2_descricao, Estagio_3_descricao, Estagio_4_descricao, Estagio_5_descricao, Colheita_1_descricao, Colheita_2_descricao, Estacao, Energia
  ], function(erroSQL, result, fields) {
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

router.put('/', function(req, res, next) {
  Nome_muda = req.body.Nome_muda;
  Nome_cultivo = req.body.Nome_cultivo;
  desc_cultivo_1 = req.body.desc_cultivo_1;
  desc_cultivo_2 = req.body.desc_cultivo_2;
  Preco_de_venda_cultivo = req.body.Preco_de_venda_cultivo;
  Imagem_muda = req.body.Imagem_muda;
  Imagem_cultivo = req.body.Imagem_cultivo;
  Imagem_estagios_1 = req.body.Imagem_estagios_1;
  Imagem_estagios_2 = req.body.Imagem_estagios_2;
  Imagem_estagios_3 = req.body.Imagem_estagios_3;
  Imagem_estagios_4 = req.body.Imagem_estagios_4;
  Imagem_estagios_5 = req.body.Imagem_estagios_5;
  Imagem_colheita_1 = req.body.Imagem_colheita_1;
  Imagem_colheita_2 = req.body.Imagem_colheita_2;
  Estagio_1_descricao = req.body.Estagio_1_descricao;
  Estagio_2_descricao = req.body.Estagio_2_descricao;
  Estagio_3_descricao = req.body.Estagio_3_descricao;
  Estagio_4_descricao = req.body.Estagio_4_descricao;
  Estagio_5_descricao = req.body.Estagio_5_descricao;
  Colheita_1_descricao = req.body.Colheita_1_descricao;
  Colheita_2_descricao = req.body.Colheita_2_descricao;
  Estacao = req.body.Estacao;
  Energia = req.body.Energia;

  sql = `UPDATE tbcrescimentolavouras SET 
  Nome_muda= ?,
  Nome_cultivo= ?,
  desc_cultivo_1= ?,
  desc_cultivo_2= ?,
  Preco_de_venda_cultivo= ?,
  Imagem_muda= ?,
  Imagem_cultivo= ?,
  Imagem_estagios_1= ?,
  Imagem_estagios_2= ?,
  Imagem_estagios_3= ?,
  Imagem_estagios_4= ?,
  Imagem_estagios_5= ?,
  Imagem_colheita_1= ?,
  Imagem_colheita_2= ?,
  Estagio_1_descricao = ?,
  Estagio_2_descricao = ?,
  Estagio_3_descricao = ?,
  Estagio_4_descricao = ?,
  Estagio_5_descricao = ?,
  Colheita_1_descricao = ?,
  Colheita_2_descricao = ?,
  Estacao = ?,
  Energia = ?
  WHERE Nome_cultivo = ?`
  con.query(sql, [Nome_muda, Nome_cultivo, desc_cultivo_1, desc_cultivo_2, Preco_de_venda_cultivo, 
    Imagem_muda, Imagem_cultivo, Imagem_estagios_1, Imagem_estagios_2, Imagem_estagios_3, Imagem_estagios_4, Imagem_estagios_5, Imagem_colheita_1, Imagem_colheita_2, 
    Estagio_1_descricao, Estagio_2_descricao, Estagio_3_descricao, Estagio_4_descricao, Estagio_5_descricao, Colheita_1_descricao, Colheita_2_descricao, Estacao, Energia, Nome_cultivo
  ], function(erroSQL, result, fields) {
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

router.delete('/:Nome_cultivo', function(req, res, next) {
  Nome_cultivo = req.params.Nome_cultivo;
  sql = 'DELETE FROM tbcrescimentolavouras WHERE Nome_cultivo = ?'
  con.query(sql, [Nome_cultivo], function(erroSQL, result, fields) {
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
