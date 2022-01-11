// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/bagy.db3'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
