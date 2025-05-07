import User from '../model/user.model.js';
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
    const jwttoken = setUser({name: name, email: email, _id: user['_id']});
    res.cookie('token', jwttoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    return res.redirect('/home');
}


async function handleUserlogin(req, res){
    const {email, password} = req.body;

    const user = await User.findOne({email, password}, {name:1, email:1});
    if(!user){
        return res.render('login', {err: 'Invalid Email or Password'});
    }
    const jwttoken = setUser({...user, _id:user._id.toString()});
    res.cookie('token', jwttoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    return res.redirect('/home');
}

async function handleUserLogout(req, res){
    // Clear user cookie
    // Deleted session record from store
    
    const token = req.cookies.token;

    if(!token){
        return res.redirect('/');
    }
    res.clearCookie('token', { 
        path:'/',
        httpOnly: true,
    });
    return res.redirect('/login');
}

export {
    handleUsersignUp,
    handleUserlogin,
    handleUserLogout,
}