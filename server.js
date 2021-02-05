require('dotenv').config();
var express = require('express');
const PORT = process.env.PORT || 3001;
const path = require("path");
var cors = require('cors');

var twilio = require('twilio');
var accountSid = process.env.TWILIO_ACCOUNT_ID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(express.static(__dirname + '/'));

var client = new twilio(accountSid, authToken);

app.post('/date', (req, res) => {
    const { date } = req.body;

    client.messages.create({
        to: '+18053772125',
        from: '+13862208419',
        body: `Rashelle chose: ${date}`
    })
    .then(message => console.log('Message Sent!'))
    console.log(date)
    res.status(200).send(date);
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use(function (req, res, next) {
    res.status(404).send('Unable to find the requested resource!');
  });

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});