
// Capitalize first letter
const Capitalize = (str) => str.charAt(0
    ).toUpperCase() + str.slice(1);
    
    Capitalize("follow for more");
    console.log(Capitalize("follow for more"));

    //Clear all cookies
// const clearCookies=document.cookie.split(";").forEach((cookie) =>(document.cookie=cookie.replace(/^ +/,"")
// .replace(/=.*/, `“e*;expires=${new Date(0).toUTCString()};path=/"`)));

// Remove duplicate from array
const remove = (arr)=> [...new Set (arr)];
console.log(remove([1,3,5,8,1,7,9,2,4,5]));

// Scroll to tob
const goToTob=() => window.scrollTo(0,0);

// Convert RGB to Hex


const rgbToHex = (r, g, b) =>
"#" + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
console.log(rgbToHex(24,0,255));

// find a day of a year

const dayOfYear = (date) => Math.floor((date- new Date(date.getFullYear(),0,0))/1000/60/60/24);
console.log(dayOfYear(new Date()));

//hide the credit card number 
const creditNumber="1234598732584524";
let last4Number=creditNumber.slice(-4);
let maskedNumber = last4Number.padStart(creditNumber.length,"*");
console. log(maskedNumber) ;

 


 
