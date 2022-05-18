// Assignment Code
var generateBtn = document.querySelector("#generate");

// inputA
let ArrayA=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']; 
//inputB//
let ArrayB=['~','!','@','#','$','%','^','&','*','(',')','=','+'];
//inputC//
let ArrayC=['1','2','3','4','5','6','7','8','9','0'];
//inputD//
let ArrayD=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
//finished password array to be sent//

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword = () => {

  let characterArray= [];
  let passwordArray = [];
 
//user selected password length//
  userInput = prompt('how long would you like your password to be?');
  inputA = confirm('would you like lower case letters?');
  inputB = confirm('would you like special characters?');
  inputC = confirm('would you like numbers?');
  inputD = confirm('would you like uppercase letters');
  //if statement checks if the password length is valid or not
  if(isNaN(userInput) || userInput.length === 0) {
    alert('your input is invalid');
    writePassword();
    return;
    //else if statement checks if the password length is between the required values
  } else if (userInput < 8 || userInput > 128) {
    alert('your password must be between 8 and 128 characters.');
    console.log(userInput)
    writePassword();
    return;
  } else {
    if(inputA) {
      characterArray = characterArray.concat(ArrayA);
      //adds special characters to character array
    } if (inputB) {
      characterArray = characterArray.concat(ArrayB);
      //adds numbers to character array
    } if (inputC) {
      characterArray = characterArray.concat(ArrayC);
      //adds upper case to character array
    }if (inputD) {
      characterArray = characterArray.concat(ArrayD);
    };
      for (let i = 0; i < userInput; i++){
        passwordArray.push(characterArray[Math.floor(Math.random() * characterArray.length)]);
      };
  }
  
  console.log(characterArray);
  console.log(passwordArray);
  let text = passwordArray.join('')
  console.log(text)
  return text;
};
  

