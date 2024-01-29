const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { User, Provider } = require("../models/index");
module.exports = new GoogleStrategy(
  {
    clientID:
      "49850008650-1jg7j11p5qsios449kqhv7qqeff8drl8.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ["profile", "email"],
  },
  async function (request, accessToken, refreshToken, profile, done) {
    const { displayName: fullname, email } = profile;
    const [provider] = await Provider.findOrCreate({
      where: { name: "google" },
      defaults: { name: "google" },
    });

    const [user] = await User.findOrCreate({
      where: { email },
      defaults: {
        fullname,
        email,
        status: true,
        provider_id: provider.id,
      },
    });

    done(null, user);
  },
);
