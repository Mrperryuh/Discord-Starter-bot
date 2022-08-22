const express = require('express');
const server = express();

server.all(`/`, (req, res) => {
    res.send(`<title>Discord Bot</title><body><h2>Made by Domino</h2><p>Use Freshping and enter the url from the web page to keep bot online 24/7.<strong>if bot does not go online within 5 minutes go to your shell and enter kill 1</strong></body>`);
});

function keepAlive() {
    server.listen(3000, () => {
        console.log(`Server ready!`);
    });
}

module.exports = keepAlive;