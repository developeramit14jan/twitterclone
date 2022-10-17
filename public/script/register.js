console.log("this is registation");
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm');
var form = document.getElementById('form')
console.log(password);

function validate(){
    console.log(password);
    if(password.value != confirmPassword.value){
        alert("password donot match .");
    }else{
        form.onsubmit();
    }
}