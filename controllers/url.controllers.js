import { nanoid } from "nanoid";
import URL from "../model/url.model.js";

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    if (body.url) {
        const shortId = nanoid(8);
        const data = await URL.create({
            shortId: shortId,
            redirectURL: req.body.url,
            visitHistory: [],
            createdBy: req.user._id
        });
        return res.render('home', {
            loggedIn: req.cookies.uid ? true : false,
            shortId: shortId
        });
    }
};

async function handleRedirect(req, res) {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            {
                shortId: shortId
            },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    }
                }
            }
        );
        if (!entry) {
            throw new Error(`Invalid ID: ${shortId}`);
        }
        res.redirect(entry.redirectURL);
    } catch (err) {
        return res.status(401).json({
            error: err,
            success: false
        });
    }
};


export {
    handleGenerateNewShortURL,
    handleRedirect
}