// Pre-built modules
const http = require('http');
const path = require('path');
// Installed modules
const express = require('express');

const app = express();
app.use(
    express.static(
        path.join(__dirname, 'views')
    )
);

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);

console.log(`Running at: https://localhost:${port}`);