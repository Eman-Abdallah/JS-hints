
let array = [10, 21, 13, 40, 5, 6, 7, 8, 9, 10];
//sort array
console.log(array.sort((a, b) => a - b));
//unique array
console.log(array.filter((a, index) => array.indexOf(a) === index));
//duplicate values
console.log(array.filter((a, index) => array.indexOf(a) !== index));
//sum of an array
console.log(array.reduce((acc, val) => acc + val));
//git max of array
console.log(Math.max(...array));
//get min of array
console.log(Math.min(...array));
//git odd number of values
console.log(array.filter((el) => el % 2 !== 0));
//get even number of values
console.log(array.filter((el) => el % 2 === 0));


// Capitalize first letter
/**
 * The function "Capitalize" takes a string as input and returns the same string with the first letter
 * capitalized.
 * @param str - The parameter `str` is a string that represents the sentence or phrase that you want to
 * capitalize.
 */
const Capitalize = (str) => str.charAt(0
).toUpperCase() + str.slice(1);

Capitalize("follow for more");
console.log(Capitalize("follow for more"));

//Clear all cookies
// const clearCookies=document.cookie.split(";").forEach((cookie) =>(document.cookie=cookie.replace(/^ +/,"")
// .replace(/=.*/, `“e*;expires=${new Date(0).toUTCString()};path=/"`)));

// Remove duplicate from array
const remove = (arr) => [...new Set(arr)];
console.log(remove([1, 3, 5, 8, 1, 7, 9, 2, 4, 5]));

// Scroll to tob
const goToTob = () => window.scrollTo(0, 0);

// Convert RGB to Hex


/**
 * The function `rgbToHex` converts RGB values to a hexadecimal color code.
 * @param r - The parameter `r` represents the red value in the RGB color model.
 * @param g - The parameter "g" in the rgbToHex function represents the green value in the RGB color
 * model. It determines the intensity of the green color in the final hex color code.
 * @param b - The parameter `b` represents the blue value in the RGB color model. It determines the
 * intensity of the blue color in the resulting hex code.
 */
const rgbToHex = (r, g, b) =>
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
console.log(rgbToHex(24, 0, 255));

// find a day of a year

const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
console.log(dayOfYear(new Date()));

//hide the credit card number 
const creditNumber = "1234598732584524";
let last4Number = creditNumber.slice(-4);
let maskedNumber = last4Number.padStart(creditNumber.length, "*");
console.log(maskedNumber);

let x = [1, 2, 3];
let y = x;
y.pop();
console.log(x); // [1,2]


// Generate a list of unique nested objects and arrays

const data = [...Array(1000).keys()].map(num => {
    return { [num]: [{ num }] }
}
)
console.log(data);
const deepClone = structuredClone(data)
console.log(deepClone);

// const deepClone = JSON.parse(JSON.stringify(data) )




const employee = {
    name: 'Eman',
    Age: 34,
    salary: 5000
}
// in ====> check if the key is already in the  object returned true or false
const isSalary = 'salary' in employee;
console.log(isSalary); //true
const isGender = 'gender' in employee;
console.log(isGender);  //false

// conditional add properties to an object
includeSalary = true;
const employee1 = {
    name: 'Eman',
    Age: 34,
    ...(includeSalary && { salary: 5000 })
}
console.log(employee1);

// includes() method detect if value is found in array or not
const rgbColor = ['red', 'green', 'blue'];
const isRGP = (color) => {
    return rgbColor.includes(color);
}
console.log(isRGP('yellow'));
// isArray() method detect if value is an array
console.log('Is this an array? ' + Array.isArray(rgbColor));
// using spreed operator to make copy of array or object
const rgbColorCopy = [...(rgbColor)];
const newEmployee = { ...(employee1) };
console.log(rgbColorCopy);
console.log(newEmployee);
// removing properties from object without affecting original object
const { salary, ...newEmployees } = newEmployee;
console.log(newEmployees);

//falsy value in JS is undefined, null, "", NaN, false, 0
// Filtering array from falsy value by using filter(boolean)
const mixed = ["", null, false, true, "Eman", 0, undefined, NaN, 500];
console.log(mixed.filter(Boolean));
console.log(mixed);

// find()  ||| some()
const assets = [
    { id: 1, title: 'v-1', type: 'video' },
    { id: 1, title: 'v-1', type: 'video' },
    { id: 1, title: 'v-1', type: 'audio' },
]
console.log(assets.find((asset) => asset.type === "video"));  //{id: 1, title: 'v-1', type: 'video'}
console.log(assets.some((asset) => asset.type === "video"));  // true

//using numeric separator (_) in large numbers
const large = 450_000_000; // === 450000000 === 45e9

//Object destructuring frm an array  ** property name corresponding to index of item in array **
const colors = ['#000000', '#ffffff', '#00ff00', '#ff0000', '#0000ff'];
const { 0: firstColor, 4: lastColor } = colors;
console.log(firstColor);  //#000000
console.log(lastColor);  //#0000ff
//skipping element of an array by using empty and ,
const [, , ...newColors] = colors;
console.log(newColors); //['#00ff00', '#ff0000', '#0000ff']

