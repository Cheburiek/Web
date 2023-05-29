$(document).ready(function () {
    calculateBTN.click(function () {
      calculateResult();
      displayResult(result);
    });
    registrationBTN.on("click", function(e){
      e.preventDefault();
      takeValuesFromRegForm();
      if(usernameValue && emailValue && passwordValue && genderValue){
        /* record the user in the table
        -
        -
        -
        */
        $(location).prop("href", "dashboard.html");
      }else{
        alert("You enter not all fields!");
      }
    });
    authorizationBTN.on("click", function(e){
      e.preventDefault();
      takeValuesFromRegForm();
      if(emailValue && passwordValue){
        /* record the user in the table
        -
        -
        -
        */
        $(location).prop("href", "dashboard.html");
      }else{
        alert("You enter not all fields!");
      }
    });
  });