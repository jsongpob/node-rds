import  mysql from 'mysql';

const con = mysql.createConnection({
    host: "houserentdb.cbc8mqgu6oox.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "0YZCnztnoKnOQjNwCOGn"
});

// connect to the MySQL database
con.connect(function(err) {
    if (err) throw err;

    con.query('CREATE DATABASE IF NOT EXISTS main;');
    con.query('USE main;');
    con.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), '+
    'email varchar(255), age int, PRIMARY KEY(id));', function(error, result, fields) {
        console.log(result);
    });
});


export default con;