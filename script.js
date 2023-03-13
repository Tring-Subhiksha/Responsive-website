let nameError=document.getElementById("name-err")
let emailError=document.getElementById("email-err")
let phoneError=document.getElementById("phone-err")
let dateofbirthError=document.getElementById("date-err")
let passwordError=document.getElementById("password-err")
let submitMsg=document.getElementById("submit")
function validateName(){
    let name=document.getElementById("name").value
    if(name==''){
       nameError.innerHTML="*Name should not be blank"
       return false;
    }
    else if(name.length<5){
       
        nameError.innerHTML="*Name should atleast in five characters"
        return false;
    }
    else if(name.length>16){
        nameError.innerHTML="*Name is too large"
        return false;
    }
    else if(!isNaN(name)){
        
        nameError.innerHTML="*Name should be in characters not an integer"
        return false;
    }
    else{
        nameError.innerHTML="*Name is valid"
        return true;
    }
}
function validateEmail(){
    let email=document.getElementById("email").value
   
    if(email==""){
        emailError.innerHTML="*Email should not be blank"
        return false
    }
    else{
        emailError.innerHTML="*Email Id is valid"
        return true
    }
}
function validatePhone(){
    let phone=document.getElementById("phone").value
    if(phone==""){
        phoneError.innerHTML="*Phone number should not be blank"
        return false
    }
    else if(phone.length<10){
        phoneError.innerHTML="*Phone number atleast in 10 characters"
        return false
    }
    else if(phone.length>10){
        phoneError.innerHTML="*Phone number not above 10 characters"
        return false
    }
    else{
        phoneError.innerHTML="*Phone number is valid"
        return true
    }
}
function validateDate(){
    let date= document.getElementById("date").value
    let currentdate=new Date();
    
    if(date==""){
        dateofbirthError.innerHTML="*Dateofbirth should not be blank"
        return false
    }
   
    else if(new Date(date)>=currentdate){
        dateofbirthError.innerHTML="*Date of birth not above current date"
        return false
    }
    else{
        dateofbirthError.innerHTML="*Dateofbirth is valid"
        return true
    }
}
function validatePassword(){
    let password=document.getElementById("password").value
    if(password==""){
        let str="*Password should not be blank"
        passwordError.innerHTML=str
        return false
    }
    else if(password.length<8){
        let strtwo="*Password should atleast in 8 characters"
        passwordError.innerHTML=strtwo
        return false
    }
    else{
        let strthree="*Password is valid"
        passwordError.innerHTML=strthree
        return true
    }
}
function Submit(){
   
    if(validateName() && validateEmail() && validatePhone() && validateDate() &&validatePassword()){
        alert("Thank you! Registered successfully")
        return true
    }
    else{
        submitMsg.innerHTML="*Please fill all the details"
        setTimeout(()=>submitMsg.style.display="none",3000);
        return false
        
    }
}
