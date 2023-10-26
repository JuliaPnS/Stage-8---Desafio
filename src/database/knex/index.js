const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.develpment);

module.exports = connection; 