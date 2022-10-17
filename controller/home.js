
module.exports.homePage = function(req , res){
    try{
        return res.status(200).render('home' , {title: "Home"});
    }catch(error){
        res.send("error in redirecting");
    }
}




module.exports.signIn = function(req , res){
    try{
        return res.status(200).render('signin' , {title: "SignIn"});
    }catch(error){
        res.send("error in redirecting");
    }
}

module.exports.signUp = function(req , res){
    try{
        return res.status(200).render('signup' , {title: "SignUp"});
    }catch(error){
        res.send("error in redirecting");
    }
}