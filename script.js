// validate form
const error_name = document.getElementById("error_name");
const error_email = document.getElementById("error_email");
const error_password = document.getElementById("error_password");
const error_country = document.getElementById("error_country");
const error_gender = document.getElementById("error_gender");
const error_check = document.getElementById("error_check");


function validation(){
    var form_name = document.forms.register;
    var name = form_name.name.value;
    var email = form_name.email.value;
    var password = form_name.password.value;
    var country = form_name.country.value;
    var gender = form_name.gender;
    var check = form_name.check;

    if(name == ""){
        error_name.style.display = "block";
        form_name.name.focus();
        return false;
    }
    if(name != ""){
        error_name.style.display = "none";
    }
    if(email == ""){
        error_email.style.display = "block";
        form_name.email.focus();
        return false;
    }
    if(email != ""){
        error_email.style.display = "none";
    }
    if(password == ""){
        error_password.style.display = "block";
        form_name.password.focus();
        return false;
    }
    if(password != ""){
        error_password.style.display = "none";
    }
    if(country == ""){
        error_country.style.display = "block";
        form_name.country.focus();
        return false;
    }
    if(country != ""){
        error_country.style.display = "none";
    }
    if(!(gender[0].checked == true || gender[1].checked == true)){
        error_gender.style.display = "block";
        return false;
    }
    if(gender[0].checked == true || gender[1].checked == true) {
        error_gender.style.display = "none";
    }
    if(check.checked == false){
        error_check.style.display = "block";
        return false;
    }
    if(check.checked == true){
        error_check.style.display = "none";
    }
    if(form_name){
        alert("User registered!");
    }
}