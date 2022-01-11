
module.exports = {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: "db",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    storage: './__tests__/database.sqlite',
    define:{
        timestamps: true,
        underscored: true
    },
};