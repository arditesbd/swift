var mysql = require('mysql')
 var connection = mysql.createPool({

host: 'localhost',
 user: 'root',
 password:'testuser123',
 database: 'WhiteningBar'
});

 module.exports=connection;
