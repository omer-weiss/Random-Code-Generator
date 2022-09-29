//prompt user for password length
//validate user input
//create variable to hold input of password length
//prompt user for charcter choices
//validate user inputs
//create variable to hold input of charcter choices 
//generate password
//password is displayed in alert or in the dom





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



