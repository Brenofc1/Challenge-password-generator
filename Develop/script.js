// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // Initialize variables to store password length, character types, and generated password
  var passwordLength = 0;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumeric = false;
  var includeSpecial = false;
  var password = "";

  // Prompt the user for password length and character types to include
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Enter the desired password length (8-128 characters):"));
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters.");
    }
  }
  includeLowercase = confirm("Include lowercase letters in the password?");
  includeUppercase = confirm("Include uppercase letters in the password?");
  includeNumeric = confirm("Include numeric characters in the password?");
  includeSpecial = confirm("Include special characters in the password?");

  // Validate user input to ensure at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return "";
  }

  // Create strings containing all possible characters for each character type
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Use loop to select random characters from the appropriate character type strings
  // and append them to the generated password string
  for (var i = 0; i < passwordLength; i++) {
    var charSet = "";
    if (includeLowercase) {
      charSet += lowercase;
    }
    if (includeUppercase) {
      charSet += uppercase;
    }
    if (includeNumeric) {
      charSet += numeric;
    }
    if (includeSpecial) {
      charSet += special;
    }
    var index = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(index);
  }

  // Return the generated password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
