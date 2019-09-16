// ------------------ Main libraries --------------------
const http = require("http");
const express = require('express');

const rest = require('./service/router');
const errorHandler = require('./error-handler');
// ------------------ Constants -------------------------
const app = express();

const hostname = '127.0.0.1';//process.env.BOOKLING_HOST;
const port = '9090';process.env.BOOKLING_PORT;

app.use('/', rest.router);
app.use('/static', express.static('media'));
app.use(errorHandler.error5xx);


// ------------------ SERVER -----------------------------
app.listen(port, http, () => console.log(`Example app listening on ${hostname}:${port}!`));