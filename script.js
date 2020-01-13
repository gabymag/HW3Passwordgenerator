// Assignment Code
var generateBtn = document.querySelector("#generate");

var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+";
var numberChar = "1234567890";






// Write password to the #password input
function writePassword() {

  var charLength = prompt("Choose between 8 and 128 characters");
  var chooseCaps = confirm("Do you want capital letters?");
  var chooseLower = confirm("Do you want lowercase letters?");
  var chooseNum = confirm("Do you want to use numbers?");
  var chooseSpecial = confirm("Do you want special characters?");

  var password = "";

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

console.log(charLength);

  for (var x = 0; x < charLength; x++) { // Repeats once per charLength
    var randomNum = getRandomInt(100); //Gets random number between 1-100
    var percentChance = 0; //How many options do we have?
    if (chooseCaps) { percentChance++} // Add Option if chosen
    if (chooseLower) { percentChance++} // Add Option if chosen
    if (chooseNum) { percentChance++} // Add Option if chosen
    if (chooseSpecial) { percentChance++} // Add Option if chosen
    if (percentChance == 0) {
      password = "You have not selected any Character Types."
    } else {
      console.log(percentChance); 
      percentChance = 100/percentChance; // Divide 100 by Options to create chance
      console.log(percentChance);
      console.log(randomNum);
      if (chooseCaps) {
        if ((randomNum < percentChance)) { // if randomNum is less than percentChance
          password = password + capitalLetters.charAt(Math.floor(Math.random() * Math.floor(capitalLetters.length - 1))); //Add Capital Letter
        }
        randomNum = randomNum - percentChance; //Subtract from randomNum for next check
      } 
      
      if (chooseLower && randomNum >= 0) { //If randomNum less than 0 then we are finished so do not continue
        if ((randomNum < percentChance)) { //Next Check
          password = password + lowercaseLetters.charAt(Math.floor(Math.random() * Math.floor(lowercaseLetters.length - 1))); // Add lowercase Letter
        }
        randomNum = randomNum - percentChance; // Subtract for next check
      } 
      
      if (chooseNum && randomNum >= 0) {
        if ((randomNum < percentChance)) {
          password = password + numberChar.charAt(Math.floor(Math.random() * Math.floor(numberChar.length - 1)));
        }
        randomNum = randomNum - percentChance;
      } 
      
      if (chooseSpecial && randomNum >= 0) {
        if ((randomNum < percentChance)) {
          password = password + specialChar.charAt(Math.floor(Math.random() * Math.floor(specialChar.length - 1)));
        }
        randomNum = randomNum - percentChance;
      }

    }
  }
  console.log(password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copy.removeAttribute("disabled");
  copy.focus();
}

// function copyToClipboard() {
//   // BONUS 
//     document.getElementById("copy").select();

//     document.execCommand("Copy");

//     alert("Password copied to clipboard!");

// }

  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// copy.addEventListener("click", copyToClipboard);
// BONUS EVENT LISTENER
