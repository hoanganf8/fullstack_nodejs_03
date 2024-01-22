"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "hoangan@f8team.dev",
    pass: "cuzt pcys iecy jnvc",
  },
});

module.exports = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: '"F8 Education" <hoangan@f8team.dev>', // sender address
    to, // list of receivers
    subject, // Subject line
    html: message, // html body
  });
  return info;
};
