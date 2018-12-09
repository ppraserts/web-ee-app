const config = (process.env.NODE_ENV === "production") ? require('./config.production.json') : require('./config.development.json') 
module.exports = config;