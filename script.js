
let array=[10,21,13,40,5,6,7,8,9,10];
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
const remove = (arr)=> [...new Set (arr)];
console.log(remove([1,3,5,8,1,7,9,2,4,5]));

// Scroll to tob
const goToTob=() => window.scrollTo(0,0);

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




const employee={
    name:'Eman',
    Age:34,
    salary:5000
}
// in ====> check if the key is already in the  object returned true or false
const isSalary='salary' in employee;
console.log(isSalary); //true
const isGender='gender' in employee;
console.log(isGender);  //false

// conditional add properties to an object
includeSalary=true;
const employee1={
    name:'Eman',
    Age:34,
    ...(includeSalary && {salary:5000})
}
console.log(employee1);

// includes() method detect if value is found in array or not
const rgbColor=['red','green','blue'];
const isRGP=(color)=>{
    return rgbColor.includes(color);
}
console.log(isRGP('yellow'));
// isArray() method detect if value is an array
console.log('Is this an array? '+ Array.isArray(rgbColor));
// using spreed operator to make copy of array or object
const rgbColorCopy=[...(rgbColor)];
const newEmployee={...(employee1)};
console.log(rgbColorCopy);
console.log(newEmployee);
// removing properties from object without affecting original object
const {salary,...newEmployees} = newEmployee;
console.log(newEmployees);

//falsy value in JS is undefined, null, "", NaN, false, 0
// Filtering array from falsy value by using filter(boolean)
const mixed=["",null,false,true,"Eman",0,undefined,NaN,500];
console.log(mixed.filter(Boolean));
console.log(mixed);

// find()  ||| some()
const assets =[
    {id:1,title:'v-1',type:'video'},
    {id:1,title:'v-1',type:'video'},
    {id:1,title:'v-1',type:'audio'},
]
console.log(assets.find((asset)=>asset.type==="video"));  //{id: 1, title: 'v-1', type: 'video'}
console.log(assets.some((asset)=>asset.type==="video"));  // true

//using numeric separator (_) in large numbers
const large= 450_000_000; // === 450000000 === 45e9

//Object destructuring frm an array  ** property name corresponding to index of item in array **
const colors=['#000000', '#ffffff','#00ff00','#ff0000','#0000ff'];
const {0:firstColor,4:lastColor}=colors;
console.log(firstColor);  //#000000
console.log(lastColor);  //#0000ff
//skipping element of an array by using empty and ,
const[,,...newColors]=colors;
console.log(newColors ); //['#00ff00', '#ff0000', '#0000ff']

// JSON.stringify() transfer JS object to JSON object
const json=JSON.stringify(employee1);
console.log(json); // {"name":"Eman","Age":34,"salary":5000}

// when passing anther paremter to  JSON.stringify() work as a filter to this object only show property on this filter
const filters =["name","Age"];
const jsonFiltered=JSON.stringify(employee1, filters);
console.log(jsonFiltered); //{"name":"Eman","Age":34}

//Currency format
function formatCurrency(amount,currencyCode,local='en-Us'){
    return new Intl.NumberFormat( local, {
        style:'currency',
        currency:currencyCode
    }).format(amount);
}

// Example
console.log(formatCurrency(45478.568,'USD'));  //$45,478.57
console.log(formatCurrency(45478.568,'EUR'));  //€45,478.57
console.log(formatCurrency(45478.568,'EGP'));  //EGP 45,478.57
console.log(formatCurrency(45478.568,'INR'));  //₹45,478.57
console.log(formatCurrency(45478.568,'JPY'));  //¥45,479
console.log(formatCurrency(45478.568,'SAR'));  //SAR 45,478.57