import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import cookieParser from 'cookie-parser';
import { isLoggedIn } from './middleware/auth.middleware.js';

import connect_db from './utils/db.js';

/* Routes */
import urlRouter from './routes/url.routes.js';
import staticRouter from './routes/static.routes.js';
import userRouter from './routes/user.routes.js';
import analyticsROuter from './routes/analytics.routes.js';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: false })); // To parse req.body
app.use(express.json()); // TO parse req.body json
app.use(cookieParser());

// Sub Templating 
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use('/url', isLoggedIn, urlRouter);
app.use('/', staticRouter);
app.use('/analytics', isLoggedIn, analyticsROuter);
app.use('/user', userRouter);


connect_db();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})