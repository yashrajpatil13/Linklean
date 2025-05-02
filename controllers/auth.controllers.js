import User from '../model/user.model.js';
import {v4 as uuidv4} from 'uuid';
import { setUser } from '../utils/auth.js';
 
async function handleUsersignUp(req, res){
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.render('signup', {err: 'All fields are necessary'});
    }
    const user = await User.create({
        name,
        email,
        password
    });
    const sessionId = uuidv4();
    setUser(sessionId, {name: name, email: email, _id: user['_id']});
    res.cookie('uid', sessionId);
    return res.redirect('/home');
}


async function handleUserlogin(req, res){
    const {email, password} = req.body;

    const user = await User.findOne({email, password}, {name:1, email:1});
    if(!user){
        return res.render('login', {err: 'Invalid Email or Password'});
    }
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('uid', sessionId)
    return res.redirect('/home');
}

export {
    handleUsersignUp,
    handleUserlogin,
}