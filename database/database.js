const { Model } = require('objection');
var dotenv=require('dotenv').config()
const Knex = require('knex');
const knexfile = require('./knexfile');

// Initialize knex.
const db = Knex(knexfile.development);

// Give the Knex instance to Objection.
Model.knex(db);

module.exports = db;






// related to objection.js
// with objection you can make relationship
// define propertise
// knex is a query builder you can migrate or seed data