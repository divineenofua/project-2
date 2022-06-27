const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success error message
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check valid email
function validEmail(email){
const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email)
      .toLowerCase()); 
  }

// checkrequired fields
function checkRequired(inputArr){
inputArr.forEach(function(input) {
    if (input.value.trim === '') {
        showError(input, `${getFieldName(input)} is required`);
    } else{
        showSuccess(input);
    }
});
}
//  Get fieldname
 function getFieldName(input){
     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }

 //checkPasswordsMatch
 function checkPasswordsMatch(input1, input2){
     if (input1.value !== input2.value) {
         showError(input2, 'Passwords dot not match');
     }
    
 }
// event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

checkRequired([name, email, password, password2]);
checkPasswordsMatch(password, password2);
});