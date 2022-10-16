module.exports.loginRequire = function(req , res , next){
    if(req.session && req.session.user){
        next();
    }else{
        console.log("login")
        return res.redirect('/login');
    }
}