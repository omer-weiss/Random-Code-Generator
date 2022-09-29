//prompt user for password length
//validate user input
//create variable to hold input of password length
//prompt user for charcter choices
//validate user inputs
//create variable to hold input of charcter choices 
//generate password
//password is displayed in alert or in the dom


//prompt user for password length

do {
  var userInputLength = prompt("Please enter a number for password length. The number you choose must be minimum 8 to a maximum of 128");
  userInputLength = validateLength(userInputLength);
} while (!userInputLength)

// validate user input

function validateLength (userInputLength) {
  if (userInputLength >= 8 && userInputLength <= 128) {
    return userInputLength;
  } else return false;
}

//create variable to hold input of password length

var passwordLength = userInputLength;

//ask user for charcter choices






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



