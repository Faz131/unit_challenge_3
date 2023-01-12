// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

function writePassword() {
  var passUpperLower = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz123456789!@#$%^&*()';
  var passwordLength = 16;
  var generatePassword = '';

  // var password = generatePassword.writePassword();

  var passwordText = document.querySelector("#password");




  // var result = '';

  for (let i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passUpperLower.length);
    generatePassword += passUpperLower.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById('password').value = generatePassword;


}
function passCopy() {

  var copyPass = document.getElementById('#password');
  copyPass.select();
  document.addEventListener('copy');

}

// passwordText.value = generatePassword;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




