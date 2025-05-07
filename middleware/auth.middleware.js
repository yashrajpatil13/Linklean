import { getUser } from "../utils/auth.js";

async function isLoggedIn(req, res, next){
    const token = req.cookies.token;
    if(!token){
        return res.redirect('/login');
    }
    const user = getUser(token);
    if(!user){
        return res.redirect('/login');
    }
    req.user = user;
    next();
}

export {
    isLoggedIn
}