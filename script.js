
array=[10,21,13,40,5,6,7,8,9,10];
//sort array
console.log(array.sort((a,b)=> a-b));
//unique array
console.log(array.filter((a,index)=>array.indexOf(a)===index));
//duplicate values
console.log(array.filter((a,index)=>array.indexOf(a)!==index));
//sum of an array
console.log(array.reduce((acc,val)=>acc+val));
//git max of array
console.log(Math.max(...array));
//get min of array
console.log(Math.min(...array));
//git odd number of values
console.log(array.filter((el)=>el%2!==0));
//get even number of values
console.log(array.filter((el)=>el%2===0));


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

let array=[1,2,3]

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

let x=[1,2,3];
let y= x;
y.pop();
console.log(x); // [1,2]


    // Generate a list of unique nested objects and arrays
    
    const data = [...Array(1000).keys()].map(num => {
        return { [num]: [{ num }] }}
    )
    console.log(data);
        const deepClone = structuredClone(data)
        console.log(deepClone);
        
        // const deepClone = JSON.parse(JSON.stringify(data) )




