// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      port : 3306,
      host: '127.0.0.1',
      user: 'root', // replace with your mysql username
      password: '', // replace with your mysql password
      database: 'node_restapi'// replace with your db name
    },
    pool: { min: 0, max: 7 },
    migrations: {
      tableName: 'migrations'
    }
  },

 

};
