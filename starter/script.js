// // data 1 😊
// const markWeights = 78;
// const markHeight = 1.69;
// const johnWeights = 92;
// const johnHeight =1.95;

// const theBMIForMark = markWeights / (markHeight **2);
// console.log(theBMIForMark);

// const theBMIForJohn = johnWeights / (johnHeight **2);
// console.log(theBMIForJohn);

// console.log(theBMIForJohn > theBMIForMark);

// // example

// // if (theBMIForJohn >= theBMIForMark) {
// //     console.log(`john's BMI is ${theBMIForJohn} and it's higher than mark`)
// // }else {
// //     console.log(`mark's BMI is ${theBMIForMark} and it's higher than BMI of john`)
// // }



//  // type conversion 
// // you can convert a string ("1991") to a number like that :
// const inputYear = "1991";
// console.log(inputYear + 18); // it will be converted to a string like that >>> 199118 
// console.log(Number(inputYear) + 18); // it will be converted to a number like that>>> 2009 ✔
// //you can convert number to string but you can't convert a string "hello" to a number >>> you will get NaN MEANS NOT A NUMBER 
// console.log(String(23));
// //the  S is capital 😁
// // 🎇🎇🎇
//  // type coercion 

// console.log("I'm " + 23 + " years old ");
// // it will automatichlly change the number to a string 
// // ex:
// console.log("23"-"33"- 11) // in this case beacause of the minus JS will convert the string to a number >> -21
// console.log("230"+ "32"+ 23);
// // beacause of the plus JS will convert the number to a string >> 2303223 
// console.log("23" * "2");
// // it will convert it to a number as will as the division 


// 🎇🎇🎇🎇🎇truthy and falsy
// falsy valuse are not actually false but will become false when we convert them to boolean
// 5 falsy values :{ 0, '' embty string , undefined , null , NaN }
//console.log(Boolean(0)); //>> false 
//console.log(Boolean(undefined))//>> false 
//console.log(Boolean('maysam'));//>> true
//console.log(Boolean({}));//>> this is an impty object so it's  true.


// 🎇🎇🎇🎇🎇🎇 equality operators == vs ===    Q=9

// const age = 18;
// if (age === 18) console.log('you are an adult 🎉'); //strict equality have to be the same if its a number it have to be a number in the if statment to be TRUE 🎈 best practice 🎈

// if (age == 18) console.log('you are an adult 🎉');
// // LOOSE equality it doesn't matter if the variable is a number or a string it will be true 

// const favourite =Number( prompt("what is your favorite number"));
// if (favourite === 23){
//     console.log('cool is beeautiful');
// }else if ( favourite === 7){
//     console.log('7 is cool too');
// }else {
//     console.log('nimber is not 23 ot 7s')
// }

// if (favourite !== 23 ) console.log('leeeh la2 ')


// logical operator ✨
// ++
const hasDrivesLicense = false;
const hasGoodVision = true;

console.log(hasDrivesLicense && hasGoodVision);
console.log(hasDrivesLicense || hasGoodVision);
console.log(!hasDrivesLicense); // ! means not 

// const shouldDrive = (hasDrivesLicense && hasGoodVision);
  if (shouldDrive) {
      console.log('you can drive');
  }else {
      console.log('sorry you cant drive');
  }

// 🎈
// const hasDrivesLicense = false;
// const hasGoodVision = true;

console.log(hasDrivesLicense && hasGoodVision);
console.log(hasDrivesLicense || hasGoodVision);

  const isTired = true;
  console.log(hasDrivesLicense || hasGoodVision || isTired);


const shouldDrive = (hasDrivesLicense && hasGoodVision !== isTired);
  if (shouldDrive) {
      console.log('you can drive');
  }else {
      console.log('sorry you cant drive');
  }

// ✨✨✨✨✨
