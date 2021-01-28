var express = require('express');
const PORT = process.env.PORT || 3001;
const path = require("path");

var twilio = require('twilio');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

var client = new twilio('ACc44808f621506ddd01560d1319da420e', '0ab106d6d5788c0df06747dd2a5c00d2');

client.messages.create({
    to: '+18053772125',
    from: '+13862208419',
    body: 'Ahoy from Twilio!'
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get('/send', (req, res) => {
    res.send('Sent form');
})

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});