import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';

import connect_db from './utils/db.js';

/* Routes */
import urlRouter from './routes/url.routes.js';
import staticRouter from './routes/static.routes.js';


const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: false })); // To parse req.body
app.use(express.json()); // TO parse req.body json

// Sub Templating 
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use('/url', urlRouter);
app.use('/', staticRouter);


connect_db();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})