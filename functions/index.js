const functions = require("firebase-functions");
const express = require("express");
const sgMail = require("@sendgrid/mail");
const app = express();
const cors = require("cors");

// cors options, only for the testing purposes
// const corsOptions = {origin: true};
const whitelist = ["https://www.joshshearer.org", "joshshearer.org"];

const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      // eslint-disable-next-line callback-return
      callback(null, true);
    } else {
      // eslint-disable-next-line callback-return
      callback(new Error("Not allowed by CORS"));
    }
  },
};
// eslint-disable-next-line
app.get("/", cors(corsOptions), function(request, response, next) {
  sgMail.setApiKey(process.env.SENDGRID_API);
  console.log(process.env.SENDGRID_API);
  const from = "joshshear@gmail.com"; // Change to your verified sender

  const {to, subject, text} = request.query;
  console.log("🚀 ~ file: index.js ~ line 29 ~ app.get ~ text", text);

  const msg = {
    to,
    from,
    subject,
    text,
    html: `<strong>${text}</strong>`,
  };

  sgMail
      .send(msg)
      .then(() => {
        response.status(200).send(`Email sent ${process.env.SENDGRID_API}`);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
});
exports.email = functions.https.onRequest(app);
