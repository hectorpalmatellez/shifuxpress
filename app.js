const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');
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
        const header = parsedBody.header;
        const css = parsedBody.css;
        const js = parsedBody.js;
        const footer = parsedBody.footer;

        res.render('index', {
            header: header,
            css: css,
            js: js,
            footer: footer
        });
    });

});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
