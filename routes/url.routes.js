import express from "express";
import { handleGenerateNewShortURL, handleRedirect } from "../controllers/url.controllers.js";

const router = express.Router();

router.post('/', handleGenerateNewShortURL);

router.get('/:shortId', handleRedirect);


export default router;