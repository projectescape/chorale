module.exports = {
  mongoURI: process.env.MONGO_URI,
  google: {
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleClientSecret
  },
  cookieKey: process.env.cookieKey
};
