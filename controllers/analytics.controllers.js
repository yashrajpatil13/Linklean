import URL from "../model/url.model.js";

async function handleAnalytics(req, res) {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOne({shortId: shortId});
        return res.render('analytics', { analyticsData: entry.visitHistory , error: null });

    } catch (err) {
        return res.render('analytics', { analyticsData: null, error: err });
    }
};


export {
    handleAnalytics
}