// JSON.stringify() transfer JS object to JSON object
const json = JSON.stringify(employee1);
console.log(json); // {"name":"Eman","Age":34,"salary":5000}

// when passing anther paremter to  JSON.stringify() work as a filter to this object only show property on this filter
const filters = ["name", "Age"];
const jsonFiltered = JSON.stringify(employee1, filters);
console.log(jsonFiltered); //{"name":"Eman","Age":34}


function /* The `formatCurrency` function is a utility function that takes in three parameters:
`amount`, `currencyCode`, and `local`. It uses the `Intl.NumberFormat` object to format the
`amount` parameter as a currency value based on the specified `currencyCode` and `local`
parameters. */
    formatCurrency(amount, currencyCode, local = 'en-Us') {
    return new Intl.NumberFormat(local, {
        style: 'currency',
        currency: currencyCode
    }).format(amount);
}

// Example
console.log(formatCurrency(45478.568, 'USD'));  //$45,478.57
console.log(formatCurrency(45478.568, 'EUR'));  //€45,478.57
console.log(formatCurrency(45478.568, 'EGP'));  //EGP 45,478.57
console.log(formatCurrency(45478.568, 'INR'));  //₹45,478.57
console.log(formatCurrency(45478.568, 'JPY'));  //¥45,479
console.log(formatCurrency(45478.568, 'SAR'));  //SAR 45,478.57

// product free API
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))
// product category free API 
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => console.log(json))
// cart of user free API
fetch('https://fakestoreapi.com/carts?userId=1')
    .then(res => res.json())
    .then(json => console.log(json))
//limited product free API
fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .then(json => console.log(json))
// random user APi
fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => console.log(json.results[0]))
console.log('location')
/* The code is checking if the browser supports geolocation by checking if
`window.navigator.geolocation` is truthy. If geolocation is supported, it calls the
`getCurrentPosition` method to get the current position of the user. The position object contains
the latitude and longitude coordinates, which are then logged to the console. If there is an error
retrieving the position, the error is logged to the console as well. */
// if (window.navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//         const { latitude, longitude } = position.coords;
//         console.log(latitude, longitude);
//         fetchLocationName(latitude, longitude)
//     }, err => {
//         console.log(err);
//     })
// }
let xw= [1,2,3];
let ww=xw.find(n=>n>1);
console.log(ww);

console.log(`age is - ${age}`) 
var age = 40;
// Create a function called randomRange that takes a range myMin 
//and myMax and returns a random whole number that's greater than or 
// equal to myMin and less than or equal to myMax.
function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1 )) + myMin;
  }


/**
 * The function checks if a given string is a palindrome by removing non-alphanumeric characters,
 * converting to lowercase, and comparing it to its reverse.
 * @param str - The parameter `str` is a string that represents the word or phrase that we want to
 * check if it is a palindrome.
 * @returns a boolean value indicating whether the given string is a palindrome or not.
 */
  function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  palindrome("eye");

 /**
  * The function `convertToRoman` takes a number as input and returns the corresponding Roman numeral
  * representation of that number.
  * @param num - The parameter `num` is a number that you want to convert to a Roman numeral.
  * @returns The function `convertToRoman` returns a string representing the Roman numeral equivalent
  * of the input number `num`.
  */
  function convertToRoman(num) {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    let result = '';
  
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
  
    return result;
  }


/**
 * The `rot13` function takes a string as input and returns a decoded version of the string using the
 * ROT13 cipher.
 * @param str - "SERR PBQR PNZC"
 * @returns The function `rot13` is returning the decoded string "FREE CODE CAMP".
 */
  function rot13(str) {
    // Define a helper function to perform the rotation for a single character
    function rotateChar(char) {
      const charCode = char.charCodeAt(0);
  
      if (charCode >= 65 && charCode <= 90) {
        // Rotate uppercase letters
        return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      } else {
        // Return non-alphabetic characters unchanged
        return char;
      }
    }
  
    // Use the helper function to decode each character in the string
    const decodedStr = str.split('').map(rotateChar).join('');
   return decodedStr;
  }
  
  rot13("SERR PBQR PNZC");


/**
 * The function `convertHTML` takes a string as input and replaces special characters with their
 * corresponding HTML entities.
 * @param str - The `str` parameter is a string that you want to convert to HTML entities.
 * @returns The function `convertHTML` returns a string with special characters replaced by their
 * corresponding HTML entities.
 */
  function convertHTML(str) {
    // Define a map of special characters and their corresponding HTML entities
   const htmlEntities = {
     '&': '&amp;',
     '<': '&lt;',
     '>': '&gt;',
     '"': '&quot;',
     "'": '&apos;'
   };
 
   // Use replace with a regular expression to replace the characters
   return str.replace(/[&<>"']/g, match => htmlEntities[match]);
 }
 
 
 convertHTML("Dolce & Gabbana");