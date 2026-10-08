const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");



function showError(input, message){

    const small = input.nextElementSibling;

    small.innerText = message;

    input.setAttribute("class", "error");

}



function showSuccess(input){

    const small = input.nextElementSibling;

    small.innerText = "";

    input.style.borderColor = "green";

}



function isEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}



form.addEventListener("submit", function(e){

    e.preventDefault();


    if(username.value === ""){

        showError(username, "Username cannot be blank");

    }else{

        showSuccess(username);

    }



    if(email.value === ""){

        showError(email, "Email cannot be blank");

    }else if(!isEmail(email.value)){

        showError(email, "Email is not valid");

    }else{

        showSuccess(email);

    }



    if(password.value === ""){

        showError(password, "Password cannot be blank");

    }else if(password.value.length < 6){

        showError(password, "Password must be at least 6 characters");

    }else{

        showSuccess(password);

    }



    if(confirmPassword.value === ""){

        showError(confirmPassword, "Password cannot be blank");

    }else if(confirmPassword.value !== password.value){

        showError(confirmPassword, "Passwords do not match");

    }else{

        showSuccess(confirmPassword);

    }


});