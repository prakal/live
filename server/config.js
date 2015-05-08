// var Sequelize = require('sequelize');

// var db = new Sequelize('database', 'username', 'password', {
//   host: '127.0.0.1',
//   dialect: 'sqlite',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
//   storage: './db/liveApp.sqlite'
// });

// module.exports = db;


if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.HEROKU_POSTGRESQL_BLACK_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BLACK_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('live-app-db', 'root', null)
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Artists: sequelize.import(__dirname + '/models/artists.js'),
    Reviews: sequelize.import(__dirname + '/models/reviews.js')
  }

}

module.exports = global.db