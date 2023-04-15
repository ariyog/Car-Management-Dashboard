const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_car_ari',
    password: 'ariyogi',
    port: 5432,
});

pool.connect(function (err) {
    if (!!err) {
        console.log(err)
    } else {
        console.log('Connection Successfully');
    }
})

module.exports = pool