// Assignment Code
var generateBtn = document.querySelector("#generate");
var preferedLength = document.getElementById('length');
var passwordText = document.querySelector("#password");
var numberLength = document.getElementById('lengthNumber')




// Write password to the #password input

function writePassword() {
  var complexity = document.getElementById('length').value;
  var passUpperLower = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz123456789!@#$%^&*()';
  // var passwordLength = '16';
  var generatePassword = '';
  var preferedLength = document.querySelector('length')



  for (let i = 0; i <= complexity; i++) {
    var complexity = Math.floor(Math.random() * passUpperLower.length);
    generatePassword += passUpperLower.substring(complexity, complexity + 1);

  }



  document.getElementById('password').value = generatePassword;



}



// passwordText.value = generatePassword;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




