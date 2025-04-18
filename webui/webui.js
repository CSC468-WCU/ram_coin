var express = require('express');
var app = express();
var redis = require('redis');
var path = require('path');


var client = redis.createClient(6379, 'redis');
client.on("error", function (err) {
    console.error("Redis error", err);
});

app.use(express.static('__dirname'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/json', function (req, res) {
    client.hlen('wallet', function (err, coins) {
        client.get('hashes', function (err, hashes) {
            var now = Date.now() / 1000;
            res.json( {
                coins: coins,
                hashes: hashes,
                now: now
            });
        });
    });
});


var server = app.listen(80, function () {
    console.log('WEBUI running on port 80');
});

