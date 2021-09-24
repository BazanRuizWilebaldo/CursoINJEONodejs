module.exports = {
    api : {
        port : 3000,
        host : 'http://localhost'
    },
    mysql : {
        host: process.env.MYSQL || 'sql10.freemysqlhosting.net',
        user: process.env.MYSQL_USER || 'sql10439358',
        password: process.env.MYSQL_PASSWORD || 'mCrRkUWjng',
        database: process.env.MYSQL_DB || 'sql10439358'
    }
}