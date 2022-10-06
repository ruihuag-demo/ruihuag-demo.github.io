let mysql = require('mysql')
let connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'node',
});

connection.query(' select * from ttest', (error, resutls, fields) => {
    if( error ) throw error;
    console.log("-----------");
    console.log( resutls );
    console.log("-----------");
})

mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'spring',
}).query(' select * from user', (error, resutls, fields) => {
    if( error ) throw error;
    console.log("-----------");
    console.log( resutls );
    console.log("-----------");
})