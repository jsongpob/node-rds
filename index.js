import express from "express";
import mysql from "mysql";
const app = express();

const PORT = 8080;

const con = mysql.createConnection({
    host: "popdb.cpik6822ykjd.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "fryiXohCyL9A07r8QfAg"
});

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})

app.post('/users', (req, res) => {
    if (req.query.username && req.query.email && req.query.age) {
        console.log('Request received');
        con.connect(function(err) {
            con.query(`INSERT INTO main.users (username, email, age) VALUES ('+${req.query.username}','${req.query.email}','${req.query.age}')`,function(err, result, fields) {
                if (err) res.send(err);
                if (result) res.send({username: req.query.username, email: req.query.email, age: req.query.age});
                if (fields) console.log(fields);
            });
        });
    } else {
        console.log('Missing a parameter');
    }
});

app.get('/users', (req, res) => {
    con.connect(function(err) {
        con.query(`SELECT * FROM main.users`, function(err, result, fields) {
            if (err) res.send(err);
            if (result) res.send(result);
        });
    });
});

