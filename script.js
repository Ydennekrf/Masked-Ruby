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

//TODO: create window.prompts to create variables for inputA,inputB,inputC//


// inputA//
let Array1=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z]; 
//inputB//
let Array2=[~,!,@,#,$,%,^,&,*,(,),=,+];
//inputC//
let Array3=[1,2,3,4,5,6,7,8,9,0];
//finished password array//
finishPassArray=[];
//user selected password length//
//TODO: add typeof selector to be intger and between 8-128 characters//
let x = userInputLength;
let y = Math.floor(Math.random() * x);

// switch statement to create array for random number generator to select from //
switch (true) {
  case: inputA && inputB && inputC :
      characterArray = Array1.concat(Array2, Array3);
      break;
  case: inputA && inputB :
      characterArray = Array1.concat(Array2);
      break;
  case: inputA :
      characterArray = Array1;
      break;
  case: inputB :
      characterArray = Array2;
      break;
  case: inputB && inputC :
      characterArray = Array2.concat(Array3);
      break;
  case: inputC :
      characterArray = Array3;
      break;
    default:
      "ask for user input again"
};

// loop statement to generate random password based on user selections //
while(let i = 0; i<userInputLength; i++) {
  finishPassArray.push(characterArray[y]);
};

//TODO: convert finishPassArray to a string//
//TODO: output string to writePassword//
