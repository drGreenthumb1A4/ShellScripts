const express = module.require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '', // sender address
    to: '', // list of receivers
    subject: 'Alert', // Subject line
    text: 'Alert', // plain text body
    html: '' // html body
};

function send(comp) {
    mailOptions.html = '<p>' + comp + ' se pregrijao</p>';
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(8080, function(req, res){
    console.log("Listening on 8080");
});

app.post('/listen', function(req, res){
    console.log(req.body);
    let temp = parseFloat(req.body.temp);
    if(temp > 60.0) send(req.body.comp);
    res.status(200).json({ status: true });
});