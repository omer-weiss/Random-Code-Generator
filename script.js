
var arrayForGenerator = [];
const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


//prompt user for password length





function getCriteria () {
    do {
        var userInputLength = prompt("Please enter a number for password length. The number you choose must be minimum 8 to a maximum of 128");
        userInputLength = validateLength(userInputLength);
      } while (!userInputLength)
      
      // validate user input
      
      function validateLength (userInputLength) {
        if (userInputLength >= 8 && userInputLength <= 128) {
          getCriteria();
          return userInputLength;
        } else return false;
      }
      
      var lengthOfPassword = userInputLength;
      
    var lowerCaseChoice = confirm("Would you like lowercase characters in your password, click okay for yes, click cancel for no");
    var upperCaseChoice = confirm("Would you like uppercase characters in your password, click okay for yes, click cancel for no");
    var specialCharsChoice = confirm("Would you like special characters in your password, click okay for yes, click cancel for no");
    var numericCharsChoice = confirm("Would you like numeric characters in your password, click okay for yes, click cancel for no");
    if (lowerCaseChoice ){
        arrayForGenerator = [...arrayForGenerator,...lowerCaseLetters];
    }
    if (upperCaseChoice ){
        arrayForGenerator = [...arrayForGenerator,...upperCaseLetters];
    }
    if (specialCharsChoice ){
        arrayForGenerator = [...arrayForGenerator,...specialChars];
    }
    if (numericCharsChoice ){
        arrayForGenerator = [...arrayForGenerator,...numericChars];
    }
    
    return lengthOfPassword;
    
    // if (upperCaseChoice ){
    //     uppersSelection += upperCaseLetters;
    //     arrayForGenerator += uppersSelection;
    // } 
    // if (specialSelection ){
    //     specialSelection += specialChars;
    //     arrayForGenerator += specialSelection;
    // }
    // if (numericSelection ){
    //     numericSelection += numericChars;
    //     arrayForGenerator += numericSelection;
    // }
}

function generatePassword(){
    var lengthOfPassword = getCriteria();
    var pass = " ";
    for (var i=0; i<= lengthOfPassword; i++ ) {
        var char = Math.floor(Math.random()
                            * arrayForGenerator.length + 1);
                  
                pass += arrayForGenerator[char]
    }
    return pass;
}

console.log(pass);




//

// if (confirm("Would you like lowercase characters in your password, click okay for yes, click cancel for no") == true){
//     lowersSelection = true;
//   }



// //

// if (confirm("Would you like upper case characters in your password, click okay for yes, click cancel for no") == true){
//     uppersSelection = true;
//   }



// //

// if (confirm("Would you like special characters in your password, click okay for yes, click cancel for no") == true){
//     specialSelection = true;
//   }



// //

// if (confirm("Would you like numeric characters in your password, click okay for yes, click cancel for no") == true) {
//     numericSelection = true;
// }



//



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



