var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var config = require('./config');

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

router.post('/', function (req, res) {
    const login = req.body.login;
    const senha = req.body.senha;

    const sql = 'SELECT * FROM tblogin WHERE login = ?';
    con.query(sql, [login], function (erroComandoSQL, result) {
        if (erroComandoSQL) {
            console.error('Erro ao executar consulta:', erroComandoSQL);
            res.status(500).json({ auth: false, message: 'Erro do servidor' });
            return;
        }

        if (result.length === 0) {
            res.status(401).json({ auth: false, message: 'Credenciais inválidas' });
            return;
        }

        const token = jwt.sign({ login }, config.jwtSegredo, { expiresIn: '1d' });
        const decodedToken = jwt.decode(token);
        const expiraEm = decodedToken.exp;

        res.status(200).json({ auth: true, message: 'Login bem-sucedido', token: token, expiraEm: expiraEm });
    });
});

router.post('/novo', function (req, res) {
    const login = req.body.login;
    const senha = req.body.senha;

    const sqlselect = 'SELECT * FROM login WHERE login = ?';
    con.query(sqlselect, [login], function (erroComandoSQL, result) {
        if (erroComandoSQL) {
            console.error('Erro ao executar consulta:', erroComandoSQL);
            res.status(500).send('Erro do servidor');
            return;
        }

        if (result.length > 0) {
            res.status(409).send('Login existente');
            return;
        }

        const sqlinsert = 'INSERT INTO login(login, senha) VALUES (?, ?)';
        con.query(sqlinsert, [login, senha], function (erro) {
            if (erro) {
                console.error('Erro ao inserir novo login:', erro);
                res.status(500).send('Erro do servidor');
                return;
            }

            res.status(200).send('Login criado com sucesso');
        });
    });
});


module.exports = router;