import App from '../app.js';
import http from 'http';
import https from "https"
import path from "path"

import fs from "fs"
import {fileURLToPath} from "url"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portTls = process.env.PORT_TLS || "7500"
const port = process.env.PORT || "8000"

const server = http.createServer(App.app)
const serverTls = https.createServer({
    key: fs.readFileSync('./certificate/server.key'),
    cert: fs.readFileSync('./certificate/server.cert')
}, App.app)

server.listen(port, ()=> console.log(`SERVER HTTP RUNNING IN PORT: ${port}\n`))
serverTls.listen(portTls, ()=> console.log(`SERVER HTTPS RUNNING IN PORT: ${portTls}\n`))