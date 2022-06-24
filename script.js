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


// check required  fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${input.id} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// check password match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value){
        showError(input2, 'passwords do not match');
    }
}


// event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

checkRequired([name, email, password, password2]);
checkPasswordsMatch(password, password2)

//  alternate method for form validation


    //   if (name.value === '') {
    //       showError(name, 'Username is required');
    //   } else{
    //       showSuccess(name);    
    //   }

   
    //   if (email.value === '') {
    //       showError(email, 'Email is required');
    //   } else if (!validEmail(email.value)) {
    //       showError(email, 'Email is not valid');
    //   }
    //    else{
    //       showSuccess(email);    
    //   }
    //   if (password.value === '') {
    //       showError(password, 'Password is required');
    //   } else{
    //       showSuccess(password);    
    //   }
    //   if (password2.value === '') {
    //       showError(password2, 'Password is required');
    //   } else{
    //       showSuccess(password2);    
    //   }
      
});