// Remove

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let remove = 3;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == remove) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr)



//     *******************************************************************************************************


//     Searching

// let arr = [1, 2, 3, 4, 5, 6, 7]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 3) {
//         console.log("True")
//     }
//     else {
//         console.log("False")
//     }
// }



// *******************************************************************************************************




//     For Counting vowels and lenght of str                                                              01 Aug 24

// const Str = "welcome to bca";
// const vowel = 'aeiouAEIOU';
// let Count = 0;
// for (let i = 0; i < Str.length; i++) {
//     if (vowel.includes(Str[i])) {
//         Count++;
//     }
// }
// console.log("lenght of Str", Str.length);
// console.log("Vowel Count", Count);




// COunting lenght of str and aslo showing which vowel comes how many time                                01 Aug 24


// const Str = "welcOme to bca";
// const A = 'aA'; const E = 'eE'; const I = 'iI'; const O = 'oO'; const U = 'uU';
// let Acount = 0; let Ecount = 0; let Icount = 0; let Ocount = 0; let Ucount = 0;
// for (let i = 0; i < Str.length; i++) {
//     if (A.includes(Str[i])) {
//         Acount++;
//     }
//     else if (E.includes(Str[i])) {
//         Ecount++;
//     }
//     else if (I.includes(Str[i])) {
//         Icount++;
//     }
//     else if (O.includes(Str[i])) {
//         Ocount++;
//     }
//     else if (U.includes(Str[i])) {
//         Ucount++;
//     }
// }
// console.log("lenght of Str :", Str.length);
// console.log("A :", Acount, "\n", "E :", Ecount, "\n", "I :", Icount, "\n", "O :", Ocount, "\n", "U :", Ucount);




// *******************************************************************************************************




//     let Array = [2, 3, 5, 76, 5, 4, 5]                                                              //02 Aug 24

// for (let i = 0; i < Array.length; i++) {
//     let Ans = 0;
//     (Array.map((item) => { Ans = item * Array[i] }))

//     if (Ans < 100) {
//         console.log(Ans);
//     }
// }
// console.log(Ans);





// *******************************************************************************************************






//     let input = ["ajay Kammar", "pro Dev", "roshan H"]                                               03 Aug 24
// output = ["#Ajay_Kammar", "#Pro_Dev", "#Roshan_H"]

// let input = ["ajay Kammar", "pro Dev", "roshan H"]


// let result = input.map(
//     (char) =>
//         "#"+char.charAt(0).toUpperCase()+char.slice(1).split(" ").join("_")
// )
// console.log(result);




// for (let i = 0; i < input.length; i++) {
//     let str = input[i];
//     let letter = "#";
//     if (str.length > 0) {
//         str = letter + str.charAt(0).toUpperCase() + str.slice(1);
//     }

//     let update = "";
//     for (let j = 0; j < str.length; j++) {
//         if (str[j] === " ") {
//             update += "_";
//         } else {
//             update += str[j];
//         }
//     }
//     input[i] = update;
// }
// console.log(input)





// another method

// const Hastag = (arr) => {
//     let result = [];
//     for( let i=0; i< arr.length; i++){
//         let data = "#" + arr[i].charAt(0).toUpperCase()+arr[i].slice(1);

//         result.push(data.split(" ").join("_"));
//     }
//     return result;
// };

// Hastag(input);

// console.log(Hastag(input));



//     *******************************************************************************************************





//     let Str = "yg ygwqw nagrajsius qswyg wsnagraj wqdyed iugc  nagraj ueudge ciudgidw diueee nagraj";
// console.log(Str.split("nagraj").length - 1);


// const countAlf = () => {
//     let count = 0;
//     for (let i = 0; i < Str.length; i++) {

//         Str[i] === "n" &&
//             Str[i + 1] === "a" &&
//             Str[i + 2] === "g" &&
//             Str[i + 3] === "r" &&
//             Str[i + 4] === "a" &&
//             Str[i + 5] === "j" &&
//         ? count++ : "";
//     }
//     return count;
// }

// console.log(countAlf(Str));




// *******************************************************************************************************




// const num = 5;

// for (let i = 0; i <= num; i++) {
//     console.log('*'.repeat(i));
// }


// let start = "";
// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         start += "*";
//         console.log(start)

//     }
// }




// *******************************************************************************************************





// largest word in the Str

// let Str = "hello i am frontend devloper and i am learning backend now";
// let largest_word ="";
// const Largest = (Str) => {
//     const word = Str.split(/\s+/);
//     // let largest_word = "";

//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > largest_word.length) {
//             largest_word = word[i];
//         }
//     }
//     return largest_word;
// }
// console.log(Largest(Str));





// *******************************************************************************************************

