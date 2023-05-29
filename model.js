let expression;
let result = 0;

function calculateResult(){
    expression = expressionInput.val()
    result = eval(expression);
}


let usernameValue = usernameInput.val();
let emailValue = emailInput.val();
let passwordValue = passwordInput.val();
let genderValue = genderInput.val();
// Registration
function takeValuesFromRegForm(){
    usernameValue = usernameInput.val();
    emailValue = emailInput.val();
    passwordValue = passwordInput.val();
    genderValue = genderInput.val();
}