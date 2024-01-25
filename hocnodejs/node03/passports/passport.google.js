const GoogleStrategy = require("passport-google-oauth2").Strategy;

module.exports = new GoogleStrategy(
  {
    clientID:
      "49850008650-1jg7j11p5qsios449kqhv7qqeff8drl8.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ["profile", "email"],
  },
  function (request, accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(null, {});
  },
);
