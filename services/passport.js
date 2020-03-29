const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const { User } = require("./db");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async ({ googleID }, done) => {
  const user = await User.findOne({
    googleID
  });
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      ...keys.google,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({
        googleID: profile.id
      });
      if (!user) {
        user = await User.create({
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          googleID: profile.id,
          photo: profile.photos[0].value
        });
      }

      done(null, { googleID: profile.id, email: profile.emails[0].value });
    }
  )
);
