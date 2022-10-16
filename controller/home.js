
module.exports.homePage = function(req , res){
    try{
        return res.status(200).render('home' , {title: "Home"});
    }catch(error){
        res.send("error in redirecting");
    }
}




module.exports.login = function(req , res){
    try{
        return res.status(200).render('login' , {title: "SignIn"});
    }catch(error){
        res.send("error in redirecting");
    }
}