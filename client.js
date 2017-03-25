var fetch = require('node-fetch');
var exec = require('child_process').exec;
var cmd = 'sh skripta.sh';

var rjesenje;

function eggzecute() {
    exec(cmd, function (error, stdout, stderr) {
        console.log(stdout);
        rjesenje = stdout;
        rjesenje = rjesenje.slice(0, rjesenje.length - 1)
        fetch('http://192.168.1.12:8080/listen',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'temp': rjesenje, 'comp':'121' })
            })
            .then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
            })
    })
}
setInterval(eggzecute, 60000);

