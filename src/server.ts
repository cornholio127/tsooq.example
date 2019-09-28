import http from 'http';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import router from './controller';

const app = express();
app.set('etag', false);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

const server = http.createServer(app);
server.listen(8000);
