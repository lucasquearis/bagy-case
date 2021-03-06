// Update with your config settings.

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './data/bagy.db',
  },
  useNullAsDefault: true,
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/db/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
};
