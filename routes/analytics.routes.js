import express from 'express'
import { handleAnalytics } from '../controllers/analytics.controllers.js';

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('analytics', { analyticsData: null, error: null })
});

router.get('/:shortId', handleAnalytics);

export default router;