// 1)

// Create Building Blocks:

// Prompt user length of password, inform them that their choice has to be in between 8-128, and keep prompting them if they choose cancel or the number does not meet the required criteria. Once a valid choice is made store it in a global variable.


// Prompt if they want lower case chars “enter “yes” and press okay for yes and cancel for no” if answer is cancel (null) , or no move on to the next prompt , if answer is  yes (sanitize) and make answer then move on to next prompt

// Prompt if they want upper case chars “enter “yes” and press okay for yes and cancel for no” if answer is cancel (null) move on to the next prompt , if answer is  yes (sanitize) and store all upper case chars in a global array variable.

// Prompt if they want special chars “enter “yes” and press okay for yes and cancel for no” if answer is cancel (null) move on to the next prompt , if answer is  yes (sanitize) and store all special chars in a global array variable.

// Prompt if they want numeric chars “enter “yes” and press okay for yes and cancel for no” if answer is cancel (null) move on to the next prompt , if answer is  yes (sanitize) and store all numeric chars in a global array variable.

// 2)

// Create one index array - concatenates the global arrays and stores the values in a global one index array

// 3)

// Create a function that generates password.
// Create empty string variable that will store the password. Use math dot random to parse through the combined global index array and chooses a random index.Do this as many times as the value of the global length variable each time adding the random value to the empty string variable. Return the now filled up empty string variable.

//Global Variables
//Blank array for results of users choices 
var arrayForGenerator = [];
const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];





// function promts user for criteria of the password, validates respones and adds return values to global variables

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
    //GLobal Variable for length that user wants password
      var lengthOfPassword = userInputLength;
    // prompting user for choices of which characters go into blank array that will be parsed later, and set values to variables.  
    var lowerCaseChoice = confirm("Would you like lowercase characters in your password, click okay for yes, click cancel for no");
    var upperCaseChoice = confirm("Would you like uppercase characters in your password, click okay for yes, click cancel for no");
    var specialCharsChoice = confirm("Would you like special characters in your password, click okay for yes, click cancel for no");
    var numericCharsChoice = confirm("Would you like numeric characters in your password, click okay for yes, click cancel for no");
    // this code takes the users choie to decide what global arrays to be added to the blank global array.
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
    
     
}

//this function generates a password by randomly going through our now filled blank array and choosing a random index, this process is repeated as many times as the users choice in length is, each time adding the chosen index to a empty variable "pass". When complete the now filled in variable string is returned to user. 
function generatePassword(){
    var lengthOfPassword = getCriteria();
    var password = " ";
    for (var i=0; i<= lengthOfPassword; i++ ) {
        var char = Math.floor(Math.random()
                            * arrayForGenerator.length + 1);
                  
                pass += arrayForGenerator[char]
    }
    return password;
}



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



