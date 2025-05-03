import { getUser } from "../utils/auth.js";

async function isLoggedIn(req, res, next){
    const uid = req.cookies.uid;
    if(!uid){
        return res.redirect('/login');
    }
    const user = getUser(uid);
    if(!user){
        return res.redirect('/login');
    }
    req.user = user;
    next();
}

export {
    isLoggedIn
}