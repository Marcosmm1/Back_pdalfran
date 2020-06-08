module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0-kr4n2.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 80),
        database: env('DATABASE_NAME', 'signature'),
        username: env('DATABASE_USERNAME', 'Marcos'),
        password: env('DATABASE_PASSWORD', '8uUP6KDEgYCeREos'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        ssl: env.bool('DATABASE_SSL', true)
      },
    },
  },
});
