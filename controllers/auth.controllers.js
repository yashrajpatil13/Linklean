import User from '../model/user.model.js';

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

    return res.redirect('/home');
}


async function handleUserlogin(req, res){
    const {email, password} = req.body;

    if(!email || !password){
        return res.render('login', {err: 'Enter valid credentials'});
    }

    const user = await User.findOne({email});
    if(!user){
        return res.render('login', {err: 'Invalid email'});
    }
    else if(user.password !== password){
        return res.render('login', {err: 'Invalid password'});
    }
    else{
        return res.redirect('/home');
    }
}

export {
    handleUsersignUp,
    handleUserlogin,
}