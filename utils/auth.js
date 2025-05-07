import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function setUser(user){
    try {
        return jwt.sign(user, process.env.JWT_SECRET, {expiresIn:'1d'});
    } catch (err) {
        console.log(err);
        return '';
    }
    
}

function getUser(token){
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return {};
    }
    
}

export {
    setUser,
    getUser,
}