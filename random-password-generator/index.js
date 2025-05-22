// RANDOM PASSWORD GENERATOR 
//Function to generate the password

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    //Local variabels to be included in the password
    const lowercaseChars = "abcdefghiklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEDFGHIKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&()_+-=";


    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // Algorithm to generate the password
    if(length <= 0) {
        return `(password length must at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(At least 1 set of character needs to be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
   
    return password;
};

// Variables to be included in the password
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// Variable to receive the function generating the password
const password = generatePassword (passwordLength, 
                                   includeLowercase, 
                                   includeUppercase, 
                                   includeNumbers, 
                                   includeSymbols);

console.log(`Generated password: ${password}`);