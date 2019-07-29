const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const options = {
        url: 'http://backoffice.despegar.com/shifu/?locale=es_AR',
        headers: {
            'X-Client': ''
        }
    };
    request(options, (er, rs, body) => {
        const parsedBody = JSON.parse(body);
        const { header, css, js, footer} = parsedBody;

        res.render('index', {
            header,
            css,
            js,
            footer
        });
    });
});

app.get('/preview', (req, res) => {
    const options = {
        url: 'http://backoffice.despegar.com/shifu/preview?locale=es_AR',
        headers: {
            'X-Client': ''
        }
    };
    request(options, (er, rs, body) => {
        res.send(body);
    });
});

app.listen(3000, () => {});
