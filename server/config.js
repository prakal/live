if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null;

  if (process.env.HEROKU_POSTGRESQL_BLACK_URL) {
    var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
    sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  false,
      dialectOptions: {
        ssl: true
      }
    })
  } else {
    sequelize = new Sequelize('database', 'username', 'password', {
      host: '127.0.0.1',
      dialect: 'sqlite',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      storage: './db/liveApp.sqlite'
    });

  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Artist: sequelize.import(__dirname + '/models/artists.js'),
    Review: sequelize.import(__dirname + '/models/reviews.js')
  }

}

module.exports = global.db