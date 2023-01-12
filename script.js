//Required field validation--> 
const inputEle = document.querySelectorAll('[required]');
inputEle.forEach(element => {
    element.addEventListener('focus', (e) => {
        if(!e.target.value){
            e.target.classList.add('invalidNew');
        }
    });
});

inputEle.forEach(element => {
    element.addEventListener('focusout', (e) => {
        if(!e.target.value){
            e.target.classList.remove('validNew');
            e.target.classList.add('invalidNew');
        }
        else{
            e.target.classList.remove('invalidNew');
            e.target.classList.add('validNew');
        }
    });
});


//Password fields Validation-->
let passVal = '';
let firstVal = '';
const confirmPass = document.querySelector('#confirmPassword');
const firstPass = document.querySelector('#password');
const errorDiv = document.querySelectorAll('.error-msg');
firstPass.addEventListener('focusout', (e) => {
    passVal = e.target.value;
});

firstPass.addEventListener('focusout', (e) => {
    if(e.target.value === firstVal){
        e.target.classList.remove('invalidNew');
        e.target.classList.add('validNew');
        confirmPass.classList.remove('invalidNew');
        confirmPass.classList.add('validNew');
        errorDiv.forEach(element => {
            element.textContent = '';
        });
    }
    else{
        e.target.classList.remove('validNew');
        e.target.classList.add('invalidNew');
        confirmPass.classList.remove('validNew');
        confirmPass.classList.add('invalidNew');
        errorDiv.forEach(element => {
            element.textContent = '*Passwords do not match';
        });
    }
});

confirmPass.addEventListener('focusout', (e) => {
    firstVal = e.target.value;
    if(e.target.value === passVal){
        e.target.classList.remove('invalidNew');
        e.target.classList.add('validNew');
        firstPass.classList.remove('invalidNew');
        firstPass.classList.add('validNew');
        errorDiv.forEach(element => {
            element.textContent = '';
        });
    }
    else{
        e.target.classList.remove('validNew');
        e.target.classList.add('invalidNew');
        firstPass.classList.remove('validNew');
        firstPass.classList.add('invalidNew');
        errorDiv.forEach(element => {
            element.textContent = '*Passwords do not match';
        });
    }
});