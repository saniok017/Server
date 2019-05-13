const mongoURI =
  'mongodb://demoman:wgforge1@ds147926.mlab.com:47926/demoproject';

module.exports = {
  database: `${process.env.NODE_MONGODB_URI || mongoURI}`,
  port: `${process.env.PORT || 3000}`,
  corsOptions: {
    origin: 'https://forgeserver.herokuapp.com/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  },
  telegramAuth: {
    clientID: `${process.env.NODE_TELEGRAM_ID}`,
    clientSecret: `${process.env.NODE_TELEGRAM_SECRET}`,
    callbackURL:
      'https://forge-development.herokuapp.com/auth/telegram/callback'
  },
  telegramBotToken:
    process.env.NODE_TELEGRAM_TOKEN ||
    '884804673:AAG9dLfMcZDAi7RM6-Aw9pH84-JJhZWe3uM',
  jwtSecret: 'baNaNa',
  frontendServer: 'https://loori-r.github.io/share_coffee_frontend'
};
