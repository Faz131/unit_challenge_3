// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

function writePassword() {
  var length = Number(prompt("Requsted Password Length"))
  var char = prompt("Requested Charsacters to use")
  var passwordText = document.querySelector("#password");


  // var passwordLength;
  function password() {
    var generatePassword = {
      uppercase: 'ABCDEFGHIJKLMOPQRSTUVWXYZ123456789',
      lowercase: 'abcdefghijklmopqrstuvwxyz',
      numbers: '0123456789',
    };
    var characterChoice = generatePassword[char.toLocaleLowerCase()];

    var result = '';
    // var password = generatePassword.writePassword();

    // var passwordText = document.querySelector("#password");


    // const passUpperLower = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz123456789';
    // const passwordLength = 8;


    for (i = 0; i < length; i++) {
      result += generatePassword = Math.floor(Math.random() * generatePassword);
      // (randomNumber, randomNumber + 1);
    }
    return result;
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




