const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

const PROXY_CONFIG = {
    "/api/*": {
        "target": "https://univesp-campinas-pi5.herokuapp.com",
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true
    }
}

module.exports = PROXY_CONFIG;

app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.listen(process.env.PORT || 8080);