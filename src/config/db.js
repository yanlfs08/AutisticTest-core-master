module.exports = {
  development: {
    database: 'dbprojeto',
    host: 'dbprojeto.cxojjwknxwy2.us-east-1.rds.amazonaws.com',
    username: 'admin',
    password: 'projetopi',
    port: 3306,
    dialect: "mysql",
    quoteIdentifiers: false, // set case-insensitive
  },
  test: {
    database: 'dbprojeto',
    host: 'dbprojeto.cxojjwknxwy2.us-east-1.rds.amazonaws.com',
    username: 'admin',
    password: 'projetopi',
    port: 3306,
    dialect: "mysql",
    quoteIdentifiers: false, // set case-insensitive
  },
  production: {
    database: 'dbprojeto',
    host: 'dbprojeto.cxojjwknxwy2.us-east-1.rds.amazonaws.com',
    username: 'admin',
    password: 'projetopi',
    port: 3306,
    dialect: "mysql",
    quoteIdentifiers: false, // set case-insensitive
  },
};