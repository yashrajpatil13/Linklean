import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('signup');
});

router.get('/login', (req, res) => {
    return res.render('login');
});

router.get('/home', (req, res) => {
    return res.render('home');
});


export default router